import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useMapEvents } from "react-leaflet";

// ✅ Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });

const MapComponent = ({ formData, setFormData }) => {
    const [L, setL] = useState(null);
    const [customMarker, setCustomMarker] = useState(null);

    // ✅ Load Leaflet dynamically on client side
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("leaflet").then((leaflet) => {
                setL(leaflet);
                setCustomMarker(
                    new leaflet.Icon({
                        iconUrl: "/images/pin_v3.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                    })
                );
            });
        }
    }, []);

    // ✅ Location Marker Component
    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setFormData((prev) => ({
                    ...prev,
                    latitude: lat,
                    longitude: lng,
                    googleLink: `https://www.google.com/maps?q=${lat},${lng}`,
                }));
            },
        });

        return formData.latitude && formData.longitude && L && customMarker ? (
            <Marker position={[formData.latitude, formData.longitude]} icon={customMarker} />
        ) : null;
    };

    return (
        <div>
            <label className="block text-gray-700">📍 Localización:</label>
            <p className="text-gray-500 text-sm mb-2">Haz clic en el mapa para marcar tu ubicación exacta.</p>

            {L && customMarker && (
                <MapContainer center={[-12.0464, -77.0428]} zoom={13} className="h-64 w-full rounded-md shadow-md">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <LocationMarker />
                </MapContainer>
            )}

            {formData.googleLink && (
                <p className="text-sm mt-2">
                    📌 <a href={formData.googleLink} target="_blank" className="text-blue-500 hover:underline">
                        Ver ubicación en Google Maps
                    </a>
                </p>
            )}

            
        </div>

        
    );
};

export default MapComponent;
