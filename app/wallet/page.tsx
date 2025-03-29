import WalletLink from "@/components/WalletLink";
import { BadgeDollarSign, Banknote, Facebook, HandCoins, Landmark, LogOut, MessageCircle, MessageCircleQuestion, Music2, SearchSlash, Send, User, WalletCards } from "lucide-react";
import WalletComp from "./WalletComp";
import Logout from "./Logout";

export const dynamic = "force-dynamic"; // 👈 Forces SSR

const Page = () => {
  return (
    <div>
      <WalletComp />
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
          <Logout name="Logout" icon={<LogOut />} />
        </div>
      </div>
    </div>
  );
};

export default Page;
