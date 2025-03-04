'use client'

import { Coins, Home, ListOrdered, UsersRound, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";


const Bottombar = () => {
  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={30} />},
    { name: "Orders", href: "/orders", icon: <ListOrdered size={30} />},
    { name: "Rolls", href: "/rolls", icon: <Coins size={30} /> },
    { name: "Team", href: "/team", icon: <UsersRound size={30} /> },
    { name: "Wallet", href: "/wallet", icon: <Wallet size={30} /> },
  ];
  
   const [isHide, setIsHide] = useState<boolean>(false)
   const pathsHide = [
    '/products/2',
    '/deposit',
    '/withdraw',
    '/transaction',
    '/bank'
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
    <div className={`${isHide ? 'hidden' : 'sticky'} bottom-0 px-2 py-4 border-t-2 border-gray-200 bg-white flex gap-1`}>
      {navLinks.map((link) => {
        return (
          <Link
          key={link.href}
          href={link.href}
          className={`px-3 rounded-2xl ${pathname == link.href ? 'text-black' : 'text-gray-500'} w-1/5 grid place-items-center text-center`}>
            {link.icon}
            <p className="text-sm">{link.name}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Bottombar