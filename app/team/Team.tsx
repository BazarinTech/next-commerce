'use client'

import TeamComp from "@/components/TeamComp"
import { useAuth } from "@/contexts/AuthProvider"
import getTeam from "@/lib/getTeam"
import useFormat from "@/lib/useFormat"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Team() {
    const {email } = useAuth()
    const [team, setTeam] = useState<TeamResponse>({
        level1_users: [],
        level2_users: [],
        level1_active_users: 0,
        level2_active_users: 0,
        level1_income: 0,
        level2_income: 0,
    })
    const router = useRouter()

    useEffect(() => {
        const fetchTeam = async (email: string) => {
            const res = await getTeam({email});
            setTeam(res)
        }

        if (email) {
            fetchTeam(email)
        }else{
            router.push('/auth/login')
        }
    }, [email, router])
  return (
    <div>
        <div className="w-full p-4">
        <div className="w-full bg-black px-4 rounded-lg">
          <div className="flex border-b-2 border-dashed border-gray-400 py-4">
            <div className="block w-full">
              <h2 className='text-white text-3xl font-bold'>Level 1</h2>
              <div className="my-2 flex items-center justify-between w-full">
                <div className="flex gap-1">
                  <p className="text-sm text-gray-300">Total Income:</p>
                  <p className="text-sm text-red-300">Kes {useFormat({value: team.level1_income})}</p> 
                </div>
                <div className="flex gap-1 float-right">
                  <p className="text-sm text-gray-300">Total Actives:</p>
                  <p className="text-sm text-red-300">{team.level1_active_users}</p> 
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-4">
            <div className="block w-full">
              <h2 className='text-white text-3xl font-bold'>Level 2</h2>
              <div className="my-2 flex items-center justify-between w-full">
                <div className="flex gap-1">
                  <p className="text-sm text-gray-300">Total Income:</p>
                  <p className="text-sm text-red-300">Kes {useFormat({value: team.level2_active_users})}</p> 
                </div>
                <div className="flex gap-1 float-right">
                  <p className="text-sm text-gray-300">Total Actives:</p>
                  <p className="text-sm text-red-300">{team.level2_active_users}</p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-2">
      <Tabs defaultValue="level1" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger 
            value="level1" 
            className="rounded-lg py-4 text-xl transition-colors duration-300 data-[state=active]:bg-black data-[state=active]:text-white hover:bg-black/35"
          >
            Level 1 List
          </TabsTrigger>
          <TabsTrigger 
            value="level2" 
            className="rounded-lg py-4 text-xl transition-colors duration-300 data-[state=active]:bg-black data-[state=active]:text-white hover:bg-black/35"
          >
            Level 2 List
          </TabsTrigger>
        </TabsList>
        <TabsContent value="level1">
            {team.level1_users?.map((user) => {
                return(
                    <TeamComp email={user.email} status={user.status} dateJoined={user.date_joined} totalEarnings={user.comission} key={user.id} />
                )
            })}
   
        </TabsContent>
        <TabsContent value="level2">
        {team.level2_users?.map((user) => {
                return(
                    <TeamComp email={user.email} status={user.status} dateJoined={user.date_joined} totalEarnings={user.comission} key={user.id} />
                )
            })}
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}