import React from "react";

const GanaderiaFields = () => {
    return (
        <div className="bg-brown-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-brown-800">📌 Sugerencias para tu anuncio de Ganadería</h2>
            <p className="text-gray-700 mt-2">
                Si trabajas en ganadería, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de animales (vacuno, porcino, avícola, ovino)</li>
                <li>Servicios ofrecidos (venta de ganado, asesoramiento, cuidado animal)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Certificaciones o experiencia en el rubro</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default GanaderiaFields;
