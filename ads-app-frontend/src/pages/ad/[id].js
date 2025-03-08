import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { formatDistanceToNow, parseISO } from "date-fns";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuth } from "../../context/AuthContext";
import API, { addToFavorites, removeFromFavorites, getFavorites } from "../../services/api";
import { FaPhoneAlt, FaWhatsapp, FaTelegram, FaShareAlt, FaMapMarkerAlt, FaEye, FaHeart, FaRegHeart } from "react-icons/fa";
import ReviewComponent from "../../components/ReviewComponent"; // Import ReviewComponent


// Dynamically import Leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

// Function to parse latitude and longitude from a Google Maps link
const parseGoogleMapsLink = (link) => {
    if (!link) return null;
    try {
        const atPattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
        const atMatch = link.match(atPattern);
        if (atMatch && atMatch.length >= 3) {
            return { lat: parseFloat(atMatch[1]), lng: parseFloat(atMatch[2]) };
        }
    } catch (error) {
        console.error("Error parsing Google Maps link:", error);
    }
    return null;
};


const AdDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [ad, setAd] = useState(null);
    const [error, setError] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);
    const { user } = useAuth(); // Correct Context Usage
    useEffect(() => {
        if (!id) return;
    
        const fetchAdDetails = async () => {
            try {
                const response = await API.get(`/ads/${id}`);
                setAd(response.data);
            } catch (err) {
                console.error("Error fetching ad details:", err.response?.data || err.message);
                setError("Failed to load ad details.");
            }
        };
    
        const checkFavorite = async () => {
            try {
                if (user) {  // ✅ Only fetch favorites if a user is logged in
                    const favorites = await getFavorites();
                    setIsFavorite(favorites.some(fav => fav._id === id));
                } else {
                    setIsFavorite(false); // No favorites for unauthenticated users
                }
            } catch (err) {
                console.error("Error checking favorites:", err);
            }
        };
    
        fetchAdDetails();
    
        // ✅ Only call checkFavorite if a user is logged in to avoid 401 errors
        if (user) {
            checkFavorite();
        }
    
    }, [id, user]); // ✅ Depend on `id` & `user`    

    const toggleFavorite = async () => {
        // Toggle heart animation immediately
        setIsFavorite((prev) => !prev);

        if (user) {
            try {
                if (!isFavorite) {
                    await addToFavorites(ad._id);
                } else {
                    await removeFromFavorites(ad._id);
                }
            } catch (error) {
                console.error("Error toggling favorite:", error);
            }
        } else {
            console.warn("You must be logged in to save favorites.");
        }
    };

    if (error) return <p className="text-red-500">{error}</p>;
    if (!ad) return <p>Loading...</p>;

    const location = ad.googleLink ? parseGoogleMapsLink(ad.googleLink) : null;
    const position = location ? [location.lat, location.lng] : [-12.0464, -77.0428]; // Default Lima, Peru

//    const shareAd = () => {
//        const shareText = `Check out this ad on Cachina.pe:\nTitle: ${ad.title}\nCategory: ${ad.category}\nLocation: ${ad.departamento}, ${ad.provincia}, ${ad.distrito}\nCost: ${ad.currency} ${ad.cost || "Cotizar"}\nView more: ${window.location.href}`;
//        navigator.clipboard.writeText(shareText);
//        alert("Ad details copied to clipboard! Share it anywhere.");
//    };

