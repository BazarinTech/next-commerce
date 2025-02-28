'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
    title?: string
}
const Topbar = ({title}: Props) => {
  const [isHide, setIsHide] = useState<boolean>(false)
  const pathsHide = [
    '/products/2',
  ]
  const pathname = usePathname();
  useEffect(() => {
    if (pathsHide.indexOf(pathname) > -1) {
      setIsHide(true)
    }else{
      setIsHide(false)
    }
  }, [pathname])

  return (
    <div className={`${isHide ? 'hidden' : 'sticky'} border-b-2 border-gray-200 px-2 py-4 bg-white/50 z-10 backdrop-blur-lg top-0`}>
        <p className="text-2xl text-center font-bold">{title ? title : 'Next Commerce'}</p>
    </div>
  )
}

export default Topbar