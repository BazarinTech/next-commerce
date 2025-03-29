import ProdPage from '@/components/productDetails/prodPage'
import getProduct from '@/lib/getProduct'
import { Metadata } from 'next'

// ✅ Define 'params' as a plain object
type Props = {
  params: Promise<{prodID: string}>
}

// ✅ Ensure 'params' is destructured correctly
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prodID } = await params
  const prod = await getProduct({ prodID })
  
  return {
    title: prod?.title || 'Product',
    description: prod?.description || 'Product details',
  }
}

// ✅ Ensure 'params' is a plain object, not a Promise
async function Page({ params }: Props) {
  const { prodID } = await params
  const product = await getProduct({ prodID }) 

  return <ProdPage product={product} />
}

export default Page
