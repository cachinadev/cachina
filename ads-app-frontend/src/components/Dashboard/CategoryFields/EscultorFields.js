import React from "react";

const EscultorFields = () => {
    return (
        <div className="bg-yellow-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-800">📌 Sugerencias para tu anuncio de Escultor/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres escultor/a, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Materiales con los que trabajas (mármol, madera, metal, resina, etc.)</li>
                <li>Tipos de esculturas (arte moderno, clásico, figurativo, abstracto)</li>
                <li>Portafolio o ejemplos de trabajos anteriores</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default EscultorFields;
