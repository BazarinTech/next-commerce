import { Skeleton } from "@/components/ui/skeleton"

function Load() {
    return (
      <div className="w-full max-w-4xl">
        <div className="flex border-b-1 border-gray-200 px-4 py-2 my-2 items-center justify-between">
          <div className="w-1/2 px-2 space-y-2">
            <Skeleton className="w-full h-5 rounded-lg"/>
            <Skeleton className="w-full h-5 rounded-lg"/>
          </div>
          <div className="w-1/2 grid place-items-center space-y-2">
            <Skeleton className="w-1/2 h-5 rounded-lg"/>
            <Skeleton className="w-1/2 h-5 rounded-lg"/>
            </div>
        </div>

        <div className="flex border-b-1 border-gray-200 px-4 py-2 my-2 items-center justify-between">
          <div className="w-1/2 px-2 space-y-2">
            <Skeleton className="w-full h-5 rounded-lg"/>
            <Skeleton className="w-full h-5 rounded-lg"/>
          </div>
          <div className="w-1/2 grid place-items-center space-y-2">
            <Skeleton className="w-1/2 h-5 rounded-lg"/>
            <Skeleton className="w-1/2 h-5 rounded-lg"/>
            </div>
        </div>
      </div>

    )
  }
  
  export default Load