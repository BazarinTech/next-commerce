import BankDetails from "./BankDetails"

export const dynamic = "force-dynamic"; // 👈 Forces SSR

async function page() {
  return (
    <div>
     <BankDetails />
    </div>

  )
}

export default page