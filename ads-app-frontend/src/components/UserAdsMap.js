import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Dynamically import Leaflet components to prevent SSR issues
const MapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import("react-leaflet").then((mod) => mod.TileLayer),
    { ssr: false }
);

// ✅ Function to parse Google Maps link into coordinates
const parseGoogleMapsLink = (link) => {
    if (!link) return null;
    try {
        // ✅ Match format with `@lat,lng`
        const atPattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
        const atMatch = link.match(atPattern);
        if (atMatch && atMatch.length >= 3) {
            return { lat: parseFloat(atMatch[1]), lng: parseFloat(atMatch[2]) };
        }

        // ✅ Match format with `q=lat,lng`
        const qPattern = /q=(-?\d+\.\d+),(-?\d+\.\d+)/;
        const qMatch = link.match(qPattern);
        if (qMatch && qMatch.length >= 3) {
            return { lat: parseFloat(qMatch[1]), lng: parseFloat(qMatch[2]) };
        }
    } catch (error) {
        console.error("❌ Error parsing Google Maps link:", error);
    }
    
    // ✅ Return null if no coordinates found
    return null;
};

const UserAdsMap = ({ ads }) => {
    const [mapInstance, setMapInstance] = useState(null); // Store the Leaflet map instance

    // ✅ Ensure map resizes properly after switching views
    useEffect(() => {
        if (mapInstance) {
            setTimeout(() => {
                mapInstance.invalidateSize();
            }, 500);
        }
    }, [mapInstance]);

    return (
        <div className="h-[500px] bg-gray-200 rounded-md overflow-hidden shadow-lg">
            <MapContainer
                center={[-15.8422522, -70.0282139]} // Default: Puno, Peru
                zoom={10}
                style={{ height: "100%", width: "100%" }}
                whenCreated={setMapInstance} // ✅ Store map instance
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* ✅ Render Markers */}
                {ads.map((ad, index) => {
                    const location = parseGoogleMapsLink(ad.googleLink);
                    if (!location) {
                        console.warn("⚠ No valid location for:", ad.title);
                        return null; // Skip if no valid coordinates
                    }

                    return (
                        <Marker key={index} position={[location.lat, location.lng]}>
                            <Popup>
                                <strong>{ad.title} - {ad.cost} {ad.currency}</strong> <br />
                                📍 {ad.address} - {ad.distrito}, {ad.provincia} <br />
                                📞 {ad.contactNumber} <br />
                                <a href={`/ad/${ad._id}`} className="text-blue-600 hover:underline">
                                    🔍 Ver Detalles
                                </a>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
};

export default UserAdsMap;
