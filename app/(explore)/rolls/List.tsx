'use client'

import RollProd from "@/components/RollProd"
import { useAuth } from "@/contexts/AuthProvider"
import getRolls from "@/lib/getRolls"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Load from "./Load"
import NotAvailble from "@/components/NotAvailble"

export default function List() {
    const { email, userStatus } = useAuth() 
    const [rolls, setRolls] = useState<Roll[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const router = useRouter()

    const fetchRolls = async (email: string) => {
        setIsLoading(true)
        try {
            const res = await getRolls({ email })
            setRolls(res) 
        } catch (error) {
            console.error("Error fetching rolls:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (email) {
            if (userStatus == 'Unverified') {
                router.push('/auth/2fa')
              }else{
                fetchRolls(email)
              } 
        } else {
            router.push('/auth/login')
        }
    }, [email, router])

    return (
        <div className={`w-full grid place-items-center px-4 py-1 ${rolls.length < 4 ? 'h-screen' : ''}`}>
            {isLoading ? ( 
                <Load />
            ) : (
                rolls.map((roll) => {
                    return (
                        <RollProd
                            status={roll.status}
                            title={roll.name}
                            price={roll.cost}
                            rolls={roll.rolls}
                            key={roll.id}
                            email={email}
                            id={roll.id}
                            image={roll.media}
                        />
                    )
                })
            )}
            
            {rolls.length === 0 && isLoading === false && <NotAvailble title="Rolls"/>}
        </div>
    )
}
