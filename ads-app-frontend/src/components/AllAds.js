import { useEffect, useState } from "react";
import API from "../services/api";

const AllAds = () => {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await API.get("/ads/my-ads");
                setAds(response.data);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch ads");
            } finally {
                setLoading(false);
            }
        };

        fetchAds();
    }, []);

    const handleAdUpdated = (updatedAd) => {
        console.log("Updated ad received:", updatedAd);
        setAds((prevAds) =>
            prevAds.map((ad) => (ad._id === updatedAd._id ? updatedAd : ad))
        );
    };

    if (loading) return <div className="text-center py-8">Loading...</div>;
    if (error) return <div className="text-red-500 text-center py-4">{error}</div>;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Your Ads</h2>
            {ads.length === 0 ? (
                <p className="text-gray-600 text-center">You have no ads yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ads.map((ad) => (
                        <div key={ad._id} className="border rounded-lg shadow-sm hover:shadow-lg transition p-4 bg-gray-50">
                            <img
                                src={`http://localhost:5000${ad.pictures[0]}`}
                                alt={ad.title}
                                className="w-full h-40 object-cover rounded-md mb-3"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{ad.title}</h3>
                            <p className="text-gray-600 mb-3">{ad.description.slice(0, 100)}...</p>
                            <div className="flex justify-between">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllAds;