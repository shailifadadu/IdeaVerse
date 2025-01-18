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
import { post } from "./DummyData/post";


export default function PostPage() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 p-6 ">
      <div className="mr-4 p-4 w-full h-fit border border-neutral-700 shadow text-white rounded-md basis-4/5 flex-grow-1">
        <article className="space-y-8">
          <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>

          <div className="prose prose-invert max-w-none">
            <p>{post.content}</p>
          </div>

          <div className="flex flex-warp items-center w-fit py-2 px-5 gap-5 border border-neutral-700 rounded-full">
            <ArrowBigUp size={45} className="text-white flex-none" />
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
            {post.comments.map((comment) => (
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
              <p className="text-xl font-semibold">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.date}</p>
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
