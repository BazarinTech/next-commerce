import ProdPage from '@/components/productDetails/prodPage'
import getProduct from '@/lib/getProduct'
import { Metadata } from 'next'


type Props = {
  params: {
    prodID: string
  }
}
export async function generateMetadata({params: {prodID}}:Props):Promise<Metadata> {
  const prod =  await getProduct({prodID})
  return {
    title: prod.title,
    description: prod.description,
  }
}
async function page({params: {prodID}}: Props) {
  const product =  await getProduct({prodID})
  return <ProdPage product={product}/>
}

export default page