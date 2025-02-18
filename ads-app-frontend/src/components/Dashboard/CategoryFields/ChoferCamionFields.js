import React from "react";

const ChoferCamionFields = () => {
    return (
        <div className="bg-gray-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-900">📌 Sugerencias para tu anuncio de Chofer de Camión</h2>
            <p className="text-gray-700 mt-2">
                Si eres chofer de camión y ofreces servicios de transporte, incluye:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de camión y carga que puedes transportar</li>
                <li>Rutas o zonas de cobertura</li>
                <li>Disponibilidad de horarios</li>
                <li>Certificaciones o permisos necesarios</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ChoferCamionFields;
