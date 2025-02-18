import React from "react";

const PeriodistaFields = () => {
    return (
        <div className="bg-blue-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Periodista</h2>
            <p className="text-gray-200 mt-2">
                Si eres periodista, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Especialización (política, economía, deportes, espectáculos, etc.)</li>
                <li>Medios en los que has trabajado (periódicos, radio, TV, digital)</li>
                <li>Servicios que ofreces (redacción, investigación, entrevistas)</li>
                <li>Experiencia y referencias</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PeriodistaFields;
