import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Polyline, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🚗 Car Icon for simulation (Ensure `/public/car-icon.png` exists)
const carIcon = new L.Icon({
  iconUrl: "/car-icon.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

// 🔄 Custom Hook: Move Vehicles Without Re-rendering
const useVehicleMovement = (vehicles, routePath) => {
  const vehicleRefs = useRef({}); // Store vehicle markers
  const [vehiclePositions, setVehiclePositions] = useState({});

  useEffect(() => {
    if (!routePath.length) return; // 🛑 No route, no movement

    let direction = 1; // Forward movement
    let indexMap = {}; // Store indexes for each vehicle

    vehicles.forEach((vehicle) => {
      indexMap[vehicle.id] = 0; // Start from the beginning
    });

    const moveVehicles = () => {
      setVehiclePositions((prevPositions) => {
        const newPositions = {};

        vehicles.forEach((vehicle) => {
          let currentIndex = indexMap[vehicle.id];
          let nextIndex = currentIndex + direction;

          if (nextIndex >= routePath.length) {
            direction = -1; // Reverse direction when reaching the end
            nextIndex = routePath.length - 1;
          } else if (nextIndex < 0) {
            direction = 1; // Forward direction when reaching the start
            nextIndex = 0;
          }

          indexMap[vehicle.id] = nextIndex;
          newPositions[vehicle.id] = {
            lat: routePath[nextIndex].lat,
            lng: routePath[nextIndex].lng,
          };
        });

        return newPositions;
      });
    };

    const interval = setInterval(moveVehicles, 2000); // Move every 2 seconds
    return () => clearInterval(interval);
  }, [vehicles, routePath]);

  return vehiclePositions;
};

// 🚗 Component: Handles Vehicle Rendering
const VehicleMarkers = ({ vehicles, routePath }) => {
  const map = useMap();
  const vehiclePositions = useVehicleMovement(vehicles, routePath);
  const vehicleRefs = useRef({});

  useEffect(() => {
    vehicles.forEach((vehicle) => {
      const position = vehiclePositions[vehicle.id];

      if (position) {
        if (!vehicleRefs.current[vehicle.id]) {
          // 🆕 Create marker if not exist
          vehicleRefs.current[vehicle.id] = L.marker([position.lat, position.lng], { icon: carIcon }).addTo(map);
        } else {
          // 🔄 Update position smoothly
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

  // 📍 Fetch Route Path Once
  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/rutas/${routeId}`);
        const data = await response.json();
        setRoutePath(data.path);
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
