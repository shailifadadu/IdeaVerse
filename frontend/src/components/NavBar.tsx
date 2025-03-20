import React from "react";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import { Search } from "lucide-react";

const NavBar: React.FC = () => {
  return (
    <div>
      <nav className=" bg-nav-bar-color p-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-white text-xl font-bold">IdeaVerse</div>
        </Link>
        <div className="flex-none self-center w-5/12 rounded-full flex items-center bg-[#3b424d] px-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 focus:outline-none rounded-full bg-[#3b424d] text-white"
          />
          <Search size={35} className="text-white p-2" />
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/new-post">
            <button className="bg-white text-black px-4 py-2 rounded-[15px] opacity-70 transition duration-300 ease-in-out hover:opacity-100">
              New Post
            </button>
          </Link>
          <Link to="/account">
            <AccountMenu />
          </Link>
        </div>
      </nav>
      <hr className="border-neutral-700" />
    </div>
  );
};

export default NavBar;
