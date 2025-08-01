'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Topbar = () => {
  const [title, setTitle] = useState<string | null>()
  const [isHide, setIsHide] = useState<boolean>(false)
  const pathsHide = [
    '/products/2',
    '/deposit',
    '/withdraw',
    '/transaction',
    '/bank',
    '/bonus',
    '/rolls',
    '/account',
    '/auth/2fa',
    '/auth/login',
    '/auth/register'
  ]
  const pathname = usePathname();
  useEffect(() => {
     // Check if the path is in pathsHide OR starts with "/products/"
     if (pathsHide.includes(pathname) || pathname.startsWith("/products/")) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
    if (pathname == '/orders') {
      setTitle('Grabs List')
    }else if(pathname == '/about'){
      setTitle('About Us')
    }else if(pathname == '/team'){
      setTitle('Team List')
    }else if(pathname == '/wallet'){
      setTitle('Wallet')
    } else{
      setTitle(null)
    }

  }, [pathname])

  return (
    <div className={`${isHide ? 'hidden' : 'sticky'} border-b-2 border-gray-200 px-2 py-4 bg-white/50 z-10 backdrop-blur-lg top-0`}>
        <p className="text-2xl text-center font-bold">{title ? title : 'Kilion'}</p>
    </div>
  )
}

export default Topbar