"use client"; 

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils"; 

// --- Data Structure for Pricing Plans ---
// This is where all the content for the cards is stored.
const plans = [
  {
    name: "Starter",
    isPopular: false,
    isFeatured: false,
    prices: {
      monthly: 2500,
      annual: 19500, // Calculated as (2500 * 12 * 0.65) to match 35% discount
      setup: 5000,
    },
    features: [
      "5MBPS Speed",
      "1 Router",
      "Fast, Reliable & Affordable Internet",
      "30 days unlimited browsing",
      "Excellent 24/7 Customer Care Service",
      "Free Support",
      "Free Installation.",
    ],
  },
  {
    name: "Premium",
    isPopular: false,
    isFeatured: false,
    prices: {
      monthly: 3500,
      annual: 27300, // (3500 * 12 * 0.65)
      setup: 5000,
    },
    features: [
        "7MBPS Speed",
        "1 Router",
        "Fast, Reliable & Affordable Internet",
        "30 days unlimited browsing",
        "Excellent 24/7 Customer Care Service",
        "Free Support",
        "Free Installation.",
    ],
  },
  {
    name: "Elite",
    isPopular: true, // This plan has the "Popular" badge
    isFeatured: false,
    prices: {
      monthly: 5000,
      annual: 39000, // (5000 * 12 * 0.65)
      setup: 5000,
    },
    features: [
        "10MBPS Speed",
        "Public IP",
        "Fast, Reliable & Affordable Internet",
        "30 days unlimited browsing",
        "Excellent 24/7 Customer Care Service",
        "Free Support",
        "Free Installation.",
    ],
  },
  {
    name: "Elite Pro",
    isPopular: false,
    isFeatured: true, // This plan is styled differently
    prices: {
      monthly: "Negotiable",
      annual: "Negotiable",
      setup: "Negotiable",
    },
    features: [
        "Customised Speed",
        "Public IP",
        "Fast, Reliable & Affordable Internet",
        "30 days unlimited browsing",
        "Excellent 24/7 Customer Care Service",
        "Free Support",
        "Free Installation.",
    ],
    featureTitle: "For multiple teams",
  },
];

export function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-container 2xl:w-[85%] w-[95%] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Plans and Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Shared Bandwidth Packages
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-12">
          <ToggleGroup
            type="single"
            value={billingCycle}
            onValueChange={(value: "monthly" | "annual") => {
              if (value) setBillingCycle(value);
            }}
            className="bg-gray-100 p-1 rounded-full"
          >
            <ToggleGroupItem value="monthly" className="rounded-full data-[state=on]:bg-white data-[state=on]:shadow-sm px-6">
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem value="annual" className="rounded-full data-[state=on]:bg-white data-[state=on]:shadow-sm py-1 pr-24 relative">
              Annual
              <Badge className="absolute inset-y-1 right-1 bg-green-100 text-green-800 border-green-200 pointer-events-none">Save 35%</Badge>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-2xl p-8 border h-full flex flex-col",
                plan.isFeatured
                  ? "bg-blue-700 text-white border-blue-800 shadow-xl "
                  : "bg-white border-gray-200 shadow-md"
              )}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.isPopular && (
                  <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">
                    Popular
                  </Badge>
                )}
              </div>

              {/* Price Section */}
              <div className="mb-6">
                <p className="text-4xl font-bold">
                  {typeof plan.prices.monthly === 'number'
                    ? `D${(billingCycle === 'monthly' ? plan.prices.monthly : plan.prices.annual).toLocaleString()}`
                    : plan.prices.monthly}
                </p>
                <p className={cn("text-sm mt-1", plan.isFeatured ? "text-blue-200" : "text-gray-500")}>
                  {billingCycle === 'monthly' ? 'Monthly Subscription: Per user/month.' : 'Annual Subscription: Per user/year.'}
                </p>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold">
                   {typeof plan.prices.setup === 'number' ? `D${plan.prices.setup.toLocaleString()}` : plan.prices.setup}
                </p>
                <p className={cn("text-sm mt-1", plan.isFeatured ? "text-blue-200" : "text-gray-500")}>
                  1 Router (One time) / Per user.
                </p>
              </div>

              <hr className={cn("my-6", plan.isFeatured ? "border-blue-500" : "border-gray-200")} />

              {/* Features Section */}
              <div className="flex-grow">
                <p className={cn("text-sm font-semibold mb-4", plan.isFeatured ? "text-blue-100" : "text-gray-700")}>
                  {plan.featureTitle || "For your use"}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", plan.isFeatured ? "bg-white/20" : "bg-gray-100")}>
                        <Check className={cn("w-3.5 h-3.5", plan.isFeatured ? "text-white" : "text-gray-600")} />
                      </div>
                      <span className={cn("text-sm", plan.isFeatured ? "text-blue-50" : "text-gray-600")}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Button */}
              <Button 
                size="lg" 
                className={cn(
                  "w-full mt-8", 
                  plan.isFeatured 
                    ? "bg-white text-blue-700 hover:bg-gray-100" 
                    : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
                )}
              >
                {plan.name === 'Elite Pro' ? `Get started with ${plan.name}` : 'Get started for free'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}