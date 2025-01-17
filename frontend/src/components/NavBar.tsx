import React from "react";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";

const NavBar: React.FC = () => {
  return (
    <div>
      <nav className=" bg-nav-bar-color p-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-white text-xl font-bold">InnoHub</div>
        </Link>
        <div className="flex-none self-center w-5/12 rounded-full flex items-center bg-[#3b424d]">
          <input
            type="text"
            placeholder=" Search..."
            className="w-full p-2 rounded-full bg-[#3b424d] text-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#77859d"
            className="ml-2 mr-3"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
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
