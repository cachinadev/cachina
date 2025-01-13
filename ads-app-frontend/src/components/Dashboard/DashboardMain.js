import DashboardSidebar from "./DashboardSidebar";
import React from "react";
import AllAds from "./AllAds";
import CreateAd from "./CreateAd/CreateAd";

const DashboardMain = ({ activeTab, ads, setAds, fetchUserDetails, fetchUserAds }) => {
  return (
    <div className="flex-1 bg-gray-100 p-6">
      {activeTab === "allAds" && (
        <AllAds ads={ads} setAds={setAds} fetchUserDetails={fetchUserDetails} />
      )}
      {activeTab === "createAd" && (
        <CreateAd fetchUserDetails={fetchUserDetails} fetchUserAds={fetchUserAds} />
      )}
    </div>
  );
};

export default DashboardMain;

