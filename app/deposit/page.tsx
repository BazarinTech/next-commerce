import AlertComp from "@/components/AlertComp"
import FormInput from "@/components/FormInput"
import { Button } from "@/components/ui/button"


function page() {
  return (
    <div className='w-full grid place-items-center'>

      <AlertComp title="Depositing Steps" className="my-2 w-95">
        <ul className="list-disc list-inside">
            <li>Step 1: Enter the amount you want to deposit</li>
            <li>Step 2: Make sure you have setup wallet to fund your account</li>
            <li>Step 3: Click on Proceed to Deposit</li>
            <li>Step 4: Confirm by entering correct mpesa pin</li>
            <li>Finall: Your deposits should reflect instantly</li>
        </ul>
      </AlertComp>
      <div className="grid place-items-center w-full py-4">
        <FormInput name="amount" label="Amount" placeholder="eg 500" type="number"/>
        <div className="grid place-items-center my-2">
          <Button>Proceed To Deposit</Button>
        </div>
      </div>

    </div>
  )
}

export default page