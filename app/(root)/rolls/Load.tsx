import { Skeleton } from "@/components/ui/skeleton"

function Load() {
    return (
      <div className="w-full max-w-2xl">
        <div className="bg-white w-full rounded-lg py-2 px-4 grid place-items-center my-3">
          <Skeleton className="w-full h-50 rounded-lg mb-4"/>
          <Skeleton className="w-full h-5 rounded-lg mb-4"/>
          <Skeleton className="w-full h-5 rounded-lg mb-4"/>
          <div className="w-full">
          <Skeleton className="w-1/2 h-5 rounded-lg"/>
          </div>
        </div>

        <div className="bg-white w-full rounded-lg py-2 px-4 grid place-items-center my-3">
          <Skeleton className="w-full h-50 rounded-lg mb-4"/>
          <Skeleton className="w-full h-5 rounded-lg mb-4"/>
          <Skeleton className="w-full h-5 rounded-lg mb-4"/>
          <div className="w-full">
          <Skeleton className="w-1/2 h-5 rounded-lg"/>
          </div>
        </div>

        <div className="bg-white w-full rounded-lg py-2 px-4 grid place-items-center my-3">
          <Skeleton className="w-full h-50 rounded-lg mb-4"/>
          <Skeleton className="w-full h-5 rounded-lg mb-4"/>
          <Skeleton className="w-full h-5 rounded-lg mb-4"/>
          <div className="w-full">
          <Skeleton className="w-1/2 h-5 rounded-lg"/>
          </div>
        </div>
      </div>

    )
  }
  
  export default Load