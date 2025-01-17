import React from "react";
import { Link } from "react-router-dom";
import { UserRoundCog } from "lucide-react";

const AccountMenu: React.FC = () => {
  return (
    <div className="absolute flex flex-col p-4 w-72 gap-2 right-0 mt-2 w-48 bg-nav-bar-color rounded-lg border  border-neutral-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Link
        to="/settings"
        className="flex flex-row flex-wrap gap-3 px-4 py-2 text-white hover:bg-[#3b424d] border border-neutral-700 rounded-lg"
      >
        <UserRoundCog size={35} />
        <span className="text-2xl mr-4 pr-10">Account</span>
      </Link>
      <Link
        to="/settings"
        className="flex flex-row flex-wrap gap-3 px-4 py-2 text-white hover:bg-[#3b424d] border border-neutral-700 rounded-lg"
      >
        <UserRoundCog size={35} />
        <span className="text-2xl mr-4 pr-10">Account</span>
      </Link>
      <Link
        to="/settings"
        className="flex flex-row flex-wrap gap-3 px-4 py-2 text-white hover:bg-[#3b424d] border border-neutral-700 rounded-lg"
      >
        <UserRoundCog size={35} />
        <span className="text-2xl mr-4 pr-10">Account</span>
      </Link>
      <Link
        to="/settings"
        className="flex flex-row flex-wrap gap-3 px-4 py-2 text-white hover:bg-[#3b424d] border border-neutral-700 rounded-lg"
      >
        <UserRoundCog size={35} />
        <span className="text-2xl mr-4 pr-10">Account</span>
      </Link>
      <Link
        to="/settings"
        className="flex flex-row flex-wrap gap-3 px-4 py-2 text-white hover:bg-[#3b424d] border border-neutral-700 rounded-lg"
      >
        <UserRoundCog size={35} />
        <span className="text-2xl mr-4 pr-10">Account</span>
      </Link>
    </div>
  );
};

export default AccountMenu;
