'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/contexts/AuthProvider"
import getWallet from "@/lib/getWallet"
import useFormat from "@/lib/useFormat"
import { CirclePlus } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function WalletComp() {
    const [wallet, setWallet] = useState<Wallet | null>(null)
        const { email, userStatus } = useAuth()
        const router = useRouter()
        
        const fetchWallet = async (email: string)  => {
            const res = await getWallet({email})
            setWallet(res)
        }
        useEffect(() => {
            if (email) {
              if (userStatus == 'Unverified') {
                router.push('/auth/2fa')
              }else{
                fetchWallet(email)
              }
            }else{
                router.push('/auth/login')
            }
        }, [email, router])
    // 🛠️ Call useFormat outside JSX to prevent conditional hook calls
    const formattedBalance = useFormat({ value: wallet?.balance || 0.00 })
    const formattedIncome = useFormat({ value: wallet?.total_income || 0.00 })
  return (
    <div className="w-full p-4">
        <div className="w-full bg-black px-4 rounded-lg">
          <div className="flex items-center justify-between border-b-2 border-dashed border-gray-400 py-4">
            <div className="block">
              <h2 className="text-white text-3xl font-bold">Balance</h2>
              <div className="flex gap-1 my-2">
                <p className="text-lg text-gray-300">Kes {formattedBalance}</p>
              </div>
            </div>
            <Link href="/deposit" className="block">
              <Button variant="secondary" size="sm">
                <CirclePlus />
                Add Funds
              </Button>
            </Link>
          </div>

          <div className="flex py-4">
            <div className="block w-full">
              <div className="my-2 flex items-center justify-between w-full">
                <div className="block">
                  <h2 className="text-white text-lg font-bold">Total Income</h2>
                  <p className="text-sm text-gray-300">Kes {formattedIncome}</p>
                </div>

                <Separator orientation="vertical" className="bg-gray-300 h-full w-[2px]" />

                <div className="block">
                  <h2 className="text-white text-lg font-bold">Available Rolls</h2>
                  <p className="text-sm text-gray-300">{wallet ? wallet.rolls : 0}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}