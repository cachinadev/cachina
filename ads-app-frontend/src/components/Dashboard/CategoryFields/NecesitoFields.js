import React from "react";

const NecesitoFields = () => {
    return (
        <div className="bg-yellow-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-900">📌 Sugerencias para tu anuncio de Necesito</h2>
            <p className="text-gray-700 mt-2">
                Si buscas algo específico, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Detalles de lo que buscas</li>
                <li>Condiciones o requisitos específicos</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precio o presupuesto disponible</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default NecesitoFields;
