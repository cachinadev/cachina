import React from "react";

const DonacionesFields = () => {
    return (
        <div className="bg-red-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-red-700">📌 Sugerencias para tu anuncio de Donaciones</h2>
            <p className="text-gray-700 mt-2">
                Si estás recibiendo u ofreciendo donaciones, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de donación (ropa, alimentos, dinero, tiempo, servicios)</li>
                <li>Propósito y destino de la donación</li>
                <li>Ubicación y método de entrega o recolección</li>
                <li>Organización o persona beneficiaria</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default DonacionesFields;
