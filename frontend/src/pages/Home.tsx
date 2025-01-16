import React from 'react';
import PostCard from '../components/PostCard.tsx';

const Home: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {[1, 2, 3, 4].map((id) => (
                <PostCard key={id} />
            ))}
        </div>
    );
};

export default Home;
