type Props = {
    email: string,
    status: 'Active' | 'Inactive',
    dateJoined: string,
    totalEarnings: number
}

function TeamComp({email, status, dateJoined, totalEarnings}: Props) {
  return (
    <div className="flex border-b-1 border-gray-200 px-4 py-2 my-2 items-center justify-between">
        <div className="block max-w-2/3">
            <p className=" font-bold">{email} <span className={`${status == 'Active' ? 'bg-green-500/30 text-green-900' : 'bg-red-500/30 text-red-900' }  font-bold text-sm rounded-xl px-2 py-1`}>{status}</span></p>
            <p className="text-gray-400 text-sm">{dateJoined}</p>
        </div>
        <div className="block max-w-1/3">
            <p className="font-bold">Commission</p>
            <p className="text-gray-400 text-sm">Kes {totalEarnings}</p>
        </div>
    </div>
  )
}

export default TeamComp