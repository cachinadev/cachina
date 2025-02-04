import React, { useEffect, useState } from "react";
import { getFavorites } from "../services/api"; // Import the API function
import { useRouter } from "next/router"; // Import useRouter for navigation

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const favoriteAds = await getFavorites();
                setFavorites(favoriteAds);
                console.log("Fetched Favorites:", favoriteAds);
            } catch (error) {
                console.error("Error fetching favorite ads:", error);
            }
        };

        fetchFavorites();
    }, []);

    const handleAdClick = (adId) => {
        router.push(`/ad/${adId}`); // Navigate to ad details page
    };

    if (!favorites || favorites.length === 0) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Favorite Ads</h2>
                <p className="text-gray-600">You have no favorite ads yet.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Favorite Ads ({favorites.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((ad) => (
                    <div
                        key={ad._id}
                        className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer"
                        onClick={() => handleAdClick(ad._id)} // Make the ad clickable
                    >
                        <img
                            src={`http://localhost:5000${ad.pictures[0]}`}
                            alt={ad.title}
                            className="w-full h-48 object-cover rounded-md mb-2"
                        />
                        <h3 className="text-xl font-semibold mb-1">{ad.title}</h3>
                        <p className="text-gray-700 mb-2">{ad.description.slice(0, 100)}...</p>
                        <p className="text-sm text-gray-500">{ad.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
