import React from "react";

const EventosFields = () => {
    return (
        <div className="bg-pink-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-pink-800">📌 Sugerencias para tu anuncio de Eventos</h2>
            <p className="text-gray-700 mt-2">
                Si organizas eventos, considera incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de eventos organizados (corporativos, bodas, fiestas, conferencias)</li>
                <li>Experiencia y certificaciones</li>
                <li>Servicios incluidos (decoración, catering, música, logística)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default EventosFields;
