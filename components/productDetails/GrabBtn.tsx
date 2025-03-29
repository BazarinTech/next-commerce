import { Button } from "../ui/button"

type Props = {
  setIsDialogOpen: (param: boolean) => void,
  name?: string
}
function GrabBtn({setIsDialogOpen}: Props) {
  return (
    <div className="fixed bottom-0 grid place-items-center w-full my-2 py-2">
        <Button variant='secondary' onClick={() => setIsDialogOpen(true)} className="text-white bg-black hover:text-black rounded-2xl w-90 py-3 text-lg">Proceed To Grab</Button>
    </div>
  )
}

export default GrabBtn