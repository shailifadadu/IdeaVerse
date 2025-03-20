import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <div className="mx-auto max-w-md rounded-lg border border-neutral-700 bg-nav-bar-color p-8">
        <h1 className="mb-6 text-3xl font-bold">Welcome Back</h1>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-md border border-neutral-700 bg-nav-bar-color px-3 py-2 text-sm focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full rounded-md border border-neutral-700 bg-nav-bar-color px-3 py-2 text-sm focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-white hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;