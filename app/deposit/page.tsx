import DepositDetails from "./DepositDetails"

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div className='w-full grid place-items-center'>
      <DepositDetails/>

    </div>
  )
}

export default page