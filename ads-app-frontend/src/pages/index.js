import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import { formatDistanceToNow, parseISO } from "date-fns";

const LandingPage = () => {
    const [ads, setAds] = useState([]);
    const [error, setError] = useState("");
    const router = useRouter();

    // Fetch ads from the backend
    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await API.get("/ads");
                setAds(response.data);
            } catch (err) {
                console.error("Error fetching ads:", err.response?.data || err.message);
                setError("Failed to load ads. Please try again later.");
            }
        };
        fetchAds();
    }, []);

    // Format the time since the ad was created
    const timeSinceCreated = (createdAt) => {
        if (!createdAt) return "Unknown time";
        try {
            return formatDistanceToNow(parseISO(createdAt), { addSuffix: true });
        } catch (error) {
            console.error("Invalid date format:", createdAt, error);
            return "Invalid time";
        }
    };

    // Handle view details click
    const handleViewDetails = (adId) => {
        router.push(`/ad/${adId}`);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
                Explore the Latest Listings
            </h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {ads.length === 0 ? (
                <p className="text-center text-gray-500">No ads available. Check back later!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ads.map((ad) => (
                        <div
                            key={ad._id}
                            className="group border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            onClick={() => handleViewDetails(ad._id)}
                        >
                            {ad.pictures && ad.pictures.length > 0 ? (
                                <img
                                    src={`http://192.168.18.27:5000${ad.pictures[0]}`}
                                    alt={ad.title}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
                                    No Image Available
                                </div>
                            )}
                            <div className="p-4">
                                {/* Title */}
                                <h2 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                                    {ad.title}
                                </h2>

                                {/* Category */}
                                <div className="text-sm text-gray-600 mb-2">
                                    Type of Category: <strong>{ad.category}</strong>
                                </div>

                                {/* Location */}
                                <div className="text-sm text-gray-500 mb-2">
                                    Location:{" "}
                                    <strong>
                                        {ad.departamento}, {ad.provincia}, {ad.distrito}
                                    </strong>
                                </div>

                                {/* Cost */}
                                <div className="text-sm text-gray-500 mb-2">
                                    Cost:{" "}
                                    <strong>
                                        {ad.cost} {ad.currency}
                                    </strong>
                                </div>

                                {/* Published by */}
                                <div className="text-sm text-gray-500 mb-2">
                                    Published by: <strong>{ad.createdBy?.name || "Unknown"}</strong>
                                </div>

                                {/* Created */}
                                <div className="text-sm text-gray-500">
                                    Created {timeSinceCreated(ad.createdAt)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LandingPage;
