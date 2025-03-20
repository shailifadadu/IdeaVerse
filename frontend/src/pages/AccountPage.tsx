import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { Mail, User } from 'lucide-react';

const AccountPage = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john@innovate.com',
    joinDate: 'March 2023',
    bio: 'Full-stack developer passionate about open source projects and AI technologies.',
    stats: {
      posts: 24,
      upvotes: 1450,
      comments: 89
    }
  };

  return (
    <div className="container mx-auto p-4 text-white">
      <div className="mx-auto max-w-4xl rounded-lg border border-neutral-700 bg-nav-bar-color p-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="flex-shrink-0">
            <User className="h-32 w-32 rounded-full border-2 border-neutral-700 p-4" />
          </div>
          
          <div className="flex-grow space-y-4">
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-gray-400">{user.email}</p>
              <p className="mt-2 text-sm text-gray-400">
                Member since {user.joinDate}
              </p>
            </div>

            <div className="rounded-lg border border-neutral-700 p-4">
              <h2 className="mb-2 text-xl font-semibold">Bio</h2>
              <p className="text-gray-300">{user.bio}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 rounded-lg border border-neutral-700 p-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{user.stats.posts}</p>
                <p className="text-sm text-gray-400">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{user.stats.upvotes}</p>
                <p className="text-sm text-gray-400">Upvotes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{user.stats.comments}</p>
                <p className="text-sm text-gray-400">Comments</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Connect</h2>
              <div className="flex gap-4">
                <FaGithub size={32} className="cursor-pointer hover:text-gray-300" />
                <Mail size={32} className="cursor-pointer hover:text-gray-300" />
                <FaLinkedin size={32} className="cursor-pointer hover:text-gray-300" />
                <BsTwitterX size={32} className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;