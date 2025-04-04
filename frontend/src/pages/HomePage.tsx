import React from "react";
import PostCard from "../components/PostCard.tsx";
import Filter from "../components/Filter.tsx";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {[1, 2, 3].map((id) => (
          <PostCard key={id} />
        ))}
      </div>
      <div>
        <Filter />
      </div>
    </div>
  );
};

export default HomePage;
