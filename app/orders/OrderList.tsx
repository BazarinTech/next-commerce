'use client'

import OrderProd from "@/components/OrderProd"
import { useAuth } from "@/contexts/AuthProvider"
import getGrabOrders from "@/lib/getGrabOrders"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type Order = {
    id: number,
    title: string,
    price: number,
    income: number,
    grabs: number,
    time: string,
    status: string,
    image: string
}

export default function OrderList() {
    const [orders, setOrders] = useState<Order[]>([])
    const { email } = useAuth()
    const router = useRouter()
    
    const fetchOrders = async (email: string)  => {
        const res = await getGrabOrders({email})
        setOrders(res)
    }
    useEffect(() => {
        if (email) {
            fetchOrders(email)
        }else{
            router.push('/auth/login')
        }
    }, [email, router])
  return (
    <div>
        {orders.map((order) => {
            return(
                <OrderProd status={order.status} title={order.title} price={order.price} image={order.image} gains={order.income} date={order.time} key={order.id} />
            )
        })}
    </div>
  )
}