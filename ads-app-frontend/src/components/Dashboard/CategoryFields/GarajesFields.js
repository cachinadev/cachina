import React from "react";

const GarajesFields = () => {
    return (
        <div className="bg-gray-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-800">📌 Sugerencias para tu anuncio de Garajes</h2>
            <p className="text-gray-700 mt-2">
                Si alquilas o vendes garajes, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Ubicación exacta</li>
                <li>Dimensiones y capacidad</li>
                <li>Servicios adicionales (seguridad, techado, acceso 24h)</li>
                <li>Precios y formas de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default GarajesFields;
