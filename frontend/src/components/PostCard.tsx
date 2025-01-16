import React from "react";

const PostCard: React.FC = () => {
  return (
    <div className="p-4 m-4 w-80 h-auto bg-[#282B33] shadow rounded-md">
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
        <svg
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"></path>
          </g>
        </svg>
        <svg
          viewBox="-0.5 -0.5 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="Comment--Streamline-Unicons"
          className="h-8 w-8"
        >
          <path
            d="M7.510375 0.16c-0.963875 0 -1.9183125 0.18987500000000002 -2.8088125 0.55875 -0.8905000000000001 0.3688125 -1.6995625 0.9094375 -2.381125 1.591C0.944 3.6861875 0.1706875 5.5530625 0.1706875 7.499687499999999c-0.0064375000000000005 1.6948125 0.5804374999999999 3.3384375 1.65875 4.646L0.36150000000000004 13.613625c-0.1018125 0.1031875 -0.17081249999999998 0.23425 -0.19824999999999998 0.376625 -0.0274375 0.1424375 -0.0120625 0.28975 0.044125 0.423375 0.061000000000000006 0.1320625 0.1598125 0.243 0.2839375 0.3188125 0.124125 0.075875 0.268 0.11299999999999999 0.41331249999999997 0.10687500000000001h6.6057500000000005c1.9466249999999998 0 3.8134375 -0.7733125000000001 5.1899375 -2.1496874999999998 1.376375 -1.3765 2.1496874999999998 -3.2433125 2.1496874999999998 -5.1899375 0 -1.9466249999999998 -0.7733125000000001 -3.8135000000000003 -2.1496874999999998 -5.1899375C11.323812499999999 0.9333125 9.457 0.16 7.510375 0.16Zm0 13.211375h-4.836875l0.682625 -0.6825625000000001c0.13668750000000002 -0.1375625 0.21337499999999998 -0.32349999999999995 0.21337499999999998 -0.5174375s-0.0766875 -0.379875 -0.21337499999999998 -0.5174375c-0.961125 -0.9600625 -1.5595625 -2.2235625 -1.6935 -3.5753125000000003 -0.1339375 -1.3518125 0.20493750000000002 -2.7081875 0.9589375 -3.838125C3.3755625 3.110625 4.497999999999999 2.2770625 5.797625 1.881875c1.299625 -0.395125 2.6960625 -0.32743750000000005 3.9514375 0.1915625 1.255375 0.5189375 2.2919375 1.4571875 2.9331249999999995 2.6546874999999996 0.6411875 1.1975624999999999 0.8473124999999999 2.5803749999999996 0.58325 3.912875 -0.264 1.3325 -0.9818749999999999 2.5321875 -2.0313125000000003 3.39475 -1.049375 0.8625625000000001 -2.3653750000000002 1.3345625 -3.72375 1.335625Z"
            fill="#ffffff"
            strokeWidth="1"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#e8eaed"
          className="h-8 w-8"
        >
          <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#e8eaed"
          className="h-8 w-8"
        >
          <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
        </svg>
      </div>
    </div>
  );
};

export default PostCard;
