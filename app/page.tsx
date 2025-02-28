import { Button } from "@/components/ui/button";
import { Award, BadgeDollarSign, Banknote, Coins, HandCoins, LayoutGrid, ListOrdered, ShoppingBasket, UsersRound, Wallet, WalletCards } from "lucide-react";
import Image from "next/image";
import hero from "@/public/images/next-hero.png"
import Link from "next/link";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div className="min-h-screen">

      <div className="px-4 py-2 w-full mt-5">
        <div className="bg-black rounded-lg px-2 w-full max-h-60 py-2 flex flex-row text-white">
          <div className="block w-2/3">
            <div className="flex gap-1 items-center mb-4">
              <p className="text-xs"><Award /></p>
              <p className="text-xs">Best Seller!</p>
            </div>

            <div className="block px-1">
              <p className="text-xl/loose font-semibold">Discover the perfect shopping journey!</p>
            </div>
            <div className="px-1 py-2">
              <Button className="bg-white text-black" variant='secondary'>Get Started!</Button>
            </div>
          </div>
          <div className="block w-1/3">
            <Image 
            src={hero}
            alt="hero"
            width={500}
            height={500}
            className="w-40 relative -top-10 z-5 float-right"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-2">
        <div className="flex gap-1 my-2">
          <p className="text-xl"><LayoutGrid /></p>
          <p className="text-lg">Quick Menu</p>
        </div>
        <div className="rounded-lg px-4 py-2 border-2 border-gray-200 my-2">
          <div className="flex flex-row gap-2">
            <Link href='/' className="grid place-items-center p-2 hover:bg-gray-300 w-1/4 rounded-2xl text-gray-500">
              <p className="text-2xl"><HandCoins size={35} /></p>
              <p className="text-sm">Deposit</p>
            </Link>
            <Link href='/' className="grid place-items-center p-2 hover:bg-gray-300 w-1/4  rounded-2xl text-gray-500">
              <p className="text-2xl"><WalletCards size={35} /></p>
              <p className="text-sm">Withdraw</p>
            </Link>
            <Link href='/' className="grid place-items-center p-2 hover:bg-gray-300 w-1/4  rounded-2xl text-gray-500">
              <p className="text-2xl"><Banknote size={35} /></p>
              <p className="text-sm">Transactions</p>
            </Link>
            <Link href='/' className="grid place-items-center p-2 hover:bg-gray-300 w-1/4  rounded-2xl text-gray-500">
              <p className="text-2xl"><BadgeDollarSign size={35} /></p>
              <p className="text-sm">Bonus</p>
            </Link>
          </div>
          <div className="flex flex-row gap-2 my-2">
            <Link href='/' className="grid place-items-center p-2 hover:bg-gray-300 w-1/4 rounded-2xl text-gray-500">
              <p className="text-2xl"><Wallet size={35} /></p>
              <p className="text-sm">Wallet</p>
            </Link>
            <Link href='/' className="grid place-items-center p-2 hover:bg-gray-300 w-1/4  rounded-2xl text-gray-500">
              <p className="text-2xl"><Coins size={35} /></p>
              <p className="text-sm">Rolls</p>
            </Link>
            <Link href='/' className="grid place-items-center p-2 hover:bg-gray-300 w-1/4  rounded-2xl text-gray-500">
              <p className="text-2xl"><ListOrdered size={35} /></p>
              <p className="text-sm">Orders</p>
            </Link>
            <Link href='/' className="grid place-items-center p-2 hover:bg-gray-300 w-1/4  rounded-2xl text-gray-500">
              <p className="text-2xl"><UsersRound size={35} /></p>
              <p className="text-sm">Team</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-2">
        <div className="flex gap-1 my-2">
          <p className="text-xl"><ShoppingBasket /></p>
          <p className="text-lg">Products</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 w-full place-items-center gap-4 sm:gap-1">
          <Product price={500} title="Shoe single learther"/>
          <Product price={500} title="Shoe single learther (with one)"/>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}
