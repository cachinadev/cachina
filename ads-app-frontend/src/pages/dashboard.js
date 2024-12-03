import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import EditAdModal from "../components/EditAdModal";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("allAds"); // Manage tabs: All Ads / Create Ad

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await API.get("/users/me");
                console.log("User data:", response.data); // For debugging
                setUser({
                    ...response.data,
                    adsPosted: response.data.adsPosted || [],
                    uniqueId: response.data.uniqueId || "Unknown",
                });

            } catch (err) {
                console.error("Failed to fetch user details:", err.response?.data || err.message);
                localStorage.removeItem("token"); // Clear invalid token
                router.push("/login"); // Redirect to login page
            }
        };
        fetchUserDetails();
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
        <div className="flex h-screen">
            <aside className="w-1/4 bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
                <p>ID: {user.uniqueId}</p> {/* Display the unique ID */}
                <p>Plan: {user.planType}</p>
                <p>Ads Posted: {user.adsPosted.length}</p>
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
                {activeTab === "allAds" && <AllAds />}
                {activeTab === "createAd" && <CreateAd />}
            </main>
        </div>
    );
};

////
const AllAds = () => {
    const [ads, setAds] = useState([]);
    const [selectedAd, setSelectedAd] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await API.get("/ads/my-ads");
                setAds(response.data);
            } catch (err) {
                console.error("Failed to fetch ads:", err.response?.data || err.message);
            }
        };

        fetchAds();
    }, []);

    const handleEditAd = (ad) => {
        setSelectedAd(ad); // Pass the selected ad to the modal
        setIsEditModalOpen(true);
    };

    const handleAdUpdated = (updatedAd) => {
        console.log("Updated ad received:", updatedAd);
        // Update the state with the edited ad
        setAds((prevAds) =>
            prevAds.map((ad) => (ad._id === updatedAd._id ? updatedAd : ad))
        );
    };

    //Delete Ad
    const handleDeleteAd = async (adId) => {
        if (!window.confirm("Are you sure you want to delete this ad?")) return;

        try {
            const response = await API.delete(`/ads/${adId}`);
            console.log("Delete response:", response.data);

            // Update the ads state to reflect the deletion
            setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId));
            alert(response.data.message); // Show success message
        } catch (err) {
            console.error("Error deleting ad:", err.response?.data || err.message);
            alert(err.response?.data?.message || "Failed to delete ad");
        }
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
                            <div className="mt-2 flex gap-2">
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
            <EditAdModal
                ad={selectedAd}
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onAdUpdated={handleAdUpdated}
            />
        </div>
    );
};
///// 

///Create Ad
const CreateAd = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        location: "",
        contact: "",
        googleLink: "",
        area: "",
        cost: "",
        sport: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    /////
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post("/ads", formData); // Updated endpoint
            setSuccess(response.data.message);
            setError("");
            setFormData({
                title: "",
                description: "",
                category: "",
                location: "",
                contact: "",
                googleLink: "",
                area: "",
                cost: "",
                sport: "",
            });
        } catch (err) {
            console.error("Error details:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Failed to create ad");
        }
    };
        
///
    const renderFormFields = () => {
        switch (formData.category) {
            case "Alquilo":
                return (
                    <>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location (Departamento/Provincia/Distrito)"
                            className="w-full border p-2"
                        />
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Contact Number"
                            className="w-full border p-2"
                        />
                        <input
                            type="text"
                            name="googleLink"
                            value={formData.googleLink}
                            onChange={handleChange}
                            placeholder="Google Map Link"
                            className="w-full border p-2"
                        />
                        <input
                            type="text"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            placeholder="Area"
                            className="w-full border p-2"
                        />
                        <input
                            type="text"
                            name="cost"
                            value={formData.cost}
                            onChange={handleChange}
                            placeholder="Cost per Month"
                            className="w-full border p-2"
                        />
                    </>
                );
            
            case "Deporte":
                return (
                    <>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location (Departamento/Provincia/Distrito)"
                            className="w-full border p-2"
                        />
                        <input
                            type="text"
                            name="sport"
                            value={formData.sport}
                            onChange={handleChange}
                            placeholder="Sport"
                            className="w-full border p-2"
                        />
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Contact Number"
                            className="w-full border p-2"
                        />
                        <input
                            type="text"
                            name="googleLink"
                            value={formData.googleLink}
                            onChange={handleChange}
                            placeholder="Google Map Link"
                            className="w-full border p-2"
                        />
                        <input
                            type="text"
                            name="cost"
                            value={formData.cost}
                            onChange={handleChange}
                            placeholder="Cost per Hour"
                            className="w-full border p-2"
                        />
                    </>
                );
            default:
                return null;
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
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full border p-2"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full border p-2"
                ></textarea>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border p-2"
                >
                    <option value="">Select Category</option>
                    <option value="Alquilo">Alquilo</option>
                    <option value="Deporte">Deporte</option>
                </select>
                {renderFormFields()}
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

<button
    onClick={() => handleDeleteAd(ad._id)}
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
>
    Delete
</button>


export default Dashboard;