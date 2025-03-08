import React from "react";

const ComidaSaludableFields = () => {
    return (
        <div className="bg-blue-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-900">📌 Sugerencias para tu anuncio de Comida Saludable</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces comida saludable, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de comidas (vegana, vegetariana, sin gluten, orgánica, keto, paleo)</li>
                <li>Opciones de menú (platos preparados, ingredientes frescos, planes nutricionales)</li>
                <li>Ubicación y opciones de entrega (delivery, pickup, restaurante)</li>
                <li>Beneficios nutricionales y calorías por porción</li>
                <li>Precios y paquetes promocionales</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ComidaSaludableFields;
