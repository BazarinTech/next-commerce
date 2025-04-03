'use client'

import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import ProdIncrement from '@/components/productDetails/ProdIncrement'
import GrabBtn from './GrabBtn'
import { AlertDialogDemo } from '@/ui/AlertDialog'
import { useEffect, useState } from 'react'
import useFormat from '@/lib/useFormat'
import { useAuth } from '@/contexts/AuthProvider'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import createGrab from '@/lib/createGrab'

type Product = {
  id: number,
  title: string,
  price: number,
  income: number,
  grabs: number;
  description: string,
  image: string,
  status: string,
  created_at: string,
}

type Props = {
  product: Product
}
type Grab = {
  id: number
  type: string,
  quantity: number
  income: number,
  user: string,
  cost: number
}

function ProdPage({product}: Props) {
    const { email, userStatus } = useAuth()
    const router = useRouter()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [count, setCount] = useState<number>(1)
    const [progress, setProgress] = useState(13)
    const [grab, setGrab] = useState<Grab>({
      id: product.id,
      type: 'grab',
      quantity: 1,
      income: product.income,
      user: '',
      cost: product.price,
    })

    useEffect(() => {
      setGrab({...grab, quantity: count})
    }, [count])
    useEffect(() => {
      if (email) {
        if (userStatus == 'Unverified') {
          router.push('/auth/2fa')
        }else{
          setGrab({...grab, user: email})
        }
        
      }else{
        router.push('/auth/login')
      }
    }, [userStatus])
    const handleGrab = async() => {
      const response = await createGrab({...grab})

      if (response.status == 'Success' ) {
        toast.success(response.message)
      }else{
        toast.error(response.message)
      }

      setTimeout(() => {
        setProgress(13)
        setIsDialogOpen(false)
      }, 2000)

    }
  return (
    <div className='sm:mb-72'>
      <div className="w-full bg-gray-300">
        <Image 
          src={product.image}
          alt="product image"
          width={400}
          height={400}
          className="object-cover w-full"
        />
      </div>
      <div className="w-full px-4 py-3">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <div className="flex gap-3 mt-2 items-center">
          <div className="flex gap-1 items-center py-2">
                  <ShoppingBag size={20}/>
                  <p className="text-sm text-gray-500">{product.grabs} grabs</p>
          </div>
          <div className="flex gap-1 items-center bg-green-500/30 w-fit px-3 py-1 rounded-lg">
              <p className="text-sm text-green-900 font-bold">+Kes {useFormat({value: product.income})}</p>
          </div>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="text-gray-500">{product.description}.</p>
        </div>
        <div className="flex my-4 justify-between items-center">
          <div className="">
            <h2 className="text-2xl font-bold">Kes {useFormat({value: product.price})}</h2>
          </div>
          <div className="">
            <ProdIncrement setCount={setCount} count={count} />
          </div>
        </div>
      </div>
      <GrabBtn setIsDialogOpen={setIsDialogOpen} />
        <AlertDialogDemo open={isDialogOpen} setOpen={setIsDialogOpen} handleGrab={handleGrab} progress={progress} setProgress={setProgress} />
    </div>
  )
}

export default ProdPage