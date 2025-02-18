import React from "react";

const ComidaFields = () => {
    return (
        <div className="bg-red-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Comida</h2>
            <p className="text-gray-200 mt-2">
                Si vendes comida, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de comida que ofreces (casera, rápida, internacional, etc.)</li>
                <li>Horarios de atención</li>
                <li>Servicios adicionales (delivery, catering, etc.)</li>
                <li>Precios y promociones</li>
                <li>Ubicación y contacto</li>
            </ul>
        </div>
    );
};

export default ComidaFields
