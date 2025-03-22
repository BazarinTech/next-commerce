import OrderList from "./OrderList"

 function page() {
  return (
    <div className="bg-zinc-100 w-full h-full">
      <div className="w-full grid place-items-center px-4 py-1">
        <OrderList />
      </div>
    </div>
  )
}

export default page