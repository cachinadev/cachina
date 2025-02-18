import React from "react";

const SoldadorFields = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Soldador</h2>
            <p className="text-gray-200 mt-2">
                Si eres soldador, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipos de soldadura en los que trabajas (MIG, TIG, electrodo, autógena, etc.)</li>
                <li>Experiencia y certificaciones</li>
                <li>Equipos y herramientas que usas</li>
                <li>Ubicación y disponibilidad</li>
                <li>Contacto para trabajos y cotizaciones</li>
            </ul>
        </div>
    );
};

export default SoldadorFields;
