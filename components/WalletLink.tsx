import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type Props = {
    link: string,
    name: string,
    icon: React.ReactNode,
    isExternal: boolean,
}

function WalletLink({link, name, icon, isExternal}: Props) {
  return (
    <Link href={link} target={isExternal ? '_blank' : '_self'} rel={isExternal ? 'noopener noreferrer' : undefined} className='my-4 flex items-center justify-between w-full'>
        <div className="flex gap-2 max-w-2/3 items-center">
            <div className="mr-2">{icon}</div>
            <div className="block">
                <p className="text-gray-400 text-lg">{name}</p>

            </div>
        </div>
        <div className="grid place-items-center text-gray-400">
            <ChevronRight />
        </div>
    </Link>
  )
}

export default WalletLink