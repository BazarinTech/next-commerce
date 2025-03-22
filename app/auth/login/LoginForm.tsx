'use client'

import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import userLogin from '@/lib/userLogin'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { useAuth } from '@/contexts/AuthProvider'

type Error = {
    message: string
    input: string
}
type FormData = {
    email: string
    password: string,
}
type Results = {
    status: string,
    message: string,
    error?: Error[]
}
export default function LoginForm() {
    const router = useRouter()
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    })
    const [response, setResponse] = useState<Results>({
        status: '',
        message: '',
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleLogin = async() => {
        const regData = await userLogin({...formData, setIsLoading})
        setResponse(regData)

        if (regData.status === 'Success') {
            toast.success(regData.message)

            // Store Token using AuthContext
            login( formData.email );

            // Redirect to home page
            setTimeout(() => {
                router.push("/");
            }, 2000);
            setTimeout(() => {
                router.push("/") // Redirect to the login page
              }, 2000)
        }

    }
  return (
    <div className='grid place-items-center'>
        <FormInput name='email' placeholder='eg Putrel@gmail.com' type='email' width='w-full' className='max-w-xl my-1' label='Enter Email' handleInput={handleInput} error={response.error}/>
        <FormInput name='password' placeholder='Secret Password' type='password' width='w-full' className='max-w-xl my-1' label='Enter Password' handleInput={handleInput} error={response.error}/>
        <Button disabled={isLoading} onClick={handleLogin} className="my-5">{isLoading ? 'Please wait..' : 'Proceed To Authentication'}</Button>
    </div>
  )
}