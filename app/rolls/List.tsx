'use client'

import RollProd from "@/components/RollProd"
import { useAuth } from "@/contexts/AuthProvider"
import getRolls from "@/lib/getRolls"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Props = {}

export default function List({}: Props) {
    const { email } = useAuth()
    const [rolls, setRolls] = useState<Roll[]>([])
    const router = useRouter()

    const fetchRolls = async (email:string) => {
        const res = await getRolls({email})
        setRolls(res)
    }
    useEffect(() => {
        if (email) {
            fetchRolls(email)
        }else{
            router.push('/auth/login')
        }
    }, [])
  return (
    <div className="w-full grid place-items-center px-4 py-1">
        {rolls.map((roll) => {
            return(
                <RollProd status={roll.status} title={roll.name} price={roll.cost} rolls={roll.rolls} key={roll.id} email={email} id={roll.id} image={roll.media}/>
            )
        })}
        
      </div>
  )
}