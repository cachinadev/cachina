import React, { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../services/api"; // Import removeFavorite API
import { useRouter } from "next/router"; // Import useRouter for navigation
import { FaTrash } from "react-icons/fa"; // Trash icon for remove button

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const favoriteAds = await getFavorites();
                setFavorites(favoriteAds);
            } catch (error) {
                console.error("Error fetching favorite ads:", error);
            }
        };

        fetchFavorites();
    }, []);

    const handleRemoveFavorite = async (adId) => {
        if (!window.confirm("Are you sure you want to remove this ad from favorites?")) return;

        try {
            await removeFavorite(adId); // Call API to remove from favorites
            setFavorites((prevFavorites) => prevFavorites.filter((ad) => ad._id !== adId)); // Update UI
        } catch (error) {
            console.error("Error removing favorite ad:", error);
            alert("Failed to remove ad from favorites. Please try again.");
        }
    };

    const handleAdClick = (adId) => {
        router.push(`/ad/${adId}`); // Navigate to ad details page
    };

    if (!favorites || favorites.length === 0) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Anuncios Favoritos</h2>
                <p className="text-gray-600">Aún no tienes anuncios favoritos.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Anuncios Favoritos({favorites.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((ad) => (
                    <div
                        key={ad._id}
                        className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition relative"
                    >
                        {/* Ad Image */}
                        <img
                            src={`http://localhost:5000${ad.pictures[0]}`}
                            alt={ad.title}
                            className="w-full h-48 object-cover rounded-md mb-2 cursor-pointer"
                            onClick={() => handleAdClick(ad._id)}
                        />

                        {/* Ad Details */}
                        <h3 className="text-xl font-semibold mb-1">{ad.title}</h3>
                        <p className="text-gray-700 mb-2">{ad.description.slice(0, 100)}...</p>
                        <p className="text-sm text-gray-500">{ad.category}</p>

                        {/* Remove Favorite Button */}
                        <button
                            onClick={() => handleRemoveFavorite(ad._id)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                            title="Remove from Favorites"
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
