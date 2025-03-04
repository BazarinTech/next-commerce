import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import WalletLink from "@/components/WalletLink";
import { BadgeDollarSign, Banknote, BookUser, CirclePlus, Facebook, Film, HandCoins, Landmark, MessageCircle, MessageCircleQuestion, Music2, SearchSlash, Send, User, WalletCards } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="w-full p-4">
        <div className="w-full bg-black px-4 rounded-lg">
          <div className="flex items-center justify-between border-b-2 border-dashed border-gray-400 py-4">
            <div className="block">
              <h2 className="text-white text-3xl font-bold">Balance</h2>
              <div className="flex gap-1 my-2">
                <p className="text-lg text-gray-300">Kes 1,000.00</p>
              </div>
            </div>
            <Link href="/deposit" className="block">
              <Button variant="secondary" size="sm">
                <CirclePlus />
                Add Funds
              </Button>
            </Link>
          </div>

          <div className="flex py-4">
            <div className="block w-full">
              <div className="my-2 flex items-center justify-between w-full">
                <div className="block">
                  <h2 className="text-white text-lg font-bold">Total Income</h2>
                  <p className="text-sm text-gray-300">Kes 1,550.00</p>
                </div>

                <Separator orientation="vertical" className="bg-gray-300 h-full w-[2px]" />

                <div className="block">
                  <h2 className="text-white text-lg font-bold">Available Rolls</h2>
                  <p className="text-sm text-gray-300">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="block w-full">
          <h2 className="text-xl font-bold mb-4">Payment Services</h2>
          <WalletLink link="/deposit" name="Deposit" icon={<HandCoins />} />
          <WalletLink link="/withdraw" name="Withdraw" icon={<WalletCards />} />
          <WalletLink link="/transaction" name="Transactions" icon={<Banknote />} />
          <WalletLink link="/bank" name="Bank Details" icon={<Landmark />} />
        </div>
        <div className="block w-full">
          <h2 className="text-xl font-bold mb-4">Other Services</h2>
          <WalletLink link="/bonus" name="Bonus" icon={<BadgeDollarSign  />} />
        </div>
        <div className="block w-full">
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <WalletLink link="/deposit" name="Customer Care" icon={<MessageCircleQuestion />} />
        </div>
        <div className="block w-full">
          <h2 className="text-xl font-bold mb-4">Know Us</h2>
          <WalletLink link="/about" name="About" icon={<SearchSlash />} />
          <WalletLink link="/" name="Join Whatsapp group" icon={<MessageCircle />} />
          <WalletLink link="/" name="Join Telegram Channel" icon={<Send />} />
          <WalletLink link="/" name="TikTok" icon={<Music2 />} />
          <WalletLink link="/" name="Facebook" icon={<Facebook />} />
        </div>
        <div className="block w-full">
          <h2 className="text-xl font-bold mb-4">Profile Actions</h2>
          <WalletLink link="/account" name="Account Details" icon={<User />} />
        </div>
      </div>
    </div>
  );
};

export default Page;
