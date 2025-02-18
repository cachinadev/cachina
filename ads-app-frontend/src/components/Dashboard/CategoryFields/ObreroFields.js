import React from "react";

const ObreroFields = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-300">📌 Sugerencias para tu anuncio de Obrero</h2>
            <p className="text-gray-300 mt-2">
                Si trabajas como obrero, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Tipo de trabajo que realizas (construcción, industria, fábrica, etc.)</li>
                <li>Experiencia y certificaciones</li>
                <li>Disponibilidad y horarios de trabajo</li>
                <li>Ubicación y zonas donde trabajas</li>
                <li>Rango de precios por jornada o proyecto</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ObreroFields;
