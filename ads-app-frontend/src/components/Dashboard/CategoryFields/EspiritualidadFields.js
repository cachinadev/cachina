import React from "react";

const EspiritualidadFields = () => {
    return (
        <div className="bg-purple-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-purple-800">📌 Sugerencias para tu anuncio de Espiritualidad</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios relacionados con espiritualidad, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de servicios (meditación, reiki, tarot, coaching espiritual, yoga)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y disponibilidad</li>
                <li>Modalidad (presencial o en línea)</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default EspiritualidadFields;
