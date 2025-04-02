'use client'

import OrderProd from "@/components/OrderProd"
import { useAuth } from "@/contexts/AuthProvider"
import getGrabOrders from "@/lib/getGrabOrders"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Load from "./Load"
import NotAvailble from "@/components/NotAvailble"

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
    const [isLoading, setIsLoading] = useState<boolean>(true)
    
    const fetchOrders = async (email: string)  => {
        const res = await getGrabOrders({email})
        setOrders(res)
        setIsLoading(false)
    }
    useEffect(() => {
        if (email) {
            fetchOrders(email)
        }else{
            router.push('/auth/login')
        }
    }, [email, router])
  return (
    <div className={`w-full ${orders.length < 4 ? 'h-screen' : ''} `}>
        { isLoading ? (
            <Load />
        ) : orders.map((order) => {
            return(
                <OrderProd status={order.status} title={order.title} price={order.price} image={order.image} gains={order.income} date={order.time} key={order.id} />
            )
        })}
        {orders.length === 0 && isLoading === false && <NotAvailble title="Grabbed Orders"/>}
    </div>
  )
}