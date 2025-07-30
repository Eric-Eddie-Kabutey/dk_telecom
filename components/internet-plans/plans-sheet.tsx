import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";
import Typography from "../shared/typography";

type ModalProp = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function PlansSheet({open, setOpen}: ModalProp) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-[400px] bg-[#f2f2f2]">
        <SheetHeader className="pt-">
          <Typography 
            typo="header-6-semibold"
            className="">Menu</Typography>
        </SheetHeader>
        <div className="w-full pt-16 flex flex-col items-start gap-6 ">
          <button
            className="w-full text-left text-black  uppercase"
          >
            Signin
          </button>
          <button
            className="w-full text-left text-black  uppercase"
          >
            Help center
          </button>
          <button
            className="w-full text-left text-black  uppercase"
          >
            Availability map
          </button>
          <button
            className="w-full text-left text-black  uppercase"
          >
            Service plans
          </button>
          <button
            className="w-full text-left text-black  uppercase"
          >
            Technology
          </button>
        </div>
        <SheetFooter>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
