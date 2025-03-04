'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AlertComp from "./AlertComp"

type Props = {
    children: React.ReactNode,
    title: string,
    description: string,
    trigger: React.ReactNode,
    footer: React.ReactNode,

}

function DialogComp({children, title, description, trigger, footer}: Props) {
  return (
    <div>
        <Dialog >
            <DialogTrigger asChild >
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] grid place-items-center">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                    {children}
                <DialogFooter>
                    {footer}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default DialogComp