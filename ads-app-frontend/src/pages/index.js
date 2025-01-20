import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import { formatDistanceToNow, parseISO } from "date-fns";
import SearchFilter from "../components/SearchFilter";

const LandingPage = () => {
    const [ads, setAds] = useState([]);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [provincia, setProvincia] = useState("");
    const [distrito, setDistrito] = useState("");
    const [filteredAds, setFilteredAds] = useState([]);
    const [uniqueFilters, setUniqueFilters] = useState({
        categories: [],
        departamentos: [],
        provincias: [],
        distritos: []
    });

    const router = useRouter();

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await API.get("/ads");
                let adsData = response.data;

                // Sort ads by creation date (latest first)
                adsData = adsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setAds(adsData);
                setFilteredAds(adsData);

                const categories = [...new Set(adsData.map((ad) => ad.category))].filter(Boolean);
                const departamentos = [...new Set(adsData.map((ad) => ad.departamento))].filter(Boolean);

                setUniqueFilters({ categories, departamentos, provincias: [], distritos: [] });
            } catch (err) {
                console.error("Error fetching ads:", err.response?.data || err.message);
                setError("Failed to load ads. Please try again later.");
            }
        };
        fetchAds();
    }, []);

    useEffect(() => {
        if (departamento) {
            const provincias = [
                ...new Set(ads.filter((ad) => ad.departamento === departamento).map((ad) => ad.provincia))
            ].filter(Boolean);
            setUniqueFilters((prev) => ({ ...prev, provincias, distritos: [] }));
            setProvincia("");
            setDistrito("");
        }
    }, [departamento, ads]);

    useEffect(() => {
        if (provincia) {
            const distritos = [
                ...new Set(
                    ads.filter((ad) => ad.departamento === departamento && ad.provincia === provincia).map((ad) => ad.distrito)
                )
            ].filter(Boolean);
            setUniqueFilters((prev) => ({ ...prev, distritos }));
            setDistrito("");
        }
    }, [provincia, departamento, ads]);

    useEffect(() => {
        let filtered = ads;

        if (searchTerm) {
            filtered = filtered.filter((ad) =>
                ad.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (category) {
            filtered = filtered.filter((ad) => ad.category === category);
        }

        if (departamento) {
            filtered = filtered.filter((ad) => ad.departamento === departamento);
        }

        if (provincia) {
            filtered = filtered.filter((ad) => ad.provincia === provincia);
        }

        if (distrito) {
            filtered = filtered.filter((ad) => ad.distrito === distrito);
        }

        setFilteredAds(filtered);
    }, [searchTerm, category, departamento, provincia, distrito, ads]);

    const timeSinceCreated = (createdAt) => {
        if (!createdAt) return "Unknown time";
        return formatDistanceToNow(parseISO(createdAt), { addSuffix: true });
    };

    const handleViewDetails = (adId) => {
        router.push(`/ad/${adId}`);
    };

    return (
        <div className="container mx-auto p-6">
            {/* Search and Filter Component */}
            <SearchFilter
                category={category}
                setCategory={setCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                departamento={departamento}
                setDepartamento={setDepartamento}
                provincia={provincia}
                setProvincia={setProvincia}
                distrito={distrito}
                setDistrito={setDistrito}
                uniqueFilters={uniqueFilters}
            />

            {/* Ads List */}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {filteredAds.length === 0 ? (
                <p className="text-center text-gray-500">No ads found. Adjust your search criteria.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAds.map((ad, index) => (
                        <div
                            key={ad._id}
                            className="group border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                            onClick={() => handleViewDetails(ad._id)}
                        >
                            {ad.pictures?.length > 0 ? (
                                <img
                                    src={`http://localhost:5000${ad.pictures[0]}`}
                                    alt={ad.title}
                                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
                                    Imagen no disponible
                                </div>
                            )}

                            <div className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-lg font-bold group-hover:text-blue-500 transition-colors duration-300 line-clamp-2">
                                        {ad.title}
                                    </h2>
                                    {index === 0 && (
                                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                            New
                                        </span>
                                    )}
                                </div>

                                <div className="text-sm text-gray-500 mb-2">
                                    <strong className="text-gray-700">Location:</strong> {ad.departamento}, {ad.provincia}, {ad.distrito}
                                </div>
                                <div className="text-sm text-gray-500 mb-2">
                                    <strong className="text-gray-700">Cost:</strong> {ad.cost} {ad.currency}
                                </div>
                                <div className="text-sm text-gray-500 mb-2">
                                    <strong className="text-gray-700">Published by:</strong> {ad.createdBy?.name || "Unknown"}
                                </div>
                                <div className="text-sm text-gray-500">
                                    <strong className="text-gray-700">Created:</strong> {timeSinceCreated(ad.createdAt)}
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
