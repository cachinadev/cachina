import React from "react";

const LavanderasFields = () => {
    return (
        <div className="bg-blue-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-800">📌 Sugerencias para tu anuncio de Lavandería</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de lavandería, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Servicios (lavado en seco, planchado, tintorería)</li>
                <li>Tipos de prendas que puedes tratar</li>
                <li>Tiempo de entrega y precios</li>
                <li>Ubicación y disponibilidad</li>
                <li>Promociones o descuentos</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default LavanderasFields;
