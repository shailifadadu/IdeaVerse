import React from "react";
import { ArrowBigUp, Bookmark, MessageCircle, Share2 } from "lucide-react";

const PostCard: React.FC = () => {
  return (
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
          <h2 className="text-xl text-white font-bold">
            Post Title is the essential part of the post that should be small
            not much big like this titel is getting bigger and bigger
          </h2>
          <div className="flex space-x-2 mt-1">
            <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
              Tag1
            </span>
            <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
              Tag1
            </span>
            <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
              Tag1
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-2">Posted on March 21, 2023</p>
      <div className="mb-4 leading-relaxed text-white">
        Relax, since unless you are working as a typographer or graphic designer
        you will probably not have to use lorem ipsum at all. It is essentially
        nonsense language thRelax, since unless you are wipsum at all. It is
        essentially nonsense language thRelax, since unless you are working as a
        typographer or graphic designer you will probably not have to use lorem
      </div>
      <div className="flex flex-wrap justify-between">
          <ArrowBigUp size={40} className="text-white"/>
          <Bookmark size={35} className="text-white" />
          <MessageCircle size={35} className="text-white" />
          <Share2 size={35} className="text-white" />
      </div>
    </div>
  );
};

export default PostCard;
