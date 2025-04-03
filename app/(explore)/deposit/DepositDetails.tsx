'use client'

import AlertComp from "@/components/AlertComp"
import FormInput from "@/components/FormInput"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthProvider"
import initiateDeposit from "@/lib/initiateDeposit"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"


export default function DepositDetails() {
    const router = useRouter()
    const { email, userStatus } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [postData, setPostData] = useState<Transact>({
        amount: '',
        email: '',
        type: 'Deposit',
    })

    useEffect(() => {
        if (email) {
            if (userStatus == 'Unverified') {
                router.push('/auth/2fa')
              }else{
                setPostData((prev) => ({ ...prev, email }))
              }
        }else{
            router.push('/auth/login')
        }
    }, [email, router])

    const handleDeposit = async () => {
        setIsLoading(true)
        const res = await initiateDeposit({...postData})
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
    <div className="w-full grid place-items-center">
        <div className="w-full grid place-items-center">
            <AlertComp title="Depositing Steps" className="my-2 w-[90%]">
                <ul className="list-disc list-inside">
                    <li>Step 1: Enter the amount you want to deposit</li>
                    <li>Step 2: Make sure you have setup wallet to fund your account</li>
                    <li>Step 3: Click on Proceed to Deposit</li>
                    <li>Step 4: Confirm by entering correct mpesa pin</li>
                    <li>Finall: Your deposits should reflect instantly</li>
                </ul>
            </AlertComp>
        </div>

      <div className="grid place-items-center w-full py-4">
        <FormInput name="amount" label="Amount" placeholder="eg 500" type="number" handleInput={handleInput}/>
        <div className="grid place-items-center my-2">
            {!isLoading ? <Button onClick={handleDeposit}>Proceed To Deposit</Button> : <Button disabled>Please wait...</Button>}

        </div>
      </div>
    </div>
  )
}