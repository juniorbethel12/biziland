import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

export default function Home() {
  const [popularCreators, setPopularCreators] = useState<User[]>([]);

  useEffect(() => {
    // TODO: Fetch popular creators from API
    const mockCreators = [
      {
        id: '1',
        username: 'creator1',
        role: 'creator',
        bio: 'Digital artist and content creator',
        avatar: 'https://via.placeholder.com/150',
      },
      {
        id: '2',
        username: 'creator2',
        role: 'creator',
        bio: 'Fitness and lifestyle content',
        avatar: 'https://via.placeholder.com/150',
      },
    ] as User[];

    setPopularCreators(mockCreators);
  }, []);

  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Biziland</h1>
        <p className="text-xl mb-8">Connect with your favorite creators</p>
        <Link
          to="/register"
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Popular Creators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCreators.map((creator) => (
            <div
              key={creator.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={creator.avatar}
                alt={creator.username}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{creator.username}</h3>
                <p className="text-gray-600 mb-4">{creator.bio}</p>
                <Link
                  to={`/creator/${creator.id}`}
                  className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}