import Details from "./Details";

export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div className='w-full max-w-xl grid place-items-center mt-5'>
      <Details />
    </div>
  )
}

export default page