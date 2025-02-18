import React from "react";

const CarpinteroFields = () => {
    return (
        <div className="bg-yellow-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-800">📌 Sugerencias para tu anuncio de Carpintero</h2>
            <p className="text-gray-700 mt-2">
                Si eres carpintero, considera incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de trabajos realizados (muebles, puertas, estructuras, etc.)</li>
                <li>Materiales con los que trabajas</li>
                <li>Ejemplos de trabajos anteriores</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default CarpinteroFields;
