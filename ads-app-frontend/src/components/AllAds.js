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

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Your Ads</h2>
            {ads.length === 0 ? (
                <p>You have no ads yet.</p>
            ) : (
                <ul>
                    {ads.map((ad) => (
                        <li key={ad._id} className="border p-4 mb-2">
                            <h3 className="font-bold">{ad.title}</h3>
                            <p>{ad.description}</p>
                            <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2">
                                Edit
                            </button>
                            <button className="bg-red-500 text-white px-4 py-1 rounded">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllAds;

