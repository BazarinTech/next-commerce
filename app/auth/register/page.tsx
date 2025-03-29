
import Link from 'next/link'
import RegisterForm from './RegisterForm'
import { Suspense } from 'react'

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div className='w-full place-items-center'>
      <div className="w-full grid place-items-center max-w-xl mt-5 px-4 py-2">
        <div className="block w-full my-2">
          <p className="text-xl font-bold my-1">Create a new account</p>
          <p className="text-gray-500 my-1">Already have an account? <Link href='/auth/login' className='text-blue-500 font-bold'>Login</Link></p>
          <Suspense fallback={<div>Loading...</div>}>
           <RegisterForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default page