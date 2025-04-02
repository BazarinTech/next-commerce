'use client'

import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthProvider'
import accountUpdate from '@/lib/accountUpdate'
import getAccount from '@/lib/getAccount'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'


type Results = {
    status: string,
    message: string,
    error?: Error[]
}
type Error = {
    message: string
    input: string
}

export default function Account() {
    const { email } = useAuth()
    const router = useRouter()
    const [formData, setFormData] = useState<AccountData>({
        name: '',
        email: '',
        phone: '',
        old_password: '',
        new_password: '',
        con_password: '',
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [response, setResponse] = useState<Results>({
           status: '',
           message: '',
       })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleUpdate = async () => {
        const regData = await accountUpdate({...formData, setIsLoading})
        setResponse(regData)

        if (regData.status === 'Success') {
            toast.success(regData.message)
        }
    }
    useEffect(() => {
        const fetchAccount = async (email: string) => {
            const res = await getAccount({ email });
            setFormData((prev) => ({ ...prev, ...res, email })); // Functional update
        };
    
        if (email) {
            fetchAccount(email);
        } else {
            router.push('/auth/login');
        }
    }, [email, router]); // ✅ Only essential dependencies
    
    

  return (
    <div>
        <div className="w-full grid place-items-center my-5">
        <FormInput label='Names' name='name' type='text' placeholder='kyden mamushi' className='my-1' value={formData.name} handleInput={handleInput} error={response.error} />
        <FormInput label='Email' name='email' type='email' placeholder='kyden@gmail.com' className='my-1' value={formData.email} readOnly={true} />
        <FormInput label='Phone' name='phone' type='tel' placeholder='0712345678' className='my-1' value={formData.phone} readOnly={true} />
        <div className="w-80 my-2">
          <p className="text-gray-500">Change Password</p>
        </div>
        <FormInput label='Old Password' name='old_password' type='password' placeholder='Previous Password' className='my-1' value={formData.old_password} handleInput={handleInput} error={response.error} />
        <FormInput label='New Passowrd' name='new_password' type='password' placeholder='Enter New Password' className='my-1' value={formData.new_password} handleInput={handleInput} error={response.error} />
        <FormInput label='Confirm Password' name='con_password' type='password' placeholder='Confirm New Password' className='my-1' value={formData.con_password} handleInput={handleInput} error={response.error} />
        <Button disabled={isLoading} onClick={handleUpdate} className="my-5">{isLoading ? 'Please wait..' : 'Update Changes'}</Button>
      </div>
    </div>
  )
}