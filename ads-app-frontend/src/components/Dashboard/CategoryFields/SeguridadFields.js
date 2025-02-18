import React from "react";

const SeguridadFields = () => {
    return (
        <div className="bg-gray-900 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Seguridad</h2>
            <p className="text-gray-200 mt-2">
                Si trabajas en seguridad, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de seguridad que ofreces (privada, eventos, patrullaje, etc.)</li>
                <li>Experiencia y certificaciones</li>
                <li>Equipos y herramientas de trabajo</li>
                <li>Ubicación y disponibilidad</li>
                <li>Contacto para contrataciones</li>
            </ul>
        </div>
    );
};

export default SeguridadFields;
