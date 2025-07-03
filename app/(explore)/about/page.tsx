export const dynamic = "force-dynamic"; // 👈 Forces SSR

function page() {
  return (
    <div className="bg-zinc-200 h-screen">
      <div className="w-full px-4 py-2">
        <div className="w-full bg-black/60 rounded-lg px-4 py-2 text-center text-white">
          <p className="text-xl font-bold my-2">Welcome To Kilion</p>
        </div>
      </div>
      <div className="w-full px-4 py-2">
        <div className="w-full bg-white rounded-lg px-4 py-2">
          <p className="text-xl font-bold my-2">Introduction</p>
          <p className="text-gray-500">
          Next Commerce Limited is a leading e-commerce company in Bangladesh. It was founded in 2013 by a group of young entrepreneurs who wanted to create a platform where customers could buy products online with ease. The company started with a small team and a limited product range, but it quickly gained popularity and expanded its operations to become one of the largest e-commerce companies in the country.
          </p>
        </div>
      </div>
      <div className="w-full px-4 py-2">
        <div className="w-full bg-white rounded-lg px-4 py-2">
          <p className="text-xl font-bold my-2">Income Model</p>
          <p className="text-gray-500">
           Next Commerce Limited generates revenue through various channels, including: <br/> <ul className="my-5"> <li>Commission on sales</li> <li>Advertising</li> <li>Payment processing fees</li> </ul>  <br/> The company also offers various services, such as product delivery, customer support, and payment processing, which generate additional revenue streams.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page