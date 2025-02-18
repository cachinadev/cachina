import React from "react";

const ProfesionalFields = () => {
    return (
        <div className="bg-gray-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Profesional</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces servicios profesionales, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Especialidad y experiencia</li>
                <li>Servicios que ofreces</li>
                <li>Precios o tarifas</li>
                <li>Ubicación y disponibilidad</li>
                <li>Contacto para consultas</li>
            </ul>
        </div>
    );
};

export default ProfesionalFields;
