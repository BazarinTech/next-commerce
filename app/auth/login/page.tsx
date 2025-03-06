import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function page() {
  return (
    <div className='w-full place-items-center'>
      <div className="w-full grid place-items-center max-w-xl mt-5 px-4 py-2">
        <div className="block w-full my-2">
          <p className="text-xl font-bold my-1">Login to your account</p>
          <p className="text-gray-500 my-1">Don't have an account? <Link href='/auth/register' className='text-blue-500 font-bold'>Register</Link></p>

        </div>
        <FormInput name='email' placeholder='eg Putrel@gmail.com' type='email' width='w-full' className='max-w-xl my-1' label='Enter Email'/>
        <FormInput name='con-password' placeholder='Secret Password' type='password' width='w-full' className='max-w-xl my-1' label='Enter Password'/>
        <Button>Proceed To Authentication</Button>
      </div>
    </div>
  )
}

export default page