import Image from "next/image"
import prod from "@/public/images/shoes-1.png"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

type Props = {
    title?: string,
    price?: number,
    image?: string,
    gains?: number,
    grabs?: number,
}

function Product({title, price, image, gains, grabs}: Props) {
  return (
    <Link href='/products/2' className="w-full sm:w-1/2 h-full">
        <div className="w-full h-50 bg-gray-300 grid place-items-center rounded-lg">
            <Image 
                src={image ? image :prod}
                alt="Product Image"
                width={300}
                height={300}
                className="w-full"
            />
        </div>
        <div className="w-full">
            <h2 className="text-lg font-bold">{title ? title : 'Sneaker Leather Shoe with osumpo (Ones in a day)'}</h2>
            <div className="flex gap-1 items-center py-2">
                <ShoppingBag size={20}/>
                <p className="text-sm text-gray-500">{ grabs ? grabs : '100'} grabs</p>
            </div>
            <div className="flex gap-1 items-center bg-green-500/30 w-fit px-3 py-1 rounded-lg">
                <p className="text-sm text-green-900 font-bold">+Kes {gains ? gains :'10,080.00'}</p>
            </div>
            <h2 className="text-lg font-bold py-2">Kes {price ? price : '1,000,080.00'}</h2>
        </div>
    </Link>
  )
}

export default Product