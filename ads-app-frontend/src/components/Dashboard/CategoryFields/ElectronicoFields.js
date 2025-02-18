import React from "react";

const ElectronicoFields = () => {
    return (
        <div className="bg-blue-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-700">📌 Sugerencias para tu anuncio de Técnico Electrónico</h2>
            <p className="text-gray-700 mt-2">
                Si trabajas con sistemas electrónicos, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidad (reparación de equipos, automatización, sistemas embebidos)</li>
                <li>Servicios ofrecidos (diagnóstico, instalación, mantenimiento)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y horarios</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ElectronicoFields;
