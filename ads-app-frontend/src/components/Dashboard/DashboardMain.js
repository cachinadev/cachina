import React from "react";
import CreateAd from "./CreateAd/CreateAd";
import AllAds from "./AllAds";
import Favorites from "../Favorites"; 
import AdAnalytics from "./AdAnalytics";

const DashboardMain = ({ activeTab, ads, setAds, fetchUserDetails, fetchUserAds, favorites }) => {
  return (
    <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
      {/* ✅ Render Components Based on `activeTab` */}
      {activeTab === "createAd" && (
        <CreateAd fetchUserDetails={fetchUserDetails} fetchUserAds={fetchUserAds} />
      )}

      {activeTab === "allAds" && (
        <AllAds ads={ads} setAds={setAds} fetchUserDetails={fetchUserDetails} />
      )}

      {activeTab === "favorites" && (
        <Favorites favorites={favorites} />
      )}
      
      {activeTab === "analytics" && <AdAnalytics />}

      {/* ✅ Fallback UI for Invalid Tabs */}
      {!["createAd", "allAds", "favorites", "analytics"].includes(activeTab) && (
        <div className="text-center text-gray-500">
          <h2 className="text-xl font-bold">🛑 Page Not Found</h2>
          <p>Please select a valid section.</p>
        </div>
      )}
    </div>
  );
};

export default DashboardMain;