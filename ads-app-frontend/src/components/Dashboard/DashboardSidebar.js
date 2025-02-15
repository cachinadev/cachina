import React, { useEffect, useState } from "react";
import { FaUserCircle, FaChartBar, FaAd, FaPlusCircle, FaSignOutAlt, FaHeart } from "react-icons/fa";
import { getFavorites, getUserDetails } from "../../services/api";

const DashboardSidebar = ({ user, activeTab, setActiveTab, handleLogout }) => {
  const [favorites, setFavorites] = useState([]);
  const [adsPostedCount, setAdsPostedCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDetails = await getUserDetails();
        setAdsPostedCount(userDetails.adsPosted.length);

        const favoriteAds = await getFavorites();
        setFavorites(favoriteAds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  if (!user) {
    return (
      <aside className="w-1/4 bg-gray-800 text-white h-screen flex justify-center items-center">
        <p className="text-gray-400">Loading user details...</p>
      </aside>
    );
  }

  return (
    <aside className="w-1/4 bg-gray-800 text-white h-screen flex flex-col justify-between">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <FaUserCircle className="text-4xl text-white mr-3" />
          <div>
            <h1 className="text-xl font-bold">{user?.name || "User Name"}</h1>
            <p className="text-sm text-gray-400">ID: {user?.uniqueId || "N/A"}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-1">Plan:</p>
          <p className="text-lg font-medium text-green-400">{user?.planType || "N/A"}</p>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-1">Ads Posted:</p>
          <p className="text-lg font-medium text-yellow-300">
            {adsPostedCount}
          </p>
        </div>

        {/* 📌 Navigation Links */}
        <nav className="mt-6">
          <ul>
            {/* ✅ Create Ad First */}
            <li
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                activeTab === "createAd" ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setActiveTab("createAd")}
            >
              <FaPlusCircle className="text-xl" />
              <span>Create Ad</span>
            </li>

            <li
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer mt-3 ${
                activeTab === "allAds" ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setActiveTab("allAds")}
            >
              <FaAd className="text-xl" />
              <span>All Ads</span>
            </li>

            <li
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer mt-3 ${
                activeTab === "favorites" ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setActiveTab("favorites")}
            >
              <FaHeart className="text-xl text-red-500" />
              <span>Favorites ({favorites.length})</span>
            </li>

            <li
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer mt-3 ${
                activeTab === "analytics" ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setActiveTab("analytics")}
            >
              <FaChartBar className="text-xl" />
              <span>Ad Analytics</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* 🚪 Logout Button */}
      <div className="p-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full justify-center"
        >
          <FaSignOutAlt className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
