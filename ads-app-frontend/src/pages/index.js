import { useEffect, useState } from "react";
import API from "../services/api";

const LandingPage = () => {
    const [ads, setAds] = useState([]);
    const [error, setError] = useState("");

    // Fetch all ads on component mount
    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await API.get("/ads"); // Assuming the endpoint returns all ads
                setAds(response.data);
            } catch (err) {
                console.error("Error fetching ads:", err.response?.data || err.message);
                setError("Failed to load ads. Please try again later.");
            }
        };

        fetchAds();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Publicaciones</h1>
            {error && <p className="text-red-500">{error}</p>}
            {ads.length === 0 ? (
                <p>No ads available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ads.map((ad) => (
                        <div key={ad._id} className="border rounded-md shadow-md p-4">
                            <h2 className="text-xl font-bold mb-2">{ad.title}</h2>
                            <p className="mb-4">{ad.description}</p>
                            {ad.pictures && ad.pictures.length > 0 ? (
                                <div className="flex gap-2 overflow-x-auto">
                                    {ad.pictures.map((pic, index) => (
                                        <img
                                            key={index}
                                            src={`http://localhost:5000${pic}`}
                                            alt={`Ad ${index + 1}`}
                                            className="w-32 h-32 object-cover rounded-md"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">No images available.</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LandingPage;
