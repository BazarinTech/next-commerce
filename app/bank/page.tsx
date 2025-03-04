import AlertComp from '@/components/AlertComp'
import DialogComp from '@/components/DialogComp'
import FormInput from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React from 'react'

function page() {
  return (
    <div className='w-full grid place-items-center'>
      <div className="py-2 px-4 grid place-items-center">
        <DialogComp  
        title='Withdrawal Account' 
        description='Make sure to enter valid Mpesa account details for recieving money!' 
        trigger={<Button className='my-4'>Set Up Withdrawal Account</Button>} 
        footer={ <Button type="submit">Save changes</Button>}
        >
        <div className="grid gap-4 py-4 ">
          <div className="grid grid-cols-4 items-center gap-4">
            <FormInput name='name' type='text' label='Mpesa Name' placeholder='Pedro Duarte'/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <FormInput name='phone' type='tel' label='Mpesa Number' placeholder='0712345678'/>
          </div>
        </div>
        </DialogComp>

        <DialogComp  
        title='Deposit Account' 
        description='Make sure to enter valid Mpesa account details for funding your account!' 
        trigger={<Button className='my-4'>Set Up Deposits Account</Button>} 
        footer={ <Button type="submit">Save changes</Button>}
        >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <FormInput name='name' type='text' label='Mpesa Name' placeholder='Pedro Duarte'/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <FormInput name='phone' type='tel' label='Mpesa Number' placeholder='0712345678'/>
          </div>
        </div>
        </DialogComp>
      </div>
      <AlertComp title="About Setting Bank" className="my-2 w-95">
          <ol className="list-disc list-inside">
              <li>Make sure to setup the above accounts before doing any transaction</li>
              <li>Make sure to double check for each account to avoid errors</li>
              <li>NextCo will not be liable for any errors caused by incorrect account details</li>
              <li>Your details are encrypted not even our staff can see them</li>
              <li>Any transaction done will be reflected in your account instantly</li>
          </ol>
      </AlertComp>
    </div>
  )
}

export default page