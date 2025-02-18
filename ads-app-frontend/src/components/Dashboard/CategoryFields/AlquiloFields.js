import React from "react";

const AlquiloFields = () => {
  return (
    <div className="mt-4 p-4 border border-blue-400 rounded bg-blue-50">
      <h3 className="text-blue-600 font-bold">💡 Sugerencias para tu Anuncio de Alquiler</h3>
      <p className="text-gray-700 mt-2">
        Para mejorar tu anuncio, considera incluir en la descripción:
      </p>
      <ul className="list-disc list-inside text-gray-600 mt-2">
        <li>📍 Ubicación exacta o referencias cercanas.</li>
        <li>🏠 Tipo de lugar: Casa, Departamento, Cuarto, Cabaña, etc.</li>
        <li>📏 Área total (en m²).</li>
        <li>🛏️ Número de habitaciones y baños.</li>
        <li>🚗 Disponibilidad de estacionamiento.</li>
        <li>🛋️ Estado del mobiliario y servicios incluidos.</li>
        <li>📆 Condiciones de alquiler y requisitos.</li>
      </ul>
      <p className="text-gray-700 mt-4">
        ¡Una buena descripción ayuda a atraer más interesados! ✨
      </p>
    </div>
  );
};

export default AlquiloFields;
