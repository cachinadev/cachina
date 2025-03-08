import React from "react";

const AlquilerIluminacionFields = () => {
    return (
        <div className="bg-purple-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-purple-800">📌 Sugerencias para tu anuncio de Alquiler de Iluminación</h2>
            <p className="text-gray-700 mt-2">
                Si alquilas equipos de iluminación para eventos, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de iluminación disponibles (LED, escénica, arquitectónica, efectos especiales)</li>
                <li>Servicios adicionales (instalación, desmontaje, operador técnico)</li>
                <li>Experiencia en eventos (bodas, conciertos, teatro, fiestas privadas)</li>
                <li>Ubicación y zonas de cobertura</li>
                <li>Precios y opciones de alquiler</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default AlquilerIluminacionFields;
