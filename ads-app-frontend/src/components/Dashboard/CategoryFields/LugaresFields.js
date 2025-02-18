import React from "react";

const LugaresFields = () => {
    return (
        <div className="bg-purple-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Lugares</h2>
            <p className="text-gray-100 mt-2">
                Si ofreces un lugar para alquiler o eventos, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-200 mt-2">
                <li>Tipo de lugar (playa, campo, salón, terraza, etc.)</li>
                <li>Capacidad máxima</li>
                <li>Servicios incluidos (wifi, estacionamiento, aire acondicionado)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Fotos y detalles de contacto</li>
            </ul>
        </div>
    );
};

export default LugaresFields;
