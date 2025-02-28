import Image from 'next/image'
import prod from "@/public/images/shoes-1.png"
import { ShoppingBag } from 'lucide-react'
import ProdIncrement from '@/components/productDetails/ProdIncrement'
import ProdPage from '@/components/productDetails/prodPage'

type Props = {
  params: {
    prodID: string
  }
}

function page({params: {prodID}}: Props) {
  return <ProdPage />
}

export default page