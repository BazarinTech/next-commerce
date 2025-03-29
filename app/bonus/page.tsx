import Bonus from "./Bonus"

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div>
     <Bonus />
    </div>
  )
}

export default page