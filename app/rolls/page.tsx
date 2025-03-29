import List from "./List"

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div className="bg-zinc-100 w-full h-full">
      <List />
    </div>
  )
}

export default page