'use client'

import {MoveLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Topbar2 = () => {
  const router = useRouter();
    const navDetails = [
        { name: "Bank", href: "/bank"},
        { name: "Bonus", href: "/bonus"},
        { name: "Add Funds", href: "/deposit"},
        { name: "Transaction", href: "/transaction"},
        { name: "Make Withdrawal", href: "/withdraw"},
        { name: "Profile Details", href: "/account"},
      ];

  const [isHide, setIsHide] = useState<boolean>(false)
  const pathsHide = [
    '/orders',
    '/about',
    '/wallet',
    '/',
    '/team',
    '/auth/2fa',
    '/auth/login',
    '/auth/register'
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
    <div className={`${isHide ? 'hidden' : 'sticky'} border-b-2 border-gray-200 px-4 py-4 bg-white/50 z-10 backdrop-blur-lg top-0`}>
        <p className="text-2xl text-justify font-bold flex gap-2 items-center">
            <button onClick={() => router.back()} className="cursor-pointer">
                    <MoveLeft />
            </button>

            {navDetails.map((nav) =>
              pathname === nav.href ? (
                <span key={nav.href} className="px-2">{nav.name}</span>
              ) : null // Don't render empty spans
            )}
        </p>
    </div>
  )
}

export default Topbar2