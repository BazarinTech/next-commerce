'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import accountVerify from '@/lib/accountVerify';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthProvider';
import resendCode from '@/lib/resendCode';
import DialogComp from '@/components/DialogComp';
import FormInput from '@/components/FormInput';
import accountUpdate from '@/lib/accountUpdate';
import { Edit } from 'lucide-react';
import getAccount from '@/lib/getAccount';

type PostData = {
  email: string;
  code: string;
};

function Details() {
  const router = useRouter()
  const { email, login } = useAuth();
  const [timer, setTimer] = useState(30);
  const [isCounting, setIsCounting] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isRLoading, setIsRLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<AccountData>({
    name: '',
    email: '',
    phone: '',
    old_password: '',
    new_password: '',
    con_password: '',
})
  const [postData, setPostData] = useState<PostData>({
    email: '',
    code: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
}

  const fetchAccount = async (email: string) => {
      const res = await getAccount({ email });
      setFormData((prev) => ({ ...prev, ...res, email })); // Functional update
  };

  const [otpValue, setOtpValue] = useState('');

  useEffect(() => {
    if (email || email == 'Bug') {
        setPostData({...postData, email})
        fetchAccount(email)
    }else{
        router.push('/auth/login')
    }
    }, [email, router])

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCounting && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsCounting(false);
    }
    return () => clearInterval(interval);
  }, [timer, isCounting]);

  const handleResend = async() => {
    setTimer(30);
    setIsCounting(true);
    setIsRLoading(true)
    const response = await resendCode({...postData});

    if (response.status == 'Success') {
        toast.success(response.message)
    }else{
        toast.error(response.message)
    }
    setIsRLoading(false)
  };

  const handleOtpChange = (value: string) => {
    setOtpValue(value);
    setPostData((prevData) => ({
      ...prevData,
      code: value, // Sync OTP with the postData object
    }));
  };

  const handleVerify = async() => {
    setIsLoading(true)
    const response = await accountVerify({...postData});

    if (response.status == 'Success') {
        toast.success(response.message)
        login(postData.email, 'Verified')
        // Redirect to home page
        setTimeout(() => {
            router.push("/welcome");
        }, 2000);
    }else{
        toast.error(response.message)
    }
    setIsLoading(false)
  }

  const handleSaveChanges= async () => {
    const regData = await accountUpdate({...formData, setIsLoading})

    if (regData.status === 'Success') {
        toast.success(regData.message)
    }else{
      toast.error(regData.message)
    }
}

  return (
    <div className="w-full grid place-items-center">
      <div className="w-[100%] grid place-items-center px-6 py-4">
        <p className="text-lg font-bold text-center">Enter 6-digit code we sent to your phone</p>
        <DialogComp 
        title='Phone Number' 
        description='Make sure to enter valid Phone Number!' 
        trigger={<Button className='my-4'>Edit Phone <Edit /></Button>} 
        footer={ isLoading ? <Button type="submit" disabled>Saving...</Button> : <Button type="submit" onClick={() => handleSaveChanges()}>Save changes</Button>}
        >
        <div className="grid gap-4 place-items-center py-4">
          <div className="grid grid-cols-4 gap-4">
            <FormInput name='phone' type='tel' label='Phone Number' placeholder='eg 0769472724' value={formData.phone} handleInput={handleInput}/>
          </div>
        </div>
        </DialogComp>
        <p className="text-gray-500 text-center">
          Didn&apos;t get code?{" "}
          <Button variant="outline" onClick={handleResend} disabled={isCounting || isRLoading}>
          {isRLoading ? 'Please wait..' : 'Resend'}
          </Button>{" "}
          {isCounting && `in ${timer} seconds`}
        </p>
      </div>
      <InputOTP maxLength={6} value={otpValue} onChange={handleOtpChange} className="my-2">
        <InputOTPGroup>
          {[...Array(6)].map((_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      {!isLoading ? <Button onClick={handleVerify} className='mt-5'>Verify Code</Button> : <Button disabled className='mt-5'>Please wait...</Button>}
    </div>
  );
}

export default Details;
