import Team from "./Team"

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div>
      <Team />
    </div>
  )
}

export default page