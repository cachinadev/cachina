import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import API from "../services/api";

// 🗺️ Dynamically load the map component to prevent SSR issues
const Map = dynamic(() => import("../components/Map"), { ssr: false });

const Rutas = () => {
  const [routes, setRoutes] = useState([]); // All transport routes
  const [filteredRoutes, setFilteredRoutes] = useState([]); // Filtered routes
  const [selectedRoute, setSelectedRoute] = useState(null); // Selected route
  const [vehicleData, setVehicleData] = useState([]); // Real-time vehicle data
  const [departments, setDepartments] = useState([]); // Unique departments
  const [provinces, setProvinces] = useState([]); // Filtered provinces
  const [districts, setDistricts] = useState([]); // Filtered districts
  const [selectedDept, setSelectedDept] = useState(""); // Selected department
  const [selectedProv, setSelectedProv] = useState(""); // Selected province
  const [selectedDist, setSelectedDist] = useState(""); // Selected district
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🛠 Fetch Transport Routes & Populate Location Filters
  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const { data } = await API.get("/rutas"); // ✅ Ensure correct API path
        setRoutes(data);
        setFilteredRoutes(data);

        // Extract unique departments
        const uniqueDepartments = [...new Set(data.map((route) => route.departamento))];
        setDepartments(uniqueDepartments);
      } catch (err) {
        console.error("❌ Error fetching routes:", err);
        setError("⚠️ No se pudo obtener las rutas. Intente de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  // 🔄 Update Provinces when Department changes
  useEffect(() => {
    if (selectedDept) {
      const uniqueProvinces = [...new Set(routes.filter((route) => route.departamento === selectedDept).map((route) => route.provincia))];
      setProvinces(uniqueProvinces);
      setSelectedProv("");
      setSelectedDist("");
    } else {
      setProvinces([]);
    }
  }, [selectedDept]);

  // 🔄 Update Districts when Province changes
  useEffect(() => {
    if (selectedProv) {
      const uniqueDistricts = [...new Set(routes.filter((route) => route.provincia === selectedProv).map((route) => route.distrito))];
      setDistricts(uniqueDistricts);
      setSelectedDist("");
    } else {
      setDistricts([]);
    }
  }, [selectedProv]);

  // 🔍 Filter Routes based on Location
  useEffect(() => {
    let filtered = routes;
    if (selectedDept) filtered = filtered.filter((route) => route.departamento === selectedDept);
    if (selectedProv) filtered = filtered.filter((route) => route.provincia === selectedProv);
    if (selectedDist) filtered = filtered.filter((route) => route.distrito === selectedDist);
    setFilteredRoutes(filtered);
  }, [selectedDept, selectedProv, selectedDist, routes]);

  // 🚀 Fetch Real-Time Vehicle Data
  useEffect(() => {
    if (selectedRoute) {
      const fetchVehicleData = async () => {
        try {
          const { data } = await API.get(`/rutas/${selectedRoute}`);
          setVehicleData(data.vehicles || []);
        } catch (err) {
          console.error("❌ Error fetching vehicle data:", err);
        }
      };

      fetchVehicleData();
      const interval = setInterval(fetchVehicleData, 5000); // Auto-refresh every 5s
      return () => clearInterval(interval);
    }
  }, [selectedRoute]);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* 🌟 Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg text-center">
        <h1 className="text-2xl font-bold">🗺️ Rutas de Transporte Público</h1>
        <p className="text-sm">Selecciona una ubicación y visualiza las rutas disponibles en tiempo real.</p>
      </div>

      {/* 🔹 Location Filters */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Departamento */}
        <div>
          <label className="font-semibold text-gray-700">Departamento:</label>
          <select className="border p-2 rounded w-full mt-2" value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
            <option value="">Selecciona un departamento</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Provincia */}
        <div>
          <label className="font-semibold text-gray-700">Provincia:</label>
          <select className="border p-2 rounded w-full mt-2" value={selectedProv} onChange={(e) => setSelectedProv(e.target.value)} disabled={!selectedDept}>
            <option value="">Selecciona una provincia</option>
            {provinces.map((prov, index) => (
              <option key={index} value={prov}>{prov}</option>
            ))}
          </select>
        </div>

        {/* Distrito */}
        <div>
          <label className="font-semibold text-gray-700">Distrito:</label>
          <select className="border p-2 rounded w-full mt-2" value={selectedDist} onChange={(e) => setSelectedDist(e.target.value)} disabled={!selectedProv}>
            <option value="">Selecciona un distrito</option>
            {districts.map((dist, index) => (
              <option key={index} value={dist}>{dist}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 🚍 Route Selection */}
      <div className="mt-4">
        <label className="font-semibold text-gray-700">Seleccionar Ruta:</label>
        {loading ? (
          <p className="text-blue-500 font-semibold mt-2">Cargando rutas...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <select className="border p-2 rounded w-full mt-2" onChange={(e) => setSelectedRoute(e.target.value)} value={selectedRoute || ""}>
            <option value="">Selecciona una ruta</option>
            {filteredRoutes.map((route) => (
              <option key={route._id} value={route._id}>
                {route.name} ({route.company})
              </option>
            ))}
          </select>
        )}
      </div>

      {/* 🗺️ Map Section */}
      <div className="mt-6">
        {selectedRoute ? (
          <>
            <Map routeId={selectedRoute} vehicleData={vehicleData} />
          </>
        ) : (
          <p className="text-gray-500 text-center">Selecciona una ruta para ver el mapa.</p>
        )}
      </div>

      {/* 🚀 Future Enhancements */}
      <h2 className="text-lg font-semibold mt-6">🚀 Próximas Mejoras</h2>
      <ul className="list-disc ml-6 text-gray-600 mt-2">
        <li>✅ Integración con GPS de transportistas vía IoT</li>
        <li>✅ Predicciones de llegada en tiempo real</li>
        <li>✅ Datos de tráfico en la ruta</li>
      </ul>

      {/* 📩 Contact for Partnerships */}
      <div className="mt-6 text-center text-gray-600">
        <p>¿Tu empresa de transporte quiere integrar su flota? Escríbenos a:</p>
        <p className="text-blue-500 font-semibold">📧 cachinapuntope@gmail.com</p>
      </div>
    </div>
  );
};

export default Rutas;
