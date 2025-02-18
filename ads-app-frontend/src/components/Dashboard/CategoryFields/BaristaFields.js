import React from "react";

const BaristaFields = () => {
    return (
        <div className="bg-brown-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-brown-700">📌 Sugerencias para tu anuncio de Barista</h2>
            <p className="text-gray-700 mt-2">
                Si eres barista y ofreces tus servicios, considera agregar:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidad en cafés (espresso, capuchino, filtrados, arte latte, etc.)</li>
                <li>Experiencia y certificaciones</li>
                <li>Disponibilidad para eventos o locales</li>
                <li>Ubicación y posibilidad de desplazamiento</li>
                <li>Fotos o videos de tu trabajo</li>
            </ul>
        </div>
    );
};

export default BaristaFields;
