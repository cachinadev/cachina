import { useEffect, useState } from 'react';
import { fetchAds } from '../services/api'; // Import your API call

const Home = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAds = async () => {
      try {
        const data = await fetchAds();
        setAds(data);
      } catch (err) {
        setError('Failed to load ads. Please try again.');
      }
    };
    loadAds();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Ads List</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ads.map((ad) => (
          <div key={ad._id} className="bg-white p-4 shadow-md rounded-md">
            <div className="ad-images grid grid-cols-1 gap-2">
              {ad.images.length > 0 ? (
                ad.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Ad image ${index + 1}`}
                    className="h-48 w-full object-cover rounded-md"
                  />
                ))
              ) : (
                <img
                  src="/images/placeholder.png"
                  alt="No image available"
                  className="h-48 w-full object-cover rounded-md"
                />
              )}
            </div>
            <h2 className="text-lg font-bold mt-2">{ad.title}</h2>
            <p className="text-gray-600">{ad.description}</p>
            <div className="mt-2 flex justify-between text-sm text-gray-500">
              <span>{ad.category}</span>
              {ad.location ? (
                <span>{`Lat: ${ad.location.lat}, Lng: ${ad.location.lng}`}</span>
              ) : (
                <span>No location specified</span>
              )}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <p>Views: {ad.views}</p>
              <p>Favorites: {ad.favoritesCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
