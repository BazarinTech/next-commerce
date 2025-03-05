import { Progress } from "@/components/ui/progress"
import { Button } from "./ui/button"

type Props = {
    name: string,
    status: string,
    bonus: number,
    type: 'money' | 'package',
    target: number,
    reached: number,

}

const BonusComp = ({name, status, bonus, type, target, reached}: Props) => {
    const progressVal = (reached / target) * 100
  return (
    <div className='w-full'>
        <div className="flex border-b-1 border-gray-200 px-4 py-2 my-2 items-center justify-between">
        <div className="block ">
            <p className="font-bold">{name}</p>
            <Progress value={progressVal} max={100} className="w-full my-2" />
        </div>
        <div className="block ">
            <Button disabled={status == 'Claimed' ? true : false}> {status == 'Claimed' ? 'Claimed' : `Claim Kes ${bonus}`}</Button>
        </div>
    </div>
    </div>
  )
}

export default BonusComp