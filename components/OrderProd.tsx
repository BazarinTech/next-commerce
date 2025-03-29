'use client'

import { CalendarMinus2, DollarSign } from "lucide-react"
import Image from "next/image"

type Props = {
    title?: string,
    price?: number,
    image?: string,
    gains?: number,
    status: string,
    date?: string,
}

const OrderProd = ({title, price, image, gains, status, date}: Props) => {
    const prod = "/images/shoes-1.png"
  return (
    <div className="bg-white w-full rounded-lg py-2 px-2 flex my-3">
        <div className="bg-gray-300 w-45 h-50 rounded-lg overflow-hidden">
            <Image 
                src={image ? image : prod}
                alt="shoes"
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="w-2/3 block px-3">
            <h2 className="text-lg font-bold">{title ? title : 'Sneaker Leather Shoe with osumpo (Ones in a day)'}</h2>
            <div className="flex gap-0.5 items-center py-2">
                <DollarSign size={20} color="#a7a0a0" />
                <p className="text-sm text-gray-500">Profit: Kes { gains ? gains : '100'}</p>
            </div>
            <div className="flex gap-0.5 items-center py-2">
                <CalendarMinus2 color="#a7a0a0" size={20} />
                <p className="text-sm text-gray-500">{ date ? date : ' 2022-01-01 10:50:03 PM '}</p>
            </div>
            <div className={`flex gap-1 items-center ${ (status == 'Success') ? 'bg-green-500/30' : 'bg-red-500/30'} w-fit px-3 py-1 rounded-lg`}>
                <p className={`text-sm ${ (status == 'Success') ? 'text-green-900' : 'text-red-900'} font-bold`}>{status}</p>
            </div>
            <h2 className="text-lg font-bold py-2">Kes {price ? price : '10,000,080.00'}</h2>
        </div>
    </div>
  )
}

export default OrderProd