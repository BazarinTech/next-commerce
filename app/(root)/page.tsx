import { Button } from "@/components/ui/button";
import { Award, BadgeDollarSign, Banknote, Coins, HandCoins, LayoutGrid, ListOrdered, ShoppingBasket, UsersRound, Wallet, WalletCards } from "lucide-react";
import Image from "next/image";
import hero from "@/public/images/next-hero.png"
import Link from "next/link";
import Product from "@/components/Product";
import getProducts from "@/lib/getProducts";
import { Suspense } from "react";
import Load from "./Load";
import NotAvailble from "@/components/NotAvailble";

export const dynamic = "force-dynamic"; // 👈 Forces SSR

export default async function Home() {
  const products = await getProducts();
  
  return (
    <div className="w-[100vw] sm:w-full">
      <div className="px-2 py-2 w-full mt-5">
        <div className="bg-black rounded-lg px-2 w-full max-h-60 py-2 flex flex-row flex-wrap text-white">
          <div className="block w-2/3">
            <div className="flex gap-1 items-center mb-4">
              <p className="text-xs"><Award /></p>
              <p className="text-xs">Become Invite Hero!</p>
            </div>

            <div className="block px-1">
              <p className="text-xl/loose font-semibold">Get 5 active people earn Kes 500.00!</p>
            </div>
            <Link href='/team' className="px-1 py-2">
              <Button className="bg-white text-black" variant='secondary'>Get Started!</Button>
            </Link>

          </div>
          <div className="block w-1/3">
            <Image 
            src={hero}
            alt="hero"
            width={500}
            height={500}
            className="w-full max-w-[150px] sm:max-w-[200px] relative -top-10 z-5"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-2 py-2 ">
        <div className="flex gap-1 my-2">
          <p className="text-xl"><LayoutGrid /></p>
          <p className="text-lg">Quick Menu</p>
        </div>
        <div className="rounded-lg px-4 py-2 border-2 border-gray-200 my-2">
          <div className="flex flex-row gap-2">
            <Link href='/deposit' className="grid place-items-center p-2 hover:bg-gray-300 sm:w-1/4 w-1/2 rounded-2xl text-gray-500">
              <p className="text-2xl"><HandCoins size={35} /></p>
              <p className="text-sm">Deposit</p>
            </Link>
            <Link href='/withdraw' className="grid place-items-center p-2 hover:bg-gray-300 sm:w-1/4 w-1/2  rounded-2xl text-gray-500">
              <p className="text-2xl"><WalletCards size={35} /></p>
              <p className="text-sm">Withdraw</p>
            </Link>
            <Link href='/transaction' className="grid place-items-center p-2 hover:bg-gray-300 sm:w-1/4 w-1/2 rounded-2xl text-gray-500">
              <p className="text-2xl"><Banknote size={35} /></p>
              <p className="text-sm">Transactions</p>
            </Link>
            <Link href='/bonus' className="grid place-items-center p-2 hover:bg-gray-300 sm:w-1/4 w-1/2  rounded-2xl text-gray-500">
              <p className="text-2xl"><BadgeDollarSign size={35} /></p>
              <p className="text-sm">Bonus</p>
            </Link>
          </div>
          <div className="flex flex-row gap-2 my-2">
            <Link href='/wallet' className="grid place-items-center p-2 hover:bg-gray-300 sm:w-1/4 w-1/2 rounded-2xl text-gray-500">
              <p className="text-2xl"><Wallet size={35} /></p>
              <p className="text-sm">Wallet</p>
            </Link>
            <Link href='/rolls' className="grid place-items-center p-2 hover:bg-gray-300 sm:w-1/4 w-1/2  rounded-2xl text-gray-500">
              <p className="text-2xl"><Coins size={35} /></p>
              <p className="text-sm">Rolls</p>
            </Link>
            <Link href='/orders' className="grid place-items-center p-2 hover:bg-gray-300 sm:w-1/4 w-1/2  rounded-2xl text-gray-500">
              <p className="text-2xl"><ListOrdered size={35} /></p>
              <p className="text-sm">Orders</p>
            </Link>
            <Link href='/team' className="grid place-items-center p-2 hover:bg-gray-300 sm:w-1/4 w-1/2 rounded-2xl text-gray-500">
              <p className="text-2xl"><UsersRound size={35} /></p>
              <p className="text-sm">Team</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full px-2 py-2">
        <div className="flex gap-1 my-2">
          <p className="text-xl"><ShoppingBasket /></p>
          <p className="text-lg">Products</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 w-full place-items-center gap-4 sm:gap-1">
          <Suspense fallback={<Load />}>
            {products.map((product) => {
              return(
                <Product price={product.price} key={product.id} title={product.title} image={product.image} gains={product.income} grabs={product.grabs} id={product.id} />
              )
            })}
            { products.length === 0 && <NotAvailble title="Products"/>}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
