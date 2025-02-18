import React from "react";

const MasajistaFields = () => {
    return (
        <div className="bg-teal-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-teal-900">📌 Sugerencias para tu anuncio de Masajista</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de masaje, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de masajes ofrecidos (relajante, terapéutico, deportivo, etc.)</li>
                <li>Duración y precios</li>
                <li>Ubicación y disponibilidad</li>
                <li>Certificaciones y experiencia</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default MasajistaFields;
