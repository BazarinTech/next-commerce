'use client'

import FormInput from "@/components/FormInput"
import { Button } from "@/components/ui/button"
import userRegister from "@/lib/userRegister"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

type Error = {
    message: string
    input: string
}
type FormData = {
    name: string
    email: string
    phone: string,
    password: string,
    conPassword: string,
}
type Results = {
    status: string,
    message: string,
    error?: Error[]
}


function RegisterForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const searchParams = useSearchParams()
    const router = useRouter()
    const upline = searchParams.get("upline") ? searchParams.get("upline") : '1'
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: '',
        password: "",
        conPassword: "",
    })

    const [response, setResponse] = useState<Results>({
        status: '',
        message: '',
    })
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleRegister = async() => {
        const regData = await userRegister({...formData, setIsLoading, upline})
        setResponse(regData)

        if (regData.status === 'Success') {
            toast.success(regData.message)
            setTimeout(() => {
                router.push("/auth/login") // Redirect to the login page
              }, 2000)
        }

    }
  return (
    <div className="grid place-items-center">   
        <FormInput name='name' placeholder='eg Putro Lauret' type='text' width='w-full' className='max-w-xl my-1' label='Full Name' handleInput={handleInput} error={response.error} />
        <FormInput name='email' placeholder='eg Putrel@gmail.com' type='email' width='w-full' className='max-w-xl my-1' label='Email Address' handleInput={handleInput} error={response.error}/>
        <FormInput name='phone' placeholder='eg 0712345678' type='tel' width='w-full' className='max-w-xl my-1' label='Valid Phone Number' handleInput={handleInput} error={response.error}/>
        <FormInput name='password' placeholder='Secret Password' type='password' width='w-full' className='max-w-xl my-1' label='Password' handleInput={handleInput} error={response.error}/>
        <FormInput name='conPassword' placeholder='Secret Password' type='password' width='w-full' className='max-w-xl my-1' label='Confirm Password' handleInput={handleInput} error={response.error}/>
        <Button disabled={isLoading} onClick={handleRegister} className="my-5">{isLoading ? 'Please wait..' : 'Proceed To Registration'}</Button>
    </div>
  )
}

export default RegisterForm