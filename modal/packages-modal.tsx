import Typography from "@/components/shared/typography"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"
import { pricing } from "@/constants"
import { CircleCheck } from "lucide-react"
import { useState } from "react"

type ModalProp = {
    open: boolean;
    setOpen: (open: boolean) => void
}

export function PackagesModal({open, setOpen}: ModalProp) {
    const [selectedPackage, setSelectedpackage] = useState(pricing[0].id)

    const currentPackage = pricing.find(data => data.id === selectedPackage)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] lg:max-h-[800px] lg:h-[80vh] h-[75vh] overflow-auto">
          <DialogHeader className="pt-8">
            <div className='flex flex-col items-center gap-3'>
                <Typography
                    typo="header-4-medium"
                >
                    Plans and Pricing
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-500 text-center'
                >
                    Receive unlimited credits when you pay yearly, and save on our plan
                </Typography>
                <div className="w-full">
                    <div className='w-fit p-1.5 flex items-center gap-3 flex-nowrap bg-gray-100 rounded-md'>
                        {pricing.map(data => (
                            <Button
                                key={data.id}
                                variant="primary"
                                onClick={() => setSelectedpackage(data.id)}
                                className={` ${selectedPackage === data.id ? "bg-white rounded-md" : "bg-gray-100 hover:bg-gray-100"} hover:bg-gray-50  text-black `}
                            >
                                {data.title}
                            </Button>
                        ))}
                        {/* <Button
                            variant="primary"
                            className='!py-4 bg-white text-black hover:bg-gray-50 rounded-md'
                        >
                            Yearly-saves up to 60%
                        </Button> */}
                    </div>
                </div>
            </div>
          </DialogHeader>
          <div className="w-full">
            <Card className={`p- flex flex-col gap-3 text-white ${currentPackage?.title === "Basic" && "border-app-primary"} shadow-none bg-app-secondary`}>
                <CardHeader className='pb-0 flex flex-col gap-1'>
                    <div className='w-full flex justify-between items-center'>
                        <Typography
                            typo="header-5-semibold"
                        >{currentPackage?.title}</Typography>
                        {currentPackage?.title === "Monthly" && (
                            <Button
                                variant="outline"
                                className='!py-1 text-base text-app-primary hover:bg-gray-300'
                            >
                                Most Popular
                            </Button>
                        )}
                    </div>
                    <Typography
                        typo="body-medium-regular"
                        className='text-gray-200'
                    >{currentPackage?.sub_title}</Typography>
                </CardHeader>
                <CardContent className='flex flex-col gap-3'>
                    <Typography
                        typo="header-5-semibold"
                    >
                        {currentPackage?.monthly} <span className='text-gray-300 text-base font-medium'> /monthly</span>
                    </Typography>
                    <Button
                        variant="outline"
                        className='w-full !py-3 text-base hover:bg-gray-200 text-app-primary'
                    >Get started</Button>
                    <Typography
                        typo="body-medium-medium"
                        className='text-gray-200'
                    >
                        {currentPackage?.availability}
                    </Typography>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-large-semibold"
                            className=''
                        >
                            Features include:
                        </Typography>
                        <ul className='flex flex-col gap-2'>
                            {currentPackage?.includes.map(include => (
                                <li key={include} className='flex items-center gap-2 text-gray-200'>
                                    <CircleCheck size={18} />
                                    <span className='text-base'>{include}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
          </div>
        </DialogContent>
    </Dialog>
  )
}
