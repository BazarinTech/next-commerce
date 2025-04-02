import Image from "next/image"
import notFound from '@/public/images/not-found-next.png'

type Props = {
    title: string
}

function NotAvailble({title}: Props) {
  return (
    <div className="w-full max-w-2xl">
       <Image 
        src={notFound}
        alt={title}
        width={500}
        height={500}
        className="w-full h-full object-cover object-center"
       />
       <p className="my-2 text-center">{title} could not be found!</p>
    </div>
  )
}

export default NotAvailble