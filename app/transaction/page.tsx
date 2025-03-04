import TeamComp from "@/components/TeamComp"
import TransactionComp from "@/components/TransactionComp"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

function page() {
  return (
    <div>
      <div className="w-full p-4">
        <div className="w-full bg-black px-4 rounded-lg">
          <div className="flex border-b-2 border-dashed border-gray-400 py-4">
            <div className="block w-full">
              <h2 className='text-white text-3xl font-bold'>Total withdrawn</h2>
              <div className="my-2 flex items-center justify-between w-full">
                <div className="flex gap-1">
                  <p className="text-sm text-gray-300">Kes 10,500.56</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-4">
            <div className="block w-full">
              <h2 className='text-white text-3xl font-bold'>Total Deposited</h2>
              <div className="my-2 flex items-center justify-between w-full">
                <div className="flex gap-1">
                  <p className="text-sm text-gray-300">Kes 105,850.56</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-2">
      <Tabs defaultValue="with" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger 
            value="with" 
            className="rounded-lg py-4 text-xl transition-colors duration-300 data-[state=active]:bg-black data-[state=active]:text-white hover:bg-black/35"
          >
            Withdrawals
          </TabsTrigger>
          <TabsTrigger 
            value="deps" 
            className="rounded-lg py-4 text-xl transition-colors duration-300 data-[state=active]:bg-black data-[state=active]:text-white hover:bg-black/35"
          >
            Deposits
          </TabsTrigger>
        </TabsList>
        <TabsContent value="with">
          <TransactionComp type="Withdraw" status="Success" dateJoined="2025-1-3 12:35 PM" amount={200} />
          <TransactionComp type="Withdraw" status="Failed" dateJoined="2025-1-3 12:35 PM" amount={500}/>
          <TransactionComp type="Withdraw" status="Success" dateJoined="2025-1-3 12:35 PM" amount={500}/>
          <TransactionComp type="Withdraw" status="Success" dateJoined="2025-1-3 12:35 PM" amount={500}/>
        </TabsContent>
        <TabsContent value="deps">
          <TransactionComp type="Deposit" status="Pending" dateJoined="2025-1-3 12:35 PM" amount={500}/>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}

export default page