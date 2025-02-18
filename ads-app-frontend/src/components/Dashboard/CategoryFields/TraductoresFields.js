import React from "react";

const TraductoresFields = () => {
    return (
        <div className="bg-blue-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Traductor</h2>
            <p className="text-gray-200 mt-2">
                Si eres traductor, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Idiomas que manejas</li>
                <li>Especialización (documentos legales, técnicos, médicos, etc.)</li>
                <li>Experiencia y certificaciones</li>
                <li>Disponibilidad y tarifas</li>
                <li>Contacto para cotizaciones</li>
            </ul>
        </div>
    );
};

export default TraductoresFields;
