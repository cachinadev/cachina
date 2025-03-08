import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import API from "../../services/api";
import { FaMapMarkerAlt, FaThList } from "react-icons/fa";

// ✅ Dynamically import UserAdsMap to prevent SSR issues
const UserAdsMap = dynamic(() => import("../../components/UserAdsMap"), { ssr: false });

const UserProfile = () => {
    const router = useRouter();
    const { username } = router.query;
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [mapView, setMapView] = useState(false);

    useEffect(() => {
        if (!username) return;

        const formattedUsername = decodeURIComponent(username).replace(/\s+/g, "").toLowerCase();

        const fetchUserAds = async () => {
            try {
                console.log("🚀 Fetching ads for:", formattedUsername);
                const { data } = await API.get(`/users/${formattedUsername}/ads`);

                if (!data.length) {
                    setError("No se encontraron anuncios para este usuario.");
                }
                setAds(data);
            } catch (err) {
                console.error("❌ Error fetching user ads:", err);
                setError("Error al obtener los anuncios del usuario.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserAds();
    }, [username]);

    if (loading) return <p className="text-blue-500 text-center text-lg font-semibold">Cargando anuncios...</p>;
    if (error) return <p className="text-red-500 text-center text-lg font-semibold">{error}</p>;

    return (
        <div className="container mx-auto p-6">
            {/* 🔹 User Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-md mb-6 text-center">
                <h1 className="text-3xl font-extrabold">📢 Anuncios de {username}</h1>
                <p className="text-lg opacity-90">Explora todos los anuncios publicados por este usuario</p>
            </div>

            {/* 🔹 Toggle Button */}
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setMapView(!mapView)}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-md hover:bg-blue-600 transition text-lg font-semibold"
                >
                    {mapView ? <FaThList /> : <FaMapMarkerAlt />} {mapView ? "Ver Lista" : "Ver Mapa"}
                </button>
            </div>

            {/* 🔹 Render Map or List */}
            {mapView ? (
                <UserAdsMap ads={ads} /> // ✅ Using the dynamically loaded map component
            ) : (
                // 🔹 List View
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ads.map((ad) => (
                        <li 
                            key={ad._id} 
                            className="border p-4 rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg transition"
                            onClick={() => router.push(`/ad/${ad._id}`)} // ✅ Clickable Ad
                        >
                            {/* ✅ Display Image if Available */}
                            {ad.pictures && ad.pictures.length > 0 ? (
                                <img 
                                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${ad.pictures[0]}`} 
                                    
                                    alt={ad.title} 
                                    className="w-full h-40 object-cover rounded-md"
                                    onError={(e) => (e.target.src = "/images/placeholder.png")}
                                />
                            ) : (
                                <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-500">
                                    No Image Available
                                </div>
                            )}

                            {/* ✅ Ad Info */}
                            <h2 className="text-lg font-semibold mt-3">{ad.title}</h2>
                            <p className="text-gray-600 text-sm">{ad.description.slice(0, 80)}...</p>
                            <p className="text-sm text-gray-500">{ad.category}</p>
                            <p className="text-sm text-gray-700 mt-2">📍 {ad.distrito}, {ad.provincia}</p>

                            {/* ✅ View Details Link */}
                            <a 
                                href={`/ad/${ad._id}`} 
                                className="text-blue-500 hover:underline text-sm font-semibold block mt-3"
                            >
                                🔍 Ver más detalles
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserProfile;
