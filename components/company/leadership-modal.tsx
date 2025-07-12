'use client'
import Typography from "@/components/shared/typography"
import { TeamMember } from "@/types"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

type ModalProp = {
    open: boolean;
    setOpen: (open: boolean) => void;
    member: TeamMember | null;
}

export function LeadershipModal({open, setOpen, member}: ModalProp) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        
        <DialogContent className="sm:max-w-[850px] h-[90%] flex flex-col overflow-auto">
            <div
                className="leadership-bg h-[55%] rounded-xl"
            >
                <Image 
                    src={member?.img || ''}
                    alt={`Member ${member?.name}`}
                    className="w-[50%] mx-auto h-full object-cover object-top "
                />
            </div>
          <DialogHeader
            className="py-2 flex flex-col"
          >
            <DialogTitle
                className="text-[1.6rem] font-medium leading-none"
            >
                {member?.name}
            </DialogTitle>
            <Typography
                className="text-app-secondary"
            >
                {member?.title}
            </Typography>
          </DialogHeader>
            
            <div className="dm-sans flex flex-col gap-2">
                {member?.description.map(data => (
                    <Typography
                        key={data}
                        typo="body-small-regular"
                        className="!font-extralight !text-base tracking-wider"
                    >
                        {data}
                    </Typography>
                ))}
            </div>
        </DialogContent>
    </Dialog>
  )
}
