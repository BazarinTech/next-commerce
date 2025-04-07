'use client'

import { Hand } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import useFormat from "@/lib/useFormat"
import { useEffect, useState } from "react"
import orderRolls from "@/lib/orderRolls"
import { toast } from "sonner"
import getRolls from "@/lib/getRolls"

type Props = {
    title?: string,
    price: number,
    image: string,
    rolls?: number,
    status: 'Active' | 'Buy',
    email: string | null,
    id: number
}

type PostData = {
    id: number
    type: string,
    user: string
}

function RollProd({title, price, image, rolls, status, id, email}: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postData, setPostData] = useState<PostData>({
        id: id,
        type:'rolls',
        user: ''
    })

    useEffect(() => {
        if (email) {
            setPostData({...postData, user:email})
        }
    }, [email])

    const handleRolls = async () => {
        setIsLoading(true)
        const response = await orderRolls({...postData, setIsLoading})

        if (response.status == 'Success') {
            toast.success(response.message)
            getRolls({email})
        }else{
            toast.error(response.message)
        }
    }
  return (
    <div className="bg-white w-full rounded-lg py-2 px-4 grid place-items-center my-3">
        <div className="bg-gray-300 w-full h-80 sm:h-fit rounded-lg overflow-hidden">
            <Image 
                src={image}
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
            <h2 className="text-lg font-bold py-2">Kes {useFormat({value: price})}</h2>
            <div className="">
                {isLoading && <Button className="w-50" disabled>Please wait...</Button>}
                {!isLoading && <Button className="w-50" onClick={handleRolls} disabled={status == 'Active' ? true : false}>{status == 'Active' ? 'Active' : 'Buy'}</Button>}
            </div>
        </div>
    </div>
  )
}

export default RollProd