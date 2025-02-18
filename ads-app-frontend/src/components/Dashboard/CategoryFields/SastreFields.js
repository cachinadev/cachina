import React from "react";

const SastreFields = () => {
    return (
        <div className="bg-purple-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Sastre</h2>
            <p className="text-gray-200 mt-2">
                Si eres sastre, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipos de prendas que confeccionas o arreglas</li>
                <li>Materiales con los que trabajas</li>
                <li>Servicios adicionales (bordado, personalización)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios estimados</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default SastreFields;
