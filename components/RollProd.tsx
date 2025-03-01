'use client'

import { CalendarMinus2, DollarSign, Hand } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

type Props = {
    title?: string,
    price: number,
    image?: string,
    rolls?: number,
    status: 'Current' | 'Buy',
}

function RollProd({title, price, image, rolls, status}: Props) {
    const prod = "/images/beginner-1.png"
  return (
    <div className="bg-white w-full rounded-lg py-2 px-4 grid place-items-center my-3">
        <div className="bg-gray-300 w-full h-50 sm:h-fit rounded-lg overflow-hidden">
            <Image 
                src={image ? image : prod}
                alt="shoes"
                width={500}
                height={500}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="w-full block">
            <h2 className="text-2xl my-2 font-bold">{title ? title : 'Sneaker Leather Shoe with osumpo (Ones in a day)'}</h2>
            <div className="flex gap-2 items-center py-2">
                <Hand color="#a7a0a0" />
                <p className="text-lg text-gray-500">Grabbing Rolls: { rolls ? rolls : '1'}</p>
            </div>
            <h2 className="text-lg font-bold py-2">Kes {price}</h2>
            <div className="">
                <Button className="w-50" disabled={status == 'Current' ? true : false}>{status == 'Current' ? 'Current' : 'Buy'}</Button>
            </div>
        </div>
    </div>
  )
}

export default RollProd