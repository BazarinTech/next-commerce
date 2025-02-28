'use client'

import Image from 'next/image'
import prod from "@/public/images/shoes-1.png"
import { ShoppingBag } from 'lucide-react'
import ProdIncrement from '@/components/productDetails/ProdIncrement'
import GrabBtn from './GrabBtn'
import { AlertDialogDemo } from '@/ui/AlertDialog'
import { AlertDialog, AlertDialogTrigger } from '@radix-ui/react-alert-dialog'
import { useState } from 'react'


function ProdPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <div className='min-h-screen sm:mb-72'>
      <div className="w-full bg-gray-300">
        <Image 
          src={prod}
          alt="product image"
          width={400}
          height={400}
          className="object-cover w-full"
        />
      </div>
      <div className="w-full px-4 py-3">
        <h2 className="text-2xl font-bold">327 Moon Stone Blue Women</h2>
        <div className="flex gap-3 mt-2 items-center">
          <div className="flex gap-1 items-center py-2">
                  <ShoppingBag size={20}/>
                  <p className="text-sm text-gray-500">100 grabs</p>
          </div>
          <div className="flex gap-1 items-center bg-green-500/30 w-fit px-3 py-1 rounded-lg">
              <p className="text-sm text-green-900 font-bold">+Kes 1,000.00</p>
          </div>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis n atoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div className="flex my-4 justify-between items-center">
          <div className="">
            <h2 className="text-2xl font-bold">Kes 10,500.00</h2>
          </div>
          <div className="">
            <ProdIncrement />
          </div>
        </div>
      </div>
      <GrabBtn setIsDialogOpen={setIsDialogOpen} />
        <AlertDialogDemo open={isDialogOpen} setOpen={setIsDialogOpen} />
    </div>
  )
}

export default ProdPage