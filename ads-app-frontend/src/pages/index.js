import { useEffect, useState } from "react";
import API from "../services/api"; // Ensure this matches your API service file

const Home = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(null);

  // Fetch ads from the backend
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await API.get("/ads");
        setAds(response.data); // Update the state with ads
      } catch (err) {
        console.error("Error fetching ads:", err.message);
        setError("Failed to load ads. Please try again.");
      }
    };

    fetchAds(); // Call the function to fetch ads
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Ads List</h1>
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ads.length > 0 ? (
          ads.map((ad) => (
            <div
              key={ad._id}
              className="bg-white p-4 shadow-md rounded-md border"
            >
              {/* Display images */}
              <div className="ad-images grid grid-cols-1 gap-2">
                {ad.pictures && ad.pictures.length > 0 ? (
                  ad.pictures.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Ad image ${index + 1}`}
                      className="h-48 w-full object-cover rounded-md"
                    />
                  ))
                ) : (
                  <img
                    src="/images/placeholder.png" // Placeholder image if no pictures exist
                    alt="No image available"
                    className="h-48 w-full object-cover rounded-md"
                  />
                )}
              </div>

              {/* Ad Details */}
              <h2 className="text-lg font-bold mt-2">{ad.title}</h2>
              <p className="text-gray-600">{ad.description}</p>
              <div className="mt-2 flex justify-between text-sm text-gray-500">
                <span>{ad.category}</span>
                {ad.departamento && ad.provincia && ad.distrito ? (
                  <span>{`${ad.departamento}, ${ad.provincia}, ${ad.distrito}`}</span>
                ) : (
                  <span>Location not specified</span>
                )}
              </div>

              {/* Additional Details */}
              <div className="mt-2 text-sm text-gray-500">
                <p>Views: {ad.views || 0}</p>
                <p>Favorites: {ad.favoritesCount || 0}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No ads available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Home;