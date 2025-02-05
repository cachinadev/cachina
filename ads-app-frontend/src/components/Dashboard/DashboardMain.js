import DashboardSidebar from "./DashboardSidebar";
import React from "react";
import AllAds from "./AllAds";
import CreateAd from "./CreateAd/CreateAd";
import Favorites from "../Favorites"; // Import the new Favorites component
import AdAnalytics from "./AdAnalytics";


const DashboardMain = ({ activeTab, ads, setAds, fetchUserDetails, fetchUserAds, favorites }) => {
  return (
    <div className="flex-1 bg-gray-100 p-6">
      {activeTab === "allAds" && (
        <AllAds ads={ads} setAds={setAds} fetchUserDetails={fetchUserDetails} />
      )}
      {activeTab === "createAd" && (
        <CreateAd fetchUserDetails={fetchUserDetails} fetchUserAds={fetchUserAds} />
      )}
      {activeTab === "favorites" && (
        <Favorites favorites={favorites} />
      )}
      
      {activeTab === "analytics" && <AdAnalytics />}

    </div>
  );
};

export default DashboardMain;
