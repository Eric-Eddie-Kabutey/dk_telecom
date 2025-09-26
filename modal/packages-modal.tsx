import Typography from "@/components/shared/typography"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"
import { ArrowUpRight, Check } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const plans = [
	{
		name: 'Starter',
		isPopular: false,
		isFeatured: false,
		prices: {
			monthly: 2500,
			annual: 19500,
			setup: 5000,
		},
		features: [
			'5MBPS Speed',
			'1 Router',
			'Fast, Reliable & Affordable Internet',
			'30 days unlimited browsing',
			'Excellent 24/7 Customer Care Service',
			'Free Support',
			'Free Installation.',
		],
	},
	{
		name: 'Premium',
		isPopular: false,
		isFeatured: false,
		prices: {
			monthly: 3500,
			annual: 27300,
			setup: 5000,
		},
		features: [
			'7MBPS Speed',
			'1 Router',
			'Fast, Reliable & Affordable Internet',
			'30 days unlimited browsing',
			'Excellent 24/7 Customer Care Service',
			'Free Support',
			'Free Installation.',
		],
	},
	{
		name: 'Elite',
		isPopular: true,
		isFeatured: false,
		prices: {
			monthly: 5000,
			annual: 39000,
			setup: 5000,
		},
		features: [
			'10MBPS Speed',
			'Public IP',
			'Fast, Reliable & Affordable Internet',
			'30 days unlimited browsing',
			'Excellent 24/7 Customer Care Service',
			'Free Support',
			'Free Installation.',
		],
	},
	{
		name: 'Elite Pro',
		isPopular: false,
		isFeatured: true,
		prices: {
			monthly: 'Negotiable',
			annual: 'Negotiable',
			setup: 'Negotiable',
		},
		features: [
			'Customised Speed',
			'Public IP',
			'Fast, Reliable & Affordable Internet',
			'30 days unlimited browsing',
			'Excellent 24/7 Customer Care Service',
			'Free Support',
			'Free Installation.',
		],
		featureTitle: 'For multiple teams',
	},
]

type ModalProp = {
    open: boolean;
    setOpen: (open: boolean) => void
}

export function PackagesModal({open, setOpen}: ModalProp) {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className='max-container 2xl:w-[85%] w-[90%] max-h-[95vh] mx-auto px-4 overflow-auto'>
                <div className="h-fit">
                    <DialogHeader className="flex flex-col gap-2">
                        <div className='text-center max-w-2xl mx-auto mb-3'>
                            <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
                                Plans and Pricing
                            </h2>
                            <p className='mt-2 text-lg text-gray-600'>
                                Shared Bandwidth Packages
                            </p>
                        </div>

                        {/* Billing Cycle Toggle */}
                        <div className='flex justify-center mb-4'>
                            <ToggleGroup
                                type='single'
                                value={billingCycle}
                                onValueChange={(value: 'monthly' | 'annual') => {
                                    if (value) setBillingCycle(value)
                                }}
                                className='bg-gray-100 p-1 rounded-full'>
                                <ToggleGroupItem
                                    value='monthly'
                                    className='rounded-full data-[state=on]:bg-white data-[state=on]:shadow-sm px-6'>
                                    Monthly
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value='annual'
                                    className='rounded-full data-[state=on]:bg-white data-[state=on]:shadow-sm py-1 pr-24 relative'>
                                    Annual
                                    <Badge className='absolute inset-y-1 right-1 bg-green-100 text-green-800 border-green-200 pointer-events-none'>
                                        Save 35%
                                    </Badge>
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </DialogHeader>

                    {/* Pricing Cards Grid */}
                    <div className="max-h-[60vh] overflow-y-auto pr-2">
                        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 items-start'>
                            {plans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={cn(
                                        'rounded-2xl p-5 border h-full flex flex-col',
                                        plan.isFeatured
                                            ? 'bg-[#130B54] text-white border-[#130B84] shadow-xl '
                                            : 'bg-white border-gray-200 shadow-md'
                                    )}>
                                    <div className='flex justify-between items-center mb-2'>
                                        <h3 className='text-xl font-semibold'>{plan.name}</h3>
                                        {plan.isPopular && (
                                            <Badge
                                                variant='outline'
                                                className='bg-orange-100 text-orange-800 border-orange-200'>
                                                Popular
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Price Section */}
                                    <div className='mb-3'>
                                        <p className='text-2xl font-bold'>
                                            {typeof plan.prices.monthly === 'number'
                                                ? `D${(billingCycle === 'monthly'
                                                        ? plan.prices.monthly
                                                        : plan.prices.annual
                                                    ).toLocaleString()}`
                                                : plan.prices.monthly}
                                        </p>
                                        <p
                                            className={cn(
                                                'text-sm mt-1',
                                                plan.isFeatured ? 'text-blue-200' : 'text-gray-500'
                                            )}>
                                            {billingCycle === 'monthly'
                                                ? 'Monthly Subscription: Per user/month.'
                                                : 'Annual Subscription: Per user/year.'}
                                        </p>
                                    </div>
                                    <div className='mb-'>
                                        <p className='text-xl font-bold'>
                                            {typeof plan.prices.setup === 'number'
                                                ? `D${plan.prices.setup.toLocaleString()}`
                                                : plan.prices.setup}
                                        </p>
                                        <p
                                            className={cn(
                                                'text-sm mt-1',
                                                plan.isFeatured ? 'text-[#130B54' : 'text-gray-500'
                                            )}>
                                            1 Router (One time) / Per user.
                                        </p>
                                    </div>

                                    <hr
                                        className={cn(
                                            'my-4',
                                            plan.isFeatured ? 'border-blue-500' : 'border-gray-200'
                                        )}
                                    />

                                    {/* Features Section */}
                                    <div className='flex-grow'>
                                        <p
                                            className={cn(
                                                'text-sm font-semibold mb-3',
                                                plan.isFeatured ? 'text-blue-100' : 'text-gray-700'
                                            )}>
                                            {plan.featureTitle || 'For your use'}
                                        </p>
                                        <ul className='space-y-2'>
                                            {plan.features.map((feature) => (
                                                <li key={feature} className='flex items-center gap-2'>
                                                    <div
                                                        className={cn(
                                                            'w-5 h-5 rounded-full flex items-center justify-center',
                                                            plan.isFeatured ? 'bg-white/20' : 'bg-gray-100'
                                                        )}>
                                                        <Check
                                                            className={cn(
                                                                'w-3.5 h-3.5',
                                                                plan.isFeatured ? 'text-white' : 'text-gray-600'
                                                            )}
                                                        />
                                                    </div>
                                                    <span
                                                        className={cn(
                                                            'text-sm',
                                                            plan.isFeatured ? 'text-blue-50' : 'text-gray-600'
                                                        )}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button */}
                                    <Button
                                        size='lg'
                                        className={cn(
                                            'w-full mt-2',
                                            plan.isFeatured
                                                ? 'bg-white text-[#130B54] hover:bg-gray-100'
                                                : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
                                        )}>
                                        {plan.name === 'Elite Pro'
                                            ? `Get started with ${plan.name}`
                                            : 'Get started for free'}
                                    </Button>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                {/* Section Header */}
        
            </DialogContent>
        </Dialog>
    )
}