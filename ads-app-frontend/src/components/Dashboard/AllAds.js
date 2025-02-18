import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import Next.js router for navigation
import API from "../../services/api";
import EditAdModal from "./EditAdModal";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";

const AllAds = ({ ads, setAds, fetchUserDetails, fetchUserAds }) => {
    const [selectedAd, setSelectedAd] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter(); // Initialize router

    useEffect(() => {
        if (ads.length === 0 && typeof fetchUserAds === "function") {
            setLoading(true);
            fetchUserAds()
                .then(() => setLoading(false))
                .catch(() => {
                    setError("Failed to fetch ads.");
                    setLoading(false);
                });
        }
    }, [ads, fetchUserAds]);

    const handleDeleteAd = async (adId) => {
        if (!window.confirm("Are you sure you want to delete this ad?")) return;

        try {
            const token = localStorage.getItem("token");
            const response = await API.delete(`/ads/${adId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.data.success) {
                alert(response.data.message || "Ad deleted successfully.");
                setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId));
                if (typeof fetchUserDetails === "function") await fetchUserDetails();
                if (typeof fetchUserAds === "function") await fetchUserAds();
            } else {
                throw new Error(response.data.message || "Unexpected response from server");
            }
        } catch (err) {
            console.error("Error deleting ad:", err.response?.data || err.message);
            alert(err.response?.data?.message || "Failed to delete ad. Please try again.");
        }
    };

    const handleEditAd = (ad) => {
        setSelectedAd(ad);
        setIsEditModalOpen(true);
    };

    const handleAdUpdated = (updatedAd) => {
        setAds((prevAds) =>
            prevAds.map((ad) => (ad._id === updatedAd._id ? updatedAd : ad))
        );
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">📢 Tus Anuncios</h2>

            {loading ? (
                <p className="text-blue-500 text-center font-semibold">Cargando tus anuncios...</p>
            ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
            ) : ads.length === 0 ? (
                <div className="text-center text-gray-600">
                    <p>No has publicado ningún anuncio aún.</p>
                    <button
                        onClick={() => setAds([])}
                        className="mt-4 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition flex items-center justify-center mx-auto"
                    >
                        <FaPlus className="mr-2" /> Crea tu primer anuncio
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ads.map((ad) => (
                        <div key={ad._id} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                            {/* 📌 Ad Image */}
                            {ad.pictures?.length > 0 && (
                                <a href={`/ad/${ad._id}`} className="block">
                                    <img
                                        src={`http://localhost:5000${ad.pictures[0]}`}
                                        alt={ad.title}
                                        className="w-full h-40 object-cover rounded-md hover:opacity-90 transition-opacity"
                                    />
                                </a>
                            )}

                            {/* 📋 Ad Info */}
                            <a href={`/ad/${ad._id}`} className="block">
                                <h3 className="text-xl font-bold mt-3 text-gray-800 hover:text-blue-600 transition">
                                    {ad.title}
                                </h3>
                            </a>
                            <p className="text-gray-600 text-sm">{ad.description.slice(0, 100)}...</p>
                            <p className="text-sm text-gray-500 mt-1">
                                <strong>Categoría:</strong> {ad.category}
                            </p>

                            {/* 📈 Stats */}
                            <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                                <p className="flex items-center">
                                    <FaEye className="mr-1" /> {ad.views} Vistas
                                </p>
                                <p className="text-green-500 font-semibold">{ad.cost} {ad.currency} </p>
                            </div>

                            {/* 🎯 Action Buttons */}
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => handleEditAd(ad)}
                                    className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
                                >
                                    <FaEdit />
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDeleteAd(ad._id)}
                                    className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
                                >
                                    <FaTrash />
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* 🛠 Edit Ad Modal */}
            {selectedAd && (
                <EditAdModal
                    ad={selectedAd}
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onAdUpdated={handleAdUpdated}
                />
            )}
        </div>
    );
};

export default AllAds;
