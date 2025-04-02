import Account from './Account'

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div>
      <Account />
    </div>
  )
}

export default page