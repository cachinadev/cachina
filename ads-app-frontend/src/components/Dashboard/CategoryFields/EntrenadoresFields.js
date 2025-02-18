import React from "react";

const EntrenadoresFields = () => {
    return (
        <div className="bg-green-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-800">📌 Sugerencias para tu anuncio de Entrenador/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres entrenador/a, considera incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialización (fitness, deportes, rehabilitación, coaching personal)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y disponibilidad</li>
                <li>Programas o paquetes disponibles</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default EntrenadoresFields;
