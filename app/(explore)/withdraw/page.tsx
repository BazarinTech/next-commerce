import WithdrawDetails from "./WithdrawDetails"

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div >
        <WithdrawDetails/>

    </div>
  )
}

export default page