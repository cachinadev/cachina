import React from "react";

const OrganizadorEventosFields = () => {
    return (
        <div className="bg-blue-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Organizador de Eventos</h2>
            <p className="text-gray-100 mt-2">
                Si organizas eventos, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-200 mt-2">
                <li>Tipos de eventos que organizas (bodas, fiestas, corporativos, conciertos)</li>
                <li>Servicios que ofreces (decoración, catering, logística, entretenimiento)</li>
                <li>Experiencia y referencias de eventos anteriores</li>
                <li>Ubicación y cobertura</li>
                <li>Precios y paquetes disponibles</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default OrganizadorEventosFields;
