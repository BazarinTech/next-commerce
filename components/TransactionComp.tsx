type Props = {
    type: string,
    status: 'Success' | 'Pending' | 'Failed',
    dateJoined: string,
    amount: number
}

function TransactionComp({type, status, dateJoined, amount}: Props) {
  return (
    <div className="flex border-b-1 border-gray-200 px-4 py-2 my-2 items-center justify-between">
        <div className="block max-w-2/3">
            <p className=" font-bold">{type} <span className={`${status == 'Success' ? 'bg-green-500/30 text-green-900' : 'bg-red-500/30 text-red-900' }  font-bold text-sm rounded-xl px-2 py-1`}>{status}</span></p>
            <p className="text-gray-400 text-sm">{dateJoined}</p>
        </div>
        <div className="block max-w-1/3">
            <p className="font-bold">Amount</p>
            <p className="text-gray-400 text-sm">Kes {amount}</p>
        </div>
    </div>
  )
}

export default TransactionComp