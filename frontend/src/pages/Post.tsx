import {
  ArrowBigUp,
  Bookmark,
  Github,
  MessageCircle,
  Share2,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

// In a real app, this would fetch from your database
const post = {
  id: "1",
  title:
    "Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title",
  content: `Relax, since unless you are working as a typographer or graphic designer you will probably not have to use lorem ipsum at all. It is essentially nonsense language thRelax, since unless you are wipsum at all. It is essentially nonsense language thRelax, since unless you are working as a typographer or graphic designer you will probably not have to use lorem Relax, since unless you are working as a typographer or graphic designer you will probably not have to use lorem ipsum at all. It is essentially nonsense language thRelax, since unless you are wipsum at all. It is essentially nonsense language thRelax, since unless you are working as a typographer or graphic designer you will probably not have to use lorem Relax, since u`,
  author: {
    name: "Abcd",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20at%202.27.23%E2%80%AFPM-lFVxZml18VdS7GNjF7gI44qEcDJ2J1.png",
    socials: {
      twitter: "https://twitter.com/abcd",
      github: "https://github.com/abcd",
      linkedin: "https://linkedin.com/in/abcd",
    },
  },
  date: "dd/mm/yyyy",
  comments: [
    {
      id: "1",
      author: {
        name: "Abcd",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20at%202.27.23%E2%80%AFPM-lFVxZml18VdS7GNjF7gI44qEcDJ2J1.png",
      },
      date: "dd/mm/yyyy",
      content:
        "It is essentially nonsense language thRelax, since unless you are wipsum at all. It is essentially nonsense language thRelax, since unless you are working as a typographer",
    },
  ],
};

export default function PostPage() {
  return (
    <div className="text-white max-w-4xl py-6">
      <article className="space-y-8">
        <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>

        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h2 className="text-xl">Posted By:</h2>
            <div className="flex items-center space-x-4">
              <User className="h-12 w-12" />
              <span>{post.author.name[0]}</span>
              <div>
                <p className="text-xl font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl">Connect:</h2>
            <div className="flex flex-wrap justify-between items-center space-x-2">
              <Github size={48} />
              <Github size={48} />
              <Github size={48} />
              <Github size={48} />
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p>{post.content}</p>
        </div>

        <div className="flex flex-warp items-center space-x-4">
          <ArrowBigUp size={45} className="text-white" />
          <Bookmark size={35} className="text-white" />
          <MessageCircle size={35} className="text-white" />
          <Share2 size={35} className="text-white" />
        </div>
      </article>

      <div className="mt-16 space-y-8">
        <h2 className="text-2xl font-bold">Comments</h2>

        <div className="rounded-lg border p-4">
          <textarea
            placeholder="Write a comment..."
            className="min-h-[100px] bg-background"
          />
          <div className="mt-4 flex justify-end">
            <button>Post Comment</button>
          </div>
        </div>

        <div className="space-y-6">
          {post.comments.map((comment) => (
            <div key={comment.id} className="rounded-lg border p-4 space-y-4">
              <div className="flex items-center space-x-4">
                <User size={48} />
                <span>{comment.author.name[0]}</span>
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
    </div>
  );
}
