import TeamComp from "@/components/TeamComp"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"



function page() {
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
                  <p className="text-sm text-red-300">Kes 1,050.00</p> 
                </div>
                <div className="flex gap-1 float-right">
                  <p className="text-sm text-gray-300">Total Actives:</p>
                  <p className="text-sm text-red-300">85</p> 
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
                  <p className="text-sm text-red-300">Kes 1,550.00</p> 
                </div>
                <div className="flex gap-1 float-right">
                  <p className="text-sm text-gray-300">Total Actives:</p>
                  <p className="text-sm text-red-300">500</p> 
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
          <TeamComp email="bazarintechnologiesgaik-9i0@tech.com" status="Active" dateJoined="2025-1-3 12:35 PM" totalEarnings={200} />
          <TeamComp email="bazarin@tech.com" status="Inactive" dateJoined="2025-1-3 12:35 PM" totalEarnings={500}/>
          <TeamComp email="bazarin@tech.com" status="Inactive" dateJoined="2025-1-3 12:35 PM" totalEarnings={500}/>
          <TeamComp email="bazarin@tech.com" status="Inactive" dateJoined="2025-1-3 12:35 PM" totalEarnings={500}/>
        </TabsContent>
        <TabsContent value="level2">
          <TeamComp email="bazarin@tech.com" status="Inactive" dateJoined="2025-1-3 12:35 PM" totalEarnings={500}/>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}

export default page