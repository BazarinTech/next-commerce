'use client'

import { useAuth } from '@/contexts/AuthProvider'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {
    name: string,
    icon: React.ReactNode
}

function Logout({name, icon}: Props) {
    const { logout } = useAuth()
    const router = useRouter()
    const handleLogout = () => {
        logout()
        router.push('/auth/login')
    }
  return (
    <div onClick={handleLogout} className='my-4 flex items-center justify-between w-full'>
        <div className="flex gap-2 max-w-2/3 items-center">
            <div className="mr-2">{icon}</div>
            <div className="block">
                <p className="text-gray-400 text-lg">{name}</p>

            </div>
        </div>
        <div className="grid place-items-center text-gray-400">
            <ChevronRight />
        </div>
    </div>
  )
}

export default Logout