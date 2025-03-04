import AlertComp from "@/components/AlertComp"
import FormInput from "@/components/FormInput"
import { Button } from "@/components/ui/button"


function page() {
  return (
    <div className='w-full grid place-items-center'>

      <AlertComp title="Withdrawing Steps" className="my-2 w-95">
        <ul className="list-disc list-inside">
            <li>Step 1: Make sure you have setup wallet to recieve money</li>
            <li>Step 2: Enter amount you wish to cashout</li>
            <li>Step 3: Click on Proceed to Cashout</li>
            <li>Step 4: Money will be approved within shortest time possible</li>
            <li>Finall: Confirm if money have refrected to your mpesa account. If not yet reach our customer service</li>
        </ul>
      </AlertComp>
      <div className="grid place-items-center w-full py-4">
        <FormInput name="amount" label="Amount" placeholder="eg 500" type="number"/>
        <div className="grid place-items-center my-2">
          <Button>Proceed To Cashout</Button>
        </div>
      </div>

    </div>
  )
}

export default page