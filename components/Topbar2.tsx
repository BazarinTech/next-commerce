'use client'

import {MoveLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
    title?: string
}
const Topbar2 = ({title}: Props) => {
    const navDetails = [
        { name: "Bank", href: "/bank"},
        { name: "Bonus", href: "/bonus"},
        { name: "Deposit", href: "/deposit"},
        { name: "Product", href: "/products/:prodID"},
        { name: "Transaction", href: "/transaction"},
      ];

  const [isHide, setIsHide] = useState<boolean>(false)
  const pathsHide = [
    '/orders',
    '/rolls',
    '/wallet',
    '/',
    '/team'
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
        <p className="text-2xl text-justify font-bold">
            <Link href="/">
                <MoveLeft />
            </Link>

            {navDetails.map((nav) =>
              pathname === nav.href ? (
                <span key={nav.href}>{nav.name}</span>
              ) : null // Don't render empty spans
            )}
        </p>
    </div>
  )
}

export default Topbar2