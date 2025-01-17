import React from "react";
import PostCard from "../components/PostCard.tsx";
import Filter from "../components/Filter.tsx";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {[
          { id: 1, title: "Post Title 1", description: "Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1" },
          { id: 2, title: "Post Title 2", description: "Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1" },
          { id: 3, title: "Post Title 3", description: "Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1" },
          { id: 4, title: "Post Title 4", description: "Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1" },
          { id: 5, title: "Post Title 5", description: "Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1Description for post 1" },
        ].map((post) => (
          <PostCard
            key={post.id}
          />
        ))}
      </div>
      <div>
        <Filter />
      </div>
    </div>
  );
};

export default Home;
