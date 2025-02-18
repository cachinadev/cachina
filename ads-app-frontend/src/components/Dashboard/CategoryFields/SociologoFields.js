import React from "react";

const SociologoFields = () => {
    return (
        <div className="bg-blue-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Sociólogo</h2>
            <p className="text-gray-200 mt-2">
                Si eres sociólogo, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Especialización (sociología urbana, de género, política, etc.)</li>
                <li>Servicios que ofreces (consultorías, investigación, análisis de datos sociales)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default SociologoFields;
