import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
  import { Progress } from "@/components/ui/progress"
  import { useEffect, useState } from "react"
  
  type Props = {
    open: boolean
    setOpen: (open: boolean) => void
  }
  
  export function AlertDialogDemo({ open, setOpen }: Props) {
    const [progress, setProgress] = useState(13)
  
    useEffect(() => {
      if (open) {
        const timer = setTimeout(() => setProgress(100), 5000)
        return () => clearTimeout(timer)
      }
    }, [open])
  
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Grabbing initiating...</AlertDialogTitle>
            <AlertDialogDescription className="text-lg ">
              Please wait for the process to complete.
              <Progress value={progress} className="w-[100%] my-5" />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>Cancel Process</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  