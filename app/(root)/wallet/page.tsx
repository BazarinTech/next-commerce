import WalletLink from "@/components/WalletLink";
import { AppleIcon, BadgeDollarSign, Banknote, Facebook, HandCoins, Landmark, LogOut, MessageCircle, MessageCircleQuestion, Music2, SearchSlash, Send, User, WalletCards } from "lucide-react";
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
          <WalletLink link="/deposit" name="Deposit" icon={<HandCoins />} isExternal={false} />
          <WalletLink link="/withdraw" name="Withdraw" icon={<WalletCards />} isExternal={false} />
          <WalletLink link="/transaction" name="Transactions" icon={<Banknote />} isExternal={false} />
          <WalletLink link="/bank" name="Bank Details" icon={<Landmark />} isExternal={false} />
        </div>
        <div className="block w-full">
          <h2 className="text-xl font-bold mb-4">Other Services</h2>
          <WalletLink link="/bonus" name="Bonus" icon={<BadgeDollarSign  />} isExternal={false} />
          <WalletLink link="#" name="Download App" icon={<AppleIcon />} isExternal />
        </div>
        <div className="block w-full">
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <WalletLink link="https://wa.me/254101719497" name="Customer Care" icon={<MessageCircleQuestion />} isExternal={false} />
        </div>
        <div className="block w-full">
          <h2 className="text-xl font-bold mb-4">Know Us</h2>
          <WalletLink link="/about" name="About" icon={<SearchSlash />} isExternal={false} />
          <WalletLink link="https://chat.whatsapp.com/CWYY25ucfB7680w1OuVeR0?mode=r_t" name="Join Whatsapp group" icon={<MessageCircle />} isExternal />
          <WalletLink link="/" name="Join Telegram Channel" icon={<Send />} isExternal={false} />
          <WalletLink link="https://www.tiktok.com" name="TikTok" icon={<Music2 />} isExternal />
          <WalletLink link="#" name="Facebook" icon={<Facebook />} isExternal />
        </div>
        <div className="block w-full">
          <h2 className="text-xl font-bold mb-4">Profile Actions</h2>
          <WalletLink link="/account" name="Account Details" icon={<User />} isExternal={false} />
          <Logout name="Logout" icon={<LogOut />} />
        </div>
      </div>
    </div>
  );
};

export default Page;
