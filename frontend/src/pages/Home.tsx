import React from 'react';
import PostCard from '../components/PostCard.tsx';
import Filter from '../components/Filter.tsx';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
            {[1, 2, 3, 4].map((id) => (
                <PostCard key={id} />
            ))}
            </div>
            <div>
            <Filter />
            </div>
        </div>
    );
};

export default Home;
