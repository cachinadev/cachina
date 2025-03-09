import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🚗 Car Icon (Ensure `/public/car-icon.png` exists)
const carIcon = new L.Icon({
  iconUrl: "/car-icon.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

// 🔄 Custom Hook: Move Vehicles Without Re-rendering
const useVehicleMovement = (vehicles, routePath) => {
  const [vehiclePositions, setVehiclePositions] = useState({});
  const indexMap = useRef({}); // Store indexes for each vehicle
  let direction = useRef(1); // Movement direction

  useEffect(() => {
    if (!routePath.length) return;

    vehicles.forEach((vehicle) => (indexMap.current[vehicle.id] = 0));

    const moveVehicles = () => {
      setVehiclePositions(() => {
        const newPositions = {};

        vehicles.forEach((vehicle) => {
          let currentIndex = indexMap.current[vehicle.id];
          let nextIndex = currentIndex + direction.current;

          if (nextIndex >= routePath.length) {
            direction.current = -1;
            nextIndex = routePath.length - 1;
          } else if (nextIndex < 0) {
            direction.current = 1;
            nextIndex = 0;
          }

          indexMap.current[vehicle.id] = nextIndex;
          newPositions[vehicle.id] = routePath[nextIndex];
        });

        return newPositions;
      });
    };

    const interval = setInterval(moveVehicles, 2000);
    return () => clearInterval(interval);
  }, [vehicles, routePath]);

  return vehiclePositions;
};

// 🚗 Component: Handles Vehicle Markers
const VehicleMarkers = ({ vehicles, routePath }) => {
  const map = useMap();
  const vehiclePositions = useVehicleMovement(vehicles, routePath);
  const vehicleRefs = useRef({});

  useEffect(() => {
    vehicles.forEach((vehicle) => {
      const position = vehiclePositions[vehicle.id];
      if (position) {
        if (!vehicleRefs.current[vehicle.id]) {
          vehicleRefs.current[vehicle.id] = L.marker([position.lat, position.lng], { icon: carIcon }).addTo(map);
        } else {
          vehicleRefs.current[vehicle.id].setLatLng([position.lat, position.lng]);
        }
      }
    });
  }, [vehiclePositions, map, vehicles]);

  return null;
};

// 📌 Main Map Component
const Map = ({ routeId, vehicleData }) => {
  const [routePath, setRoutePath] = useState([]);

  // 📍 Fetch Route Path
  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/rutas/${routeId}`);
        const data = await response.json();
        setRoutePath(data.path || []);
      } catch (error) {
        console.error("Error fetching route data:", error);
      }
    };

    if (routeId) fetchRoute();
  }, [routeId]);

  return (
    <MapContainer center={routePath[0] || [-12.0464, -77.0428]} zoom={14} style={{ height: "500px", width: "100%" }}>
      {/* 🗺️ Tile Layer */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* 📍 Route Path */}
      {routePath.length > 1 && <Polyline positions={routePath} color="blue" />}

      {/* 🚗 Moving Vehicles */}
      <VehicleMarkers vehicles={vehicleData} routePath={routePath} />
    </MapContainer>
  );
};

export default Map;
