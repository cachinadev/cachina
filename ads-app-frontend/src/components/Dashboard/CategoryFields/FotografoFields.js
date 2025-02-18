import React from "react";

const FotografoFields = () => {
    return (
        <div className="bg-yellow-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-800">📌 Sugerencias para tu anuncio de Fotógrafo/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres fotógrafo/a, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialización (bodas, retratos, productos, eventos, paisajes)</li>
                <li>Ejemplos de trabajos anteriores o portafolio</li>
                <li>Ubicación y disponibilidad</li>
                <li>Tarifas o paquetes de servicios</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FotografoFields;
