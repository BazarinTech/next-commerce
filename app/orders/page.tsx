import OrderProd from "@/components/OrderProd"


function page() {
  return (
    <div className="bg-zinc-100 w-full h-full">
      <div className="w-full grid place-items-center px-4 py-1">
        <OrderProd status="Failed"/>
        <OrderProd status="Success" title="Snekaer Os dkij"/>
        <OrderProd status="Success" gains={500} price={8500}/>
        <OrderProd status="Failed"/>
        <OrderProd status="Failed" gains={500} price={8500} title="Snekaer Os dkij"/>
      </div>
    </div>
  )
}

export default page