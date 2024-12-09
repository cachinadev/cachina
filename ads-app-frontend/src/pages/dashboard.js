import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import EditAdModal from "../components/EditAdModal";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [ads, setAds] = useState([]); // Manage ads state globally
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("allAds"); // Manage tabs: All Ads / Create Ad

    // Fetch user and ads data
    const fetchUserDetails = async () => {
        try {
            const response = await API.get("/users/me");
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

    const fetchUserAds = async () => {
        try {
            const response = await API.get("/ads/my-ads");
            setAds(response.data);
        } catch (err) {
            console.error("Failed to fetch ads:", err.response?.data || err.message);
        }
    };

    useEffect(() => {
        fetchUserDetails();
        fetchUserAds();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading your dashboard...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow flex">
                <aside className="w-1/4 bg-gray-800 text-white p-4">
                    <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
                    <p>ID: {user.uniqueId}</p>
                    <p>Plan: {user.planType}</p>
                    <p>Ads Posted: {ads.length}</p> {/* Display ads count */}
                    <nav className="mt-6">
                        <ul>
                            <li
                                className={`p-2 cursor-pointer ${
                                    activeTab === "allAds" ? "bg-gray-700" : ""
                                }`}
                                onClick={() => setActiveTab("allAds")}
                            >
                                All Ads
                            </li>
                            <li
                                className={`p-2 cursor-pointer ${
                                    activeTab === "createAd" ? "bg-gray-700" : ""
                                }`}
                                onClick={() => setActiveTab("createAd")}
                            >
                                Create Ad
                            </li>
                        </ul>
                    </nav>
                    <button
                        onClick={handleLogout}
                        className="mt-6 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </aside>

                <main className="w-3/4 bg-gray-100 p-6">
                    {activeTab === "allAds" && <AllAds ads={ads} setAds={setAds} fetchUserDetails={fetchUserDetails} />}
                    {activeTab === "createAd" && (
                        <CreateAd fetchUserDetails={fetchUserDetails} fetchUserAds={fetchUserAds} />
                    )}
                </main>
            </div>
            <footer className="bg-gray-800 text-white text-center py-2">
                © 2024 CACHINA PE. All Rights Reserved.
            </footer>
        </div>
    );
};

//Create AD
const CreateAd = ({ fetchUserDetails, fetchUserAds }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        departamento: "",
        provincia: "",
        distrito: "",
        contactNumber: "",
        cost: "",
        currency: "Soles",
        address: "",
        googleLink: "",
        areaTotal: "",
        habitaciones: "",
        planta: "",
        bano: "",
        mobiliario: "",
        equipamiento: "",
        servicios: "",
        pictures: [], // For image files
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleFileChange = (e) => {
        setFormData({ ...formData, pictures: Array.from(e.target.files) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === "pictures") {
                value.forEach((file) => formDataToSend.append("images", file));
            } else {
                formDataToSend.append(key, value);
            }
        });

        try {
            const response = await API.post("/ads/upload-images", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setSuccess(response.data.message);
            setFormData({
                title: "",
                description: "",
                category: "",
                departamento: "",
                provincia: "",
                distrito: "",
                contactNumber: "",
                cost: "",
                currency: "Soles",
                address: "",
                googleLink: "",
                areaTotal: "",
                habitaciones: "",
                planta: "",
                bano: "",
                mobiliario: "",
                equipamiento: "",
                servicios: "",
                pictures: [],
            });
            fetchUserDetails();
            fetchUserAds();
        } catch (err) {
            console.error("Error creating ad:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Failed to create ad.");
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Create a New Ad</h2>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Title"
                    className="w-full border p-2"
                    required
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Description"
                    className="w-full border p-2"
                    required
                ></textarea>
                <select
                    name="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border p-2"
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Alquilo">Alquilo</option>
                    <option value="Deporte">Deporte</option>
                </select>
                <input
                    type="file"
                    name="images"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full border p-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create Ad
                </button>
            </form>
        </div>
    );
};

//All AD
const AllAds = ({ ads, setAds, fetchUserDetails }) => {
    const [selectedAd, setSelectedAd] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleDeleteAd = async (adId) => {
        if (!window.confirm("Are you sure you want to delete this ad?")) return;

        try {
            const response = await API.delete(`/ads/${adId}`);
            alert(response.data.message);
            setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId));
            await fetchUserDetails();
        } catch (err) {
            console.error("Error deleting ad:", err.response?.data || err.message);
            alert(err.response?.data?.message || "Failed to delete ad");
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


export default Dashboard;