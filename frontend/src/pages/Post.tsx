import {
  ArrowBigUp,
  Bookmark,
  MessageCircle,
  Share2,
  User,
  Mail,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaRegUserCircle } from "react-icons/fa";
import { posts } from "./DummyData/post";

export default function PostPage() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 p-6 ">
      <div className="mr-4 p-4 w-full h-fit border border-neutral-700 shadow text-white rounded-md basis-4/5 flex-grow-1">
        <article className="space-y-8">
          <h1 className="text-4xl font-bold leading-tight">{posts.title}</h1>

          <div className="prose prose-invert max-w-none">
            <p>{posts.content}</p>
          </div>

          <div className="flex flex-warp items-center w-fit pr-5 gap-5 border border-neutral-700 rounded-full">
            <div className="flex space-x-2 items-center bg-[#3b424d] px-3 py-2 rounded-full">
              <ArrowBigUp size={40} className="text-white" />
              <div className="w-px h-8 bg-slate-400 mx-2"></div>
              <p className="text-white font-bold text-2xl">12</p>
            </div>
            <Bookmark size={35} className="text-white" />
            <MessageCircle size={35} className="text-white" />
            <Share2 size={35} className="text-white" />
          </div>
        </article>

        <div className="mt-3 space-y-4">
          <h2 className="text-2xl font-bold">Comments</h2>
          <div className="h-full rounded-lg border border-neutral-700 p-4">
            <textarea
              placeholder="Write a comment..."
              className="w-full h-full border border-neutral-700 bg-nav-bar-color text-white p-4 rounded-lg"
            />
            <button className="bg-white text-black px-4 mt-2 py-2 rounded-[15px] opacity-70 transition duration-300 ease-in-out hover:opacity-100">
              Post Comment
            </button>
          </div>

          <div className="space-y-2">
            {posts.comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-lg border border-neutral-700 p-4 space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <FaRegUserCircle size={48} />
                  <div>
                    <p className="font-semibold">{comment.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {comment.date}
                    </p>
                  </div>
                </div>
                <p className="text-sm">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col border border-neutral-700 p-4 h-fit rounded-lg basis-1/5 text-white gap-3 items-start">
        <div className="space-y-2">
          <h2 className="text-xl">Posted By:</h2>
          <div className="flex items-center space-x-4">
            <User className="h-12 w-12" />
            <div>
              <p className="text-xl font-semibold">{posts.author.name}</p>
              <p className="text-sm text-muted-foreground">{posts.date}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl">Connect:</h2>
          <div className="flex flex-wrap gap-2 justify-between items-center space-x-2">
            <FaGithub size={43} />
            <Mail size={48} />
            <FaLinkedin size={48} />
            <BsTwitterX size={45} />
          </div>
        </div>
      </div>
    </div>
  );
}
