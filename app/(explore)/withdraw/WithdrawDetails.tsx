'use client'

import AlertComp from "@/components/AlertComp"
import FormInput from "@/components/FormInput"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthProvider"
import initiateWithdraw from "@/lib/initiateWithdraw"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function WithdrawDetails() {
    const router = useRouter()
    const { email, userStatus } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [postData, setPostData] = useState<Transact>({
        amount: '',
        email: '',
        type: 'Withdraw',
    })
    useEffect(() => {
        if (email) {
            if (userStatus == 'Unverified') {
                router.push('/auth/2fa')
              }else{
                setPostData({...postData, email})
              }
            
        }else{
            router.push('/auth/login')
        }
    }, [email, router])

    const handleDeposit = async () => {
        setIsLoading(true)
        const res = await initiateWithdraw({...postData})
        setIsLoading(false)
        if (res.status === 'Success') {
            toast.success(res.message)
        }else{
            toast.error(res.message)
        }
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostData({...postData, amount: e.target.value})
    }
  return (
    <div className='w-full grid place-items-center'>
        <div className="w-full grid place-items-center">
            <AlertComp title="Withdrawing Steps(fee charged 20%)" className="my-2 w-[90%]">
                <ul className="list-disc list-inside">
                    <li>Step 1: Make sure you have setup wallet to recieve money</li>
                    <li>Step 2: Enter amount you wish to cashout</li>
                    <li>Step 3: Click on Proceed to Cashout</li>
                    <li>Step 4: Money will be approved within shortest time possible</li>
                    <li>Finall: Confirm if money have refrected to your mpesa account. If not yet reach our customer service</li>
                </ul>
            </AlertComp>
        </div>
 
      <div className="grid place-items-center w-full py-4">
        <FormInput name="amount" label="Amount" placeholder="eg 500" type="number" handleInput={handleInput}/>
        <div className="grid place-items-center my-2">
        {!isLoading ? <Button onClick={handleDeposit}>Proceed To Cashout</Button> : <Button disabled>Please wait...</Button>}
        </div>
      </div>
    </div>
  )
}