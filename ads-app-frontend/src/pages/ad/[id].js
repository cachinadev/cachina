import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { formatDistanceToNow, parseISO } from "date-fns";
import { FaPhoneAlt, FaShareAlt, FaClock } from "react-icons/fa";

const AdDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [ad, setAd] = useState(null);
    const [error, setError] = useState("");
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            fetchAdDetails();
        }
    }, [id]);

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsCarouselOpen(true);
        document.addEventListener("keydown", handleKeyPress);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ad.pictures.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + ad.pictures.length) % ad.pictures.length);
    };

    const handleCloseCarousel = () => {
        setIsCarouselOpen(false);
        document.removeEventListener("keydown", handleKeyPress);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
            handleCloseCarousel();
        } else if (e.key === "ArrowRight") {
            handleNextImage();
        } else if (e.key === "ArrowLeft") {
            handlePrevImage();
        }
    };

    const copyToClipboard = () => {
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
            alert("Copy to clipboard is not supported in this browser.");
            return;
        }

        if (ad) {
            const shareText = `Check out this ad on Cachina.pe:\n\nTitle: ${ad.title}\nDescription: ${ad.description}\nCategory: ${ad.category}\nContact: ${ad.contactNumber}\nLocation: ${ad.departamento}, ${ad.provincia}, ${ad.distrito}\nView more: ${window.location.href}`;

            navigator.clipboard.writeText(shareText)
                .then(() => alert("Ad details copied to clipboard!"))
                .catch((err) => {
                    console.error("Failed to copy to clipboard:", err);
                    alert("Failed to copy. Please try manually.");
                });
        }
    };

    if (error) return <p className="text-red-500">{error}</p>;
    if (!ad) return <p>Loading...</p>;

    const renderFeatures = () => {
        const features = [
            { label: "Bedrooms", value: ad.habitaciones },
            { label: "Bathrooms", value: ad.bano },
            { label: "Furniture", value: ad.mobiliario },
            { label: "Equipment", value: ad.equipamiento },
            { label: "Services", value: ad.servicios },
            { label: "Parking", value: ad.estacionamiento },
            { label: "Area Total", value: ad.areaTotal ? `${ad.areaTotal} m²` : null },
            { label: "Favorites", value: ad.favoritesCount },
        ];

        return features
            .filter((feature) => feature.value && feature.value !== "N/A")
            .map((feature, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-md shadow">
                    <p className="text-gray-700"><strong>{feature.label}:</strong> {feature.value}</p>
                </div>
            ));
    };

    return (
        <div className="container mx-auto p-6">
            {/* Title and Cost */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h1 className="text-4xl font-bold text-gray-800">{ad.title}</h1>
                <div className="text-right">
                    <div className="text-2xl font-semibold text-green-500">s/.{ad.cost || "Cotizar"}</div>
                    <a
                        href={`tel:${ad.contactNumber}`}
                        className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-md text-lg shadow hover:bg-blue-600 mt-2"
                    >
                        <FaPhoneAlt className="mr-2" /> Call Now
                    </a>
                </div>
            </div>

            {/* Category and Location */}
            <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded mr-2">
                    Category: {ad.category}
                </span>
                <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded">
                    Location: {ad.departamento}, {ad.provincia}, {ad.distrito}
                </span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{ad.description}</p>

            {/* Image Album */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {ad.pictures.map((pic, index) => (
                    <img
                        key={index}
                        src={`http://192.168.18.27:5000${pic}`}
                        alt={`Ad ${index + 1}`}
                        className="w-full h-40 object-cover rounded-md cursor-pointer hover:opacity-80"
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>

            {/* Carousel */}
            {isCarouselOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleCloseCarousel}
                >
                    <button
                        className="absolute top-5 right-5 text-white text-3xl"
                        onClick={handleCloseCarousel}
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-5 text-white text-3xl"
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage();
                        }}
                    >
                        &#10094;
                    </button>
                    <img
                        src={`http://192.168.18.27:5000${ad.pictures[currentImageIndex]}`}
                        alt="Carousel"
                        className="max-w-full max-h-full"
                    />
                    <button
                        className="absolute right-5 text-white text-3xl"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage();
                        }}
                    >
                        &#10095;
                    </button>
                </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {renderFeatures()}
            </div>

            {/* Contact Button and Created Info */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-4">
                <a
                    href={`tel:${ad.contactNumber}`}
                    className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-md text-lg shadow hover:bg-blue-600"
                >
                    <FaPhoneAlt className="mr-2" /> Call Now
                </a>
                <button
                    onClick={copyToClipboard}
                    className="flex items-center bg-green-500 text-white px-6 py-3 rounded-md text-lg shadow hover:bg-green-600 mt-4 sm:mt-0"
                >
                    <FaShareAlt className="mr-2" /> Share Ad
                </button>
                <div className="text-gray-500 text-sm flex items-center mt-4 sm:mt-0">
                    <FaClock className="mr-2" />
                    {ad.createdAt ? formatDistanceToNow(parseISO(ad.createdAt), { addSuffix: true }) : "Unknown"}
                </div>
            </div>
        </div>
    );
};

export default AdDetails;