import List from "./List"

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div>
      <List />
    </div>
  )
}

export default page