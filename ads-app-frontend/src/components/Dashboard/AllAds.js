import React, { useState, useEffect } from "react";
import API from "../../services/api";
import EditAdModal from "./EditAdModal";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";

const AllAds = ({ ads, setAds, fetchUserDetails, fetchUserAds }) => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ads || ads.length === 0) {
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(response.data.message || "Ad deleted successfully.");
      setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId));
      await fetchUserDetails();
      await fetchUserAds();
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
      <h2 className="text-3xl font-bold mb-4 text-blue-600">📢 📢 Tus anuncios</h2>

      {loading ? (
        <p className="text-blue-500 text-center font-semibold">Loading your ads...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : ads.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>You have not posted any ads yet.</p>
          <button
            onClick={() => setAds([])}
            className="mt-4 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition flex items-center justify-center mx-auto"
          >
            <FaPlus className="mr-2" /> Create Your First Ad
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <div
              key={ad._id}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              {/* 📌 Ad Image */}
              {ad.pictures && ad.pictures.length > 0 && (
                <img
                  src={`http://localhost:5000${ad.pictures[0]}`} // Display first image
                  alt={ad.title}
                  className="w-full h-40 object-cover rounded-md"
                />
              )}

              {/* 📋 Ad Info */}
              <h3 className="text-xl font-bold mt-3 text-gray-800">{ad.title}</h3>
              <p className="text-gray-600 text-sm">{ad.description.slice(0, 100)}...</p>
              <p className="text-sm text-gray-500 mt-1">
                <strong>Category:</strong> {ad.category}
              </p>

              {/* 📈 Stats */}
              <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                <p className="flex items-center">
                  <FaEye className="mr-1" /> {ad.views} Views
                </p>
                <p className="text-green-500 font-semibold">{ad.currency} {ad.cost}</p>
              </div>

              {/* 🎯 Action Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEditAd(ad)}
                  className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
                >
                  <FaEdit />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAd(ad._id)}
                  className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
                >
                  <FaTrash />
                  Delete
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
