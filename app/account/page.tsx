import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <div>
      <div className="w-full grid place-items-center my-5">
        <FormInput label='Names' name='names' type='text' placeholder='kyden mamushi' className='my-1' />
        <FormInput label='Email' name='email' type='email' placeholder='kyden@gmail.com' className='my-1' />
        <FormInput label='Phone' name='phone' type='tel' placeholder='0712345678' className='my-1' />
        <div className="w-80 my-2">
          <p className="text-gray-500">Change Password</p>
        </div>
        <FormInput label='Old Password' name='names' type='password' placeholder='Previous Password' className='my-1' />
        <FormInput label='New Passowrd' name='names' type='password' placeholder='Enter New Password' className='my-1' />
        <FormInput label='Confirm Password' name='names' type='password' placeholder='Confirm New Password' className='my-1' />
        <Button className='my-2'>Update Changes</Button>
      </div>
    </div>
  )
}

export default page