const shareAd = () => {
    const shareText = `📢 ¡Mira este anuncio en Cachina.pe! 🏡🔍

📌 Título: ${ad.title}
📂 Categoría: ${ad.category}
📍 Ubicación: ${ad.departamento}, ${ad.provincia}, ${ad.distrito}
🏠 Dirección: ${ad.address}
📞 Teléfono: ${ad.contactNumber}
💰 Costo: ${ad.currency} ${ad.cost || "Cotizar"}
🌍 Ver ubicación: ${ad.googleLink || "No disponible"}
🔗 Ver más detalles: ${window.location.href}

¡Contáctalos ahora y descubre más! 🚀`;

    if (navigator.clipboard && window.isSecureContext) {
        // ✅ Modern browser with clipboard API (HTTPS only)
        navigator.clipboard.writeText(shareText)
            .then(() => alert("¡Detalles copiados al portapapeles! 📋"))
            .catch(err => console.error("Error al copiar:", err));
    } else {
        // ❗ Fallback for HTTP & unsupported browsers
        const textArea = document.createElement("textarea");
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand("copy");
            alert("¡Detalles copiados al portapapeles! 📋");
        } catch (err) {
            console.error("Error al copiar:", err);
        }
        document.body.removeChild(textArea);
    }
};



    const openWhatsApp = () => {
        const message = `Hello, I'm interested in your ad \"${ad.title}\" listed on Cachina.pe.`;
        const url = `https://wa.me/${ad.contactNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const openTelegram = () => {
        const message = `Hello, I'm interested in your ad \"${ad.title}\" listed on Cachina.pe.`;
        const url = `https://t.me/share/url?url=${window.location.href}&text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const formattedCost = ad.cost ? `${ad.cost} ${ad.currency}` : "Cotizar";

    ////
    const CustomPrevArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full z-10 transition-opacity"
                aria-label="Previous Slide"
            >
                ◀
            </button>
        );
    };
    
    const CustomNextArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full z-10 transition-opacity"
                aria-label="Next Slide"
            >
                ▶
            </button>
        );
    };    
////

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post(`/ads/${id}/reviews`, newReview);
            
            // Add the new review directly to the reviews state
            setReviews((prevReviews) => [data, ...prevReviews]);
    
            setNewReview({ rating: 5, comment: "" }); // Clear form
        } catch (error) {
            console.error("Error submitting review:", error);
            alert("No se pudo enviar la reseña");
        }
    };
    
    return (
        <div className="container mx-auto px-4 py-8">
        {/* Sticky Header Section */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl shadow-2xl mb-8 border border-white/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            {/* Ad Information */}
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-1">{ad.title}</h1>
              <p className="text-lg font-medium opacity-90">{ad.category} • {ad.departamento}, {ad.provincia}, {ad.distrito}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm opacity-80">
                
            {/* <p>Creado por: <span className="font-semibold">{ad.createdBy?.name || "Unknown"}</span></p> */}

            <p>

            Creado por:{" "}
            <a
                href={`/user/${encodeURIComponent(ad.createdBy?.name.replace(/\s+/g, "").toLowerCase())}`}
                className="font-bold text-white-500 hover:underline"
            >
                {ad.createdBy?.name || "Desconocido"}
            </a>
            </p>


            <p className="flex items-center"><FaEye className="mr-1" /> {ad.views} Vistos</p>
              </div>
            </div>
      
            {/* Favorite Button */}
            <div className="flex items-center justify-end">
              <button 
                onClick={toggleFavorite} 
                className="flex items-center space-x-2 bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg shadow-md transition duration-300"
              >
                <span className="text-sm font-semibold">Marcar Favorito</span>
                {isFavorite ? (
                  <FaHeart className="text-red-500 text-2xl" />
                ) : (
                  <FaRegHeart className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>      
    
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-2">

                {/* Image Carousel */}
                {/* Image Carousel */}
{/* Image Carousel */}
{/* Image Carousel */}
<div className="bg-white shadow-md rounded-lg mb-8 overflow-hidden relative">
    {ad.pictures.length > 1 ? (
        <Slider 
            {...carouselSettings}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
        >
            {ad.pictures.map((pic, index) => (
                <div key={index} className="w-full flex justify-center">
                    <img 
                        src={pic ? `http://localhost:5000${pic}` : "/images/placeholder.png"} 
                        alt={`Ad Image ${index + 1}`} 
                        className="w-full h-auto max-h-96 object-contain rounded-lg"
                        onError={(e) => (e.target.src = "/images/placeholder.png")}
                    />
                </div>
            ))}
        </Slider>
    ) : ad.pictures.length === 1 ? (
        <div className="w-full flex justify-center">
            <img 
                src={ad.pictures[0] ? `http://localhost:5000${ad.pictures[0]}` : "/images/placeholder.png"} 
                alt="Ad" 
                className="w-full h-auto max-h-96 object-contain rounded-lg"
                onError={(e) => (e.target.src = "/images/placeholder.png")}
            />
        </div>
    ) : (
        <div className="w-full flex justify-center bg-gray-200 h-96 flex items-center">
            <p className="text-gray-500 text-lg">No hay imágenes disponibles</p>
        </div>
    )}
