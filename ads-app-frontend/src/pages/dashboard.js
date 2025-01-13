import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import DashboardMain from "../components/Dashboard/DashboardMain";

const Dashboard = () => {
  const [user, setUser] = useState(null); // User data
  const [ads, setAds] = useState([]); // User's ads
  const [activeTab, setActiveTab] = useState("allAds"); // Active tab state
  const router = useRouter();

  // Fetch user details
  const fetchUserDetails = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const response = await API.get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser({
        ...response.data,
        adsPosted: response.data.adsPosted || [],
        uniqueId: response.data.uniqueId || "Unknown",
      });
    } catch (err) {
      console.error("Failed to fetch user details:", err.response?.data || err.message);
      localStorage.removeItem("token");
      router.push("/login");
    }
  };

  // Fetch user's ads
  const fetchUserAds = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await API.get("/ads/my-ads", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAds(response.data);
    } catch (err) {
      console.error("Failed to fetch ads:", err.response?.data || err.message);
    }
  };

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchUserDetails();
    fetchUserAds();
  }, []);

  // Loading state for user data
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading user details...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <DashboardSidebar
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
      />

      {/* Main Content */}
      <DashboardMain
        activeTab={activeTab}
        ads={ads}
        setAds={setAds}
        fetchUserDetails={fetchUserDetails}
        fetchUserAds={fetchUserAds}
      />
    </div>
  );
};

export default Dashboard;
