import React from "react";

const TradicionesFields = () => {
    return (
        <div className="bg-orange-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-900">📌 Sugerencias para tu anuncio de Tradiciones</h2>
            <p className="text-gray-700 mt-2">
                Si organizas eventos culturales o tradicionales, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Descripción del evento y su significado cultural</li>
                <li>Fecha, hora y ubicación</li>
                <li>Actividades y presentaciones destacadas</li>
                <li>Requisitos de entrada (si aplica)</li>
                <li>Formas de participación</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default TradicionesFields;
