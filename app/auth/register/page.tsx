import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function page() {
  return (
    <div className='w-full place-items-center'>
      <div className="w-full grid place-items-center max-w-xl mt-5 px-4 py-2">
        <div className="block w-full my-2">
          <p className="text-xl font-bold my-1">Create a new account</p>
          <p className="text-gray-500 my-1">Already have an account? <Link href='/auth/login' className='text-blue-500 font-bold'>Login</Link></p>

        </div>
        <FormInput name='name' placeholder='eg Putro Lauret' type='text' width='w-full' className='max-w-xl my-1' label='Full Name'/>
        <FormInput name='email' placeholder='eg Putrel@gmail.com' type='email' width='w-full' className='max-w-xl my-1' label='Email Address'/>
        <FormInput name='phone' placeholder='eg 0712345678' type='tel' width='w-full' className='max-w-xl my-1' label='Valid Phone Number'/>
        <FormInput name='password' placeholder='Secret Password' type='password' width='w-full' className='max-w-xl my-1' label='Password'/>
        <FormInput name='con-password' placeholder='Secret Password' type='password' width='w-full' className='max-w-xl my-1' label='Confirm Password'/>
        <Button>Proceed To Registration</Button>
      </div>
    </div>
  )
}

export default page