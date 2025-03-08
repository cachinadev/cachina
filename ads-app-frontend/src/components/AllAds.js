import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import API from "../../services/api";
import EditAdModal from "./EditAdModal";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";

const AllAds = ({ ads, setAds, fetchUserDetails, fetchUserAds = null }) => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter(); // ✅ Router for navigation

  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true);
      try {
        if (fetchUserAds) {
          await fetchUserAds();
        } else {
          const { data } = await API.get("/ads/my-ads"); // ✅ Fallback if fetchUserAds is missing
          setAds(data);
        }
      } catch (error) {
        setError("Failed to fetch ads.");
      }
      setLoading(false);
    };

    if (!ads || ads.length === 0) {
      fetchAds();
    }
  }, [ads, setAds, fetchUserAds]);

  const handleDeleteAd = async (adId) => {
    if (!window.confirm("Are you sure you want to delete this ad?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await API.delete(`/ads/${adId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(response.data.message || "Ad deleted successfully.");
      setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId));
      if (fetchUserAds) await fetchUserAds();
      if (fetchUserDetails) await fetchUserDetails();
    } catch (err) {
      console.error("Error deleting ad:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to delete ad.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">📢 Your Published Ads</h2>

      {loading ? (
        <p className="text-blue-500 text-center font-semibold">Loading your ads...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : ads.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>You have not posted any ads yet.</p>
          <button
            onClick={() => router.push("/dashboard?tab=createAd")}
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
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => router.push(`/ad/${ad._id}`)} // ✅ Click to redirect to Ad Details
            >
              {ad.pictures && ad.pictures.length > 0 && (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${ad.pictures[0]}`}
                  alt={ad.title}
                  className="w-full h-40 object-cover rounded-md"
                />
              )}

              <h3 className="text-xl font-bold mt-3 text-gray-800">{ad.title}</h3>
              <p className="text-gray-600 text-sm">{ad.description.slice(0, 100)}...</p>
              <p className="text-sm text-gray-500 mt-1">
                <strong>Category:</strong> {ad.category}
              </p>

              <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                <p className="flex items-center">
                  <FaEye className="mr-1" /> {ad.views} Views
                </p>
                <p className="text-green-500 font-semibold">{ad.currency} {ad.cost}</p>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAd(ad);
                    setIsEditModalOpen(true);
                  }}
                  className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
                >
                  <FaEdit />
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteAd(ad._id);
                  }}
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

      {selectedAd && (
        <EditAdModal
          ad={selectedAd}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AllAds;