</div>
                   {/* 📖 Description Section */}
<div className="bg-white p-6 shadow-lg rounded-lg mb-8 border-l-4 border-blue-500">
    <h2 className="text-3xl font-bold text-blue-700 flex items-center gap-2 mb-4">
        Descripción
    </h2>
    
    <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-gray-800 text-lg leading-relaxed font-medium">
            {ad.description || "No hay descripción disponible para este anuncio."}
        </p>
    </div>
</div>

    
                    {/* Location */}
                    <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Ubicación</h2>
                        {location && (
                            <a
                                href={ad.googleLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline flex items-center mb-4"
                            >
                                <FaMapMarkerAlt className="mr-2" /> View on Google Maps
                            </a>
                        )}
                        <MapContainer
                            center={position}
                            zoom={13}
                            style={{ height: "300px", borderRadius: "8px" }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>{ad.title}</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>

        
               {/* Sticky Right Column */}
    <div className="sticky top-8">
    <div className="bg-white p-6 shadow-xl rounded-2xl space-y-6 border border-gray-200">
        
        {/* 💰 Cost & Availability Section */}
        <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-500">
        <p className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            💰 Costo: <span className="text-green-600">{formattedCost}</span>
        </p>

        {/* ✅ Payment Methods */}
        {ad.paymentMethods && (
            <p className="text-gray-700 mt-2 flex items-center">
            <strong className="mr-2">💳 Métodos de Pago:</strong> {ad.paymentMethods}
            </p>
        )}

        {/* ✅ Available Days */}
        {ad.availableDays && (
            <p className="text-gray-700 flex items-center">
            <strong className="mr-2">📆 Días Disponibles:</strong> {ad.availableDays}
            </p>
        )}

        {/* ✅ Available Hours */}
        {ad.availableHours && (
            <p className="text-gray-700 flex items-center">
            <strong className="mr-2">🕒 Horario Disponible:</strong> {ad.availableHours}
            </p>
        )}

        {/* ✅ Ad Address */}
        {ad.address && (
            <p className="text-gray-700 flex items-center">
            <strong className="mr-2">📍 Dirección:</strong> {ad.address}
            </p>
        )}
        </div>

        {/* 📞 Contact & Action Buttons */}
        <div className="space-y-4">
        <a
            href={`tel:${ad.contactNumber}`}
            className="flex items-center justify-center gap-2 bg-green-500 text-white text-lg font-semibold py-3 rounded-xl hover:bg-green-600 transition duration-300 shadow-md"
        >
            <FaPhoneAlt className="text-xl" /> Llamar Ahora
        </a>

        <button
            onClick={openWhatsApp}
            className="flex items-center justify-center gap-2 bg-green-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-green-700 transition duration-300 shadow-md w-full"
        >
            <FaWhatsapp className="text-xl" /> WhatsApp
        </button>

        <button
            onClick={openTelegram}
            className="flex items-center justify-center gap-2 bg-blue-500 text-white text-lg font-semibold py-3 rounded-xl hover:bg-blue-600 transition duration-300 shadow-md w-full"
        >
            <FaTelegram className="text-xl" /> Telegram
        </button>

        <button
            onClick={shareAd}
            className="flex items-center justify-center gap-2 bg-yellow-500 text-white text-lg font-semibold py-3 rounded-xl hover:bg-yellow-600 transition duration-300 shadow-md w-full"
        >
            <FaShareAlt className="text-xl" /> Compartir
        </button>
        </div>

        {/* 🌍 Website Link */}
        {ad.website && (
        <a
            href={ad.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-blue-600 hover:underline font-semibold mt-4"
        >
            🌍 Visitar Página Web
        </a>
        )}

        {/* ⭐ Reviews Section */}
        <div className="mt-6">
        <ReviewComponent adId={ad._id} user={user} />
        </div>
    </div>
    </div>

            </div>
        </div>  
    );
}
export default AdDetails;
