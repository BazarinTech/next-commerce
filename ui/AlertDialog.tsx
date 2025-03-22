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
    setOpen: (open: boolean) => void,
    handleGrab: () => void,
    setProgress: (progress: number) => void,
    progress: number
  }
  
  export function AlertDialogDemo({ open, setOpen, handleGrab, setProgress, progress }: Props) {
  
    useEffect(() => {
      if (open) {
        const timer = setTimeout(() => {
          setProgress(100)
          handleGrab()
        }, 5000)
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
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Progress value={progress} className="w-[100%] my-5" />
          <AlertDialogFooter>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  