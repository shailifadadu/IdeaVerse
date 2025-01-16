const Filter: React.FC = () => {
  return (
    <div className="h-[40rem] w-96 m-4 p-4 bg-nav-bar-color border border-neutral-700 rounded-md">
      <h1 className="text-2xl font-bold text-white mb-4">Filter</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white mb-2">category</h2>
        <div className="flex flex-wrap gap-2">
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
    </div>
  );
};

export default Filter;
