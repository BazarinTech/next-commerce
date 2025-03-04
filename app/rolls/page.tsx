import RollProd from "@/components/RollProd"

function page() {
  return (
    <div className="bg-zinc-100 w-full h-full">
      <div className="w-full grid place-items-center px-4 py-1">
        <RollProd status="Active" title="Beginner" price={0}/>
        <RollProd status="Buy" title="Intermidiate" rolls={2} price={10000}/>
        <RollProd status="Active" title="Marketer" rolls={3} price={20000}/>
      </div>
    </div>
  )
}

export default page