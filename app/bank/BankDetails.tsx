'use client'

import AlertComp from '@/components/AlertComp'
import DialogComp from '@/components/DialogComp'
import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthProvider'
import createBankWallet from '@/lib/createBankWallet'
import getBank from '@/lib/getBank'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

function BankDetails() {
    const router = useRouter()
    const { email } = useAuth()
    const [bankDetails, setBankDetails] = useState<BankDetails | null>({
            dep_name: '',
            dep_account: '',
            with_name: '',
            with_account: '',
        }
    )
    const [inputForm, setInputForm] = useState<BankDetails>({
            dep_name: '',
            dep_account: '',
            with_name: '',
            with_account: '',
    })
    const [dataPost, setDataPost] = useState<BankPost>({
        type: '',
        email: '',
        name: '',
        account: '',
    })
    const [depIsloading, setDepIsloading] = useState<boolean>(false)
    const [withIsloading, setWithIsloading] = useState<boolean>(false)

    const fetchBankDetails = async (email:string) => {
        const res = await getBank({email})
        setBankDetails(res)
    }

    useEffect(() => {
        if (email) {
            fetchBankDetails(email)
            

        }else{
            router.push('/auth/login')
        }
    }, [email, router])

    useEffect(() => {
        setInputForm({
            dep_name: bankDetails?.dep_name || '',
            dep_account: bankDetails?.dep_account || '',
            with_name: bankDetails?.with_name || '',
            with_account: bankDetails?.with_account || '',
        })
    }, [bankDetails])
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSaveChanges = async (type: string) => {
        if (type == 'Deposit') {
            setDepIsloading(true)
            setDataPost({...dataPost, type, email, name: inputForm.dep_name, account: inputForm.dep_account})
            const res = await createBankWallet({...dataPost})
            setDepIsloading(false)
            if (res.status == 'Success') {
                toast.success(res.message)
            }else{
                toast.error(res.message)
            }
        }else{
            // Withdraw
            setWithIsloading(true)
            setDataPost({...dataPost, type, email, name: inputForm.with_name, account: inputForm.with_account})
            const res = await createBankWallet({...dataPost})
            setWithIsloading(false)
            if (res.status == 'Success') {
                toast.success(res.message)
            }else{
                toast.error(res.message)
            }
        }
    }

  return (
    <div className='w-full grid place-items-center'>
      <div className="py-2 px-4 grid place-items-center">
        <DialogComp  
        title='Deposit Account' 
        description='Make sure to enter valid Mpesa account details for toping up your account!' 
        trigger={<Button className='my-4'>Set Up Deposit Account</Button>} 
        footer={ depIsloading ? <Button type="submit" disabled>Saving...</Button> : <Button type="submit" onClick={() => handleSaveChanges('Deposit')}>Save changes</Button>}
        >
        <div className="grid gap-4 py-4 ">
          <div className="grid grid-cols-4 items-center gap-4">
            <FormInput name='dep_name' type='text' label='Mpesa Name' placeholder='Pedro Duarte' value={inputForm.dep_name} handleInput={handleInput}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <FormInput name='dep_account' type='tel' label='Mpesa Number' placeholder='0712345678' value={inputForm.dep_account} handleInput={handleInput}/>
          </div>
        </div>
        </DialogComp>

        <DialogComp  
        title='Withdrawal Account' 
        description='Make sure to enter valid Mpesa account details for recievin money!' 
        trigger={<Button className='my-4'>Set Up Withdrawal Account</Button>} 
        footer={ withIsloading ? <Button type="submit" disabled>Saving...</Button> : <Button type="submit" onClick={() => handleSaveChanges('Withdraw')}>Save changes</Button>}
        >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <FormInput name='with_name' type='text' label='Mpesa Name' placeholder='Pedro Duarte' value={inputForm.with_name} handleInput={handleInput}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <FormInput name='with_account' type='tel' label='Mpesa Number' placeholder='0712345678' value={inputForm.with_account} handleInput={handleInput}/>
          </div>
        </div>
        </DialogComp>
      </div>
      <AlertComp title="About Setting Bank" className="my-2 w-95">
          <ol className="list-disc list-inside">
              <li>Make sure to setup the above accounts before doing any transaction</li>
              <li>Make sure to double check for each account to avoid errors</li>
              <li>NextCo will not be liable for any errors caused by incorrect account details</li>
              <li>Your details are encrypted not even our staff can see them</li>
              <li>Any transaction done will be reflected in your account instantly</li>
          </ol>
      </AlertComp>
    </div>
  )
}

export default BankDetails