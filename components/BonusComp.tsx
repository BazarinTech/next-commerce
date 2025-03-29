import { Progress } from "@/components/ui/progress"
import { Button } from "./ui/button"
import { useState } from "react"
import createBonusOrder from "@/lib/createOrderBonus"
import { toast } from "sonner"

type Props = {
    name: string,
    status: string,
    bonus: number,
    type: 'money' | 'package',
    target: number,
    reached: number,
    target_type: string,
    email: string | null,
    id: number

}

const BonusComp = ({name, status, bonus, type, target, reached,  id, email}: Props) => {
    const progressVal = (reached / target) * 100
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const postData: BonusOrder = {
        id: id,
        reward: bonus,
        reward_type: type,
        user: email
    }

    const handleOrder = async () => {
        setIsLoading(true)
        if (reached >= target) {
            const res = await createBonusOrder(postData)
            setIsLoading(false)
            if (res.status == 'Success') {
                toast.success(res.message)
            }else{
                toast.error(res.message)
            }
        }else{
            toast.error('You have not reached the target yet')
            setIsLoading(false)
        }
    }
  return (
    <div className='w-full'>
        <div className="flex border-b-1 border-gray-200 px-4 py-2 my-2 items-center justify-between">
        <div className="block ">
            <p className="font-bold">{name}</p>
            <Progress value={progressVal} max={100} className="w-full my-2 " />
        </div>
        <div className="block ">
            {!isLoading ? <Button onClick={handleOrder} disabled={status == 'Claimed' ? true : false}> {status == 'Claimed' ? 'Claimed' : `Claim Kes ${ bonus}`}</Button> : <Button disabled> Please wait...</Button>}
            
        </div>
    </div>
    </div>
  )
}

export default BonusComp