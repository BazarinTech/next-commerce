'use client'

import TransactionComp from "@/components/TransactionComp"
import { useAuth } from "@/contexts/AuthProvider"
import getTransactions from "@/lib/getTransactions"
import useFormat from "@/lib/useFormat"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Load from "./Load"
import NotAvailble from "@/components/NotAvailble"

export default function List() {
    const [transactions, setTransactions] = useState<Transactions>({
        deposits: [],
        withdraws: [],
        total_deposits: 0,
        total_withdraws: 0,
    })
    const { email, userStatus } = useAuth()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (email) {
          if (userStatus == 'Unverified') {
            router.push('/auth/2fa')
          }else{
            const fetchTransactions = async (email: string) => {
              const res = await getTransactions({email})
              setTransactions({...transactions, deposits: res.deposits, withdraws: res.withdraws, total_deposits: res.total_deposits, total_withdraws: res.total_withdraws})
              setIsLoading(false)
            }
            fetchTransactions(email)
          }
           
        }else{
            router.push('/auth/login')
        }
    }, [email, router])
  return (
    <div>
        <div className="w-full p-4">
        <div className="w-full bg-black px-4 rounded-lg">
          <div className="flex border-b-2 border-dashed border-gray-400 py-4">
            <div className="block w-full">
              <h2 className='text-white text-3xl font-bold'>Total withdrawn</h2>
              <div className="my-2 flex items-center justify-between w-full">
                <div className="flex gap-1">
                  <p className="text-sm text-gray-300">Kes {useFormat({value: transactions.total_withdraws})}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-4">
            <div className="block w-full">
              <h2 className='text-white text-3xl font-bold'>Total Deposited</h2>
              <div className="my-2 flex items-center justify-between w-full">
                <div className="flex gap-1">
                  <p className="text-sm text-gray-300">Kes {useFormat({value: transactions.total_deposits})}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-2">
      <Tabs defaultValue="with" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger 
            value="with" 
            className="rounded-lg py-4 text-xl transition-colors duration-300 data-[state=active]:bg-black data-[state=active]:text-white hover:bg-black/35"
          >
            Withdrawals
          </TabsTrigger>
          <TabsTrigger 
            value="deps" 
            className="rounded-lg py-4 text-xl transition-colors duration-300 data-[state=active]:bg-black data-[state=active]:text-white hover:bg-black/35"
          >
            Deposits
          </TabsTrigger>
        </TabsList>
        <TabsContent value="with">
            {isLoading ? (<Load />) : transactions.withdraws?.map((transaction) => {
                return(
                    <TransactionComp type={transaction.type} status={transaction.status} dateJoined={transaction.time} amount={transaction.amount} key={transaction.ID} />
                )
            })}
            {transactions.withdraws && transactions.withdraws.length === 0 && isLoading === false && <NotAvailble title="Withdrawals"/>}
        </TabsContent>
        <TabsContent value="deps">
            {isLoading ? (<Load />) : transactions.deposits?.map((transaction) => {
                return(
                    <TransactionComp type={transaction.type} status={transaction.status} dateJoined={transaction.time} amount={transaction.amount} key={transaction.ID} />
                )
            })}
            {transactions.deposits && transactions.deposits.length === 0 && isLoading === false && <NotAvailble title="Deposits"/>}
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}