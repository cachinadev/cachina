import React from "react";

const MudanzasFields = () => {
    return (
        <div className="bg-blue-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-900">📌 Sugerencias para tu anuncio de Mudanzas</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de mudanza, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de mudanza (hogar, oficina, larga distancia)</li>
                <li>Vehículos y equipo disponible</li>
                <li>Opciones de embalaje y almacenamiento</li>
                <li>Ubicación y cobertura de servicio</li>
                <li>Precios y formas de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default MudanzasFields;
