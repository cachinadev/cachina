import React, { useState } from "react";
import API from "../../services/api";
import EditAdModal from "./EditAdModal";

const AllAds = ({ ads, setAds, fetchUserDetails }) => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDeleteAd = async (adId) => {
    if (!window.confirm("Are you sure you want to delete this ad?")) return;

    try {
      const token = localStorage.getItem("token"); // Ensure the token is fetched
      const response = await API.delete(`/ads/${adId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token
        },
      });

      alert(response.data.message || "Ad deleted successfully.");
      setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId)); // Update ads list
      await fetchUserDetails(); // Refresh user details
    } catch (err) {
      console.error("Error deleting ad:", err.response?.data || err.message); // Log detailed error
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
    <div>
      <h2 className="text-xl font-bold mb-4">Your Ads</h2>
      {ads.length === 0 ? (
        <p>You have no ads yet.</p>
      ) : (
        <ul className="space-y-4">
          {ads.map((ad) => (
            <li key={ad._id} className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-bold">{ad.title}</h3>
              <p>{ad.description}</p>
              <p className="text-sm text-gray-500">Category: {ad.category}</p>

              {/* Render images */}
              {ad.pictures && ad.pictures.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {ad.pictures.map((pic, index) => (
                    <img
                      key={index}
                      src={`http://localhost:5000${pic}`} // Full path to image
                      alt={`Ad ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  ))}
                </div>
              )}

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEditAd(ad)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAd(ad._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
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
