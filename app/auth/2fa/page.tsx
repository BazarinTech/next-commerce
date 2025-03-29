import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import Link from 'next/link'

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div className='w-full max-w-xl grid place-items-center mt-5'>
      <div className="full place-items-center">
        <div className="w-full px-6 py-4">
          <p className="text-lg font-bold text-center">Enter 6 digit Code we sent to your Phone</p>
          <p className="text-gray-500 text-center">Didn&lsquo;t get code? <Link href="/auth/login" className="text-blue-500 font-bold">Resend</Link> in 30.0 seconds</p>
        </div>
        <InputOTP maxLength={6} className='my-2'>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button className='mt-5'>Verify Code</Button>
      </div>
      
    </div>
  )
}

export default page