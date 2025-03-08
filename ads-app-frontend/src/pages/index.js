import { useEffect, useState, useMemo } from "react";
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
    const router = useRouter();

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await API.get("/ads");
                const sortedAds = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setAds(sortedAds);
            } catch (err) {
                setError("Failed to load ads. Please try again later.");
                console.error("Error fetching ads:", err.response?.data || err.message);
            }
        };
        fetchAds();
    }, []);

    // 🏷️ Memoized Unique Filters (Avoid recalculating on every render)
    const uniqueFilters = useMemo(() => {
        const categories = [...new Set(ads.map((ad) => ad.category))].filter(Boolean);
        const departamentos = [...new Set(ads.map((ad) => ad.departamento))].filter(Boolean);
        const provincias = departamento
            ? [...new Set(ads.filter((ad) => ad.departamento === departamento).map((ad) => ad.provincia))].filter(Boolean)
            : [];
        const distritos = provincia
            ? [...new Set(ads.filter((ad) => ad.provincia === provincia).map((ad) => ad.distrito))].filter(Boolean)
            : [];
        return { categories, departamentos, provincias, distritos };
    }, [ads, departamento, provincia]);

    // ⏳ Debounced Search Effect (Prevents excessive re-renders)
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    // 🏆 Memoized Filtered Ads (Recalculates only when dependencies change)
    const filteredAds = useMemo(() => {
        return ads.filter((ad) => {
            return (
                (!debouncedSearchTerm ||
                    ad.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    (ad.description && ad.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))) &&
                (!category || ad.category === category) &&
                (!departamento || ad.departamento === departamento) &&
                (!provincia || ad.provincia === provincia) &&
                (!distrito || ad.distrito === distrito)
            );
        });
    }, [ads, debouncedSearchTerm, category, departamento, provincia, distrito]);

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
                <p className="text-center text-gray-500">No se encontraron anuncios. Ajuste sus criterios de búsqueda.</p>
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
                                            Nuevo
                                        </span>
                                    )}
                                </div>

                                <div className="text-sm text-gray-500 mb-1">
                                    <strong className="text-gray-700">Ubicación:</strong> {ad.departamento}, {ad.provincia}, {ad.distrito}
                                </div>
                                <div className="text-sm text-gray-500 mb-1">
                                    <strong className="text-gray-700">Costo:</strong> {ad.cost} {ad.currency}
                                </div>
                                <div className="text-sm text-gray-500 mb-1">
                                {ad.createdBy?.name || "Desconocido"} <strong className="text-gray-700">-</strong> {formatDistanceToNow(parseISO(ad.createdAt), { addSuffix: true })}
                                   {/* <strong className="text-gray-700">Publicado por:</strong> {ad.createdBy?.name || "Desconocido"}
                                    <strong className="text-gray-700">Publicado por:</strong> {ad.createdBy?.name || "Desconocido"}
                                   */}
                                </div>
                               {/* <div className="text-sm text-gray-500">
                                    <strong className="text-gray-700">Publicado:</strong> {formatDistanceToNow(parseISO(ad.createdAt), { addSuffix: true })}
                                </div>*/}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LandingPage;
