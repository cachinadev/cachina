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
        if (id) {
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
                    const favorites = await getFavorites();
                    setIsFavorite(favorites.some(fav => fav._id === id));
                } catch (err) {
                    console.error("Error checking favorites:", err);
                }
            };

            fetchAdDetails();
            checkFavorite();
        }
    }, [id]);

    const toggleFavorite = async () => {
        try {
            if (isFavorite) {
                await removeFromFavorites(id);
            } else {
                await addToFavorites(id);
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error("Error toggling favorite:", error);
        }
    };

    if (error) return <p className="text-red-500">{error}</p>;
    if (!ad) return <p>Loading...</p>;

    const location = ad.googleLink ? parseGoogleMapsLink(ad.googleLink) : null;
    const position = location ? [location.lat, location.lng] : [-12.0464, -77.0428]; // Default Lima, Peru

    const shareAd = () => {
        const shareText = `Check out this ad on Cachina.pe:\nTitle: ${ad.title}\nCategory: ${ad.category}\nLocation: ${ad.departamento}, ${ad.provincia}, ${ad.distrito}\nCost: ${ad.currency} ${ad.cost || "Cotizar"}\nView more: ${window.location.href}`;
        navigator.clipboard.writeText(shareText);
        alert("Ad details copied to clipboard! Share it anywhere.");
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

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
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
            alert("Failed to submit review.");
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
                <p>Created by: <span className="font-semibold">{ad.createdBy?.name || "Unknown"}</span></p>
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
                  <FaHeart className="text-red-500 text-xl" />
                ) : (
                  <FaRegHeart className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>      
    
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-2">
                    {/* Image Carousel */}
                    <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
                        <Slider {...carouselSettings}>
                            {ad.pictures.map((pic, index) => (
                                <div key={index}>
                                    <img
                                        src={`http://localhost:5000${pic}`}
                                        alt={`Ad Image ${index + 1}`}
                                        className="rounded-lg object-cover w-full h-96"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

    
                    {/* Description */}
                    <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Description</h2>
                        <p className="text-gray-700 leading-relaxed">{ad.description}</p>
                    </div>
    
                    {/* Location */}
                    <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Location</h2>
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
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <p className="text-xl font-bold mb-4">Cost: {formattedCost}</p>
    
                        <a
                            href={`tel:${ad.contactNumber}`}
                            className="block bg-green-500 text-white text-center py-3 mb-4 rounded-lg hover:bg-green-600 transition duration-300"
                        >
                            <FaPhoneAlt className="inline-block mr-2" /> Call Now
                        </a>
    
                        <button
                            onClick={openWhatsApp}
                            className="block w-full bg-green-600 text-white text-center py-3 mb-4 rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            <FaWhatsapp className="inline-block mr-2" /> WhatsApp
                        </button>
    
                        <button
                            onClick={openTelegram}
                            className="block w-full bg-blue-500 text-white text-center py-3 mb-4 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            <FaTelegram className="inline-block mr-2" /> Telegram
                        </button>
    
                        <button
                            onClick={shareAd}
                            className="block w-full bg-yellow-500 text-white text-center py-3 mb-4 rounded-lg hover:bg-yellow-600 transition duration-300"
                        >
                            <FaShareAlt className="inline-block mr-2" /> Share
                        </button>
    
                        {ad.website && (
                            <a
                                href={ad.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600 hover:underline text-center mt-4"
                            >
                                Visit Website
                            </a>
                        )}

                        {/* Reviews Section */}
                        <div>
                            <ReviewComponent adId={ad._id} user={user} />

                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdDetails;
