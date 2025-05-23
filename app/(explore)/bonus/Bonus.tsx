'use client'

import BonusComp from "@/components/BonusComp"
import { useAuth } from "@/contexts/AuthProvider"
import getBonus from "@/lib/getBonus"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Bonus() {
    const {email, userStatus } = useAuth()
    const [bonus, setBonus] = useState<Bonus[]>([])
    const router = useRouter()

    useEffect(() => {
        const fetchTeam = async (email: string) => {
            const res = await getBonus({email});
            setBonus(res)
        }

        if (email) {
            if (userStatus == 'Unverified') {
                router.push('/auth/2fa')
              }else{
                fetchTeam(email)
              }
        }else{
            router.push('/auth/login')
        }
    }, [email,router])
  return (
    <div>
        <div className="w-full grid place-items-center px-4 py-2">
            {bonus.map((item) => {
                return <BonusComp name={item.name} bonus={item.reward} target_type={item.target_type} type={item.reward_type} status={item.status} target={item.target} reached={item.reached} key={item.id} email={email} id={item.id} />
            })}
        
      </div>
    </div>
  )
}