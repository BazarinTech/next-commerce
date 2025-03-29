
import Link from 'next/link'
import LoginForm from './LoginForm'

function page() {
  return (
    <div className='w-full place-items-center'>
      <div className="w-full grid place-items-center max-w-xl mt-5 px-4 py-2">
        <div className="block w-full my-2">
          <p className="text-xl font-bold my-1">Login to your account</p>
          <p className="text-gray-500 my-1">Don&lsquo;t have an account? <Link href='/auth/register' className='text-blue-500 font-bold'>Register</Link></p>
          <LoginForm />
        </div>

      </div>
    </div>
  )
}

export default page