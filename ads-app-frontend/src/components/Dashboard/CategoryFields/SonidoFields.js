import React from "react";

const SonidoFields = () => {
    return (
        <div className="bg-purple-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Técnico de Sonido</h2>
            <p className="text-gray-200 mt-2">
                Si trabajas en sonido, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Servicios que ofreces (eventos, grabaciones, producción musical, etc.)</li>
                <li>Equipos con los que trabajas</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y disponibilidad</li>
                <li>Contacto para contrataciones</li>
            </ul>
        </div>
    );
};

export default SonidoFields;
