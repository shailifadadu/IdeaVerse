import React from "react";
import { Link } from "react-router-dom";
import {
  UserRoundCog,
  BookmarkCheck,
  Lightbulb,
  LogOut,
  User,
} from "lucide-react";

const AccountMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      className="relative h-fit w-fit"
    >
      <User size={40} className="text-white" />
      {isOpen && (
        <div
      onMouseLeave={() => setIsOpen(false)}
          className="absolute flex flex-col p-4 w-72 gap-2 right-0 mt-2 bg-nav-bar-color rounded-lg border  border-neutral-700 shadow-lg group-hover:opacity-100 transition-opacity duration-300">
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
            <BookmarkCheck size={35} />
            <span className="text-2xl mr-4 pr-10">Saved</span>
          </Link>
          <Link
            to="/myideas"
            className="flex flex-row flex-wrap gap-3 px-4 py-2 text-white hover:bg-[#3b424d] border border-neutral-700 rounded-lg"
          >
            <Lightbulb size={35} />
            <span className="text-2xl mr-4 pr-10">My Ideas</span>
          </Link>
          <Link
            to="/"
            className="flex flex-row flex-wrap gap-3 px-4 py-2 text-white hover:bg-[#3b424d] border border-neutral-700 rounded-lg"
          >
            <LogOut size={35} />
            <span className="text-2xl mr-4 pr-10">Logout</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
