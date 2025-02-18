import React from "react";

const BuscoFields = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-700">📌 Sugerencias para tu anuncio de "Busco"</h2>
            <p className="text-gray-700 mt-2">
                Si buscas algún producto o servicio, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Descripción detallada de lo que buscas</li>
                <li>Condiciones o especificaciones (nuevo, usado, tamaño, color, etc.)</li>
                <li>Ubicación y disponibilidad para recoger o recibir</li>
                <li>Presupuesto estimado (opcional)</li>
                <li>Medios de contacto y tiempo de respuesta</li>
            </ul>
        </div>
    );
};

export default BuscoFields;
