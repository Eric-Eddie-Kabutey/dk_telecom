import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";

type ModalProp = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function InternetSheet({open, setOpen}: ModalProp) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side='left' className="w-[400px] bg-[#f2f2f2]">
        <SheetHeader className="pt-8">
          
        </SheetHeader>
        <div className="w-full pt-16 pl-8 pr-4 flex flex-col items-start gap-6 ">
          <button
            className="w-full pb-5 text-left text-black border-b-2 border-white"
          >
            Order History
          </button>
          <button
            className="w-full pb-5 text-left text-black border-b-2 border-white"
          >
            Request Fibre Relocation
          </button>
          <button
            className="w-full pb-5 text-left text-black border-b-2 border-white"
          >
            Request Internet Relocation
          </button>
          <button
            className="w-full pb-5 text-left text-black border-b-2 border-white"
          >
            Logout
          </button>
        </div>
        <SheetFooter>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
