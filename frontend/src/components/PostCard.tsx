import React from "react";
import { ArrowBigUp, Bookmark, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const PostCard: React.FC = () => {
  return (
    <>
      <Link to="post">
        <div className="p-4 w-full h-fit bg-[#282B33] shadow rounded-md">
          <div className="flex items-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="#e8eaed"
              className="flex-none h-15 w-15 mr-2 self-start"
            >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            <div>
              <h2 className="text-xl text-white font-bold">IdeaVerse</h2>
              <div className="flex space-x-2 mt-1">
                <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                  Technology
                </span>
                <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                  NodeJS
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-2">Posted on March 25, 2025</p>
          <div className="mb-4 leading-relaxed text-white">
            Project Ideas Posting Platform, ✅Post an Idea – Share your thoughts
            with the world. ✅ Discover & Engage – Browse through exciting
            ideas. ✅ Connect with Creators – Find and reach out to idea owners.
            ✅ Build & Collaborate – Team up and bring ideas to life.
          </div>
          <div className="flex flex-wrap justify-between items-center ">
            <div className="flex space-x-2 items-center bg-[#3b424d] px-3 py-2 rounded-full">
              <ArrowBigUp size={30} className="text-white" />
              <div className="w-px h-8 bg-slate-400 mx-2"></div>
              <p className="text-white font-bold text-xl">12</p>
            </div>
            <Bookmark size={25} className="text-white" />
            <MessageCircle size={25} className="text-white" />
            <Share2 size={25} className="text-white" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
