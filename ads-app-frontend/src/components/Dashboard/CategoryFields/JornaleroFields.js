import React from "react";

const JornaleroFields = () => {
    return (
        <div className="bg-brown-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-brown-900">📌 Sugerencias para tu anuncio de Jornalero/a</h2>
            <p className="text-gray-700 mt-2">
                Si trabajas como jornalero/a, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de trabajo que realizas</li>
                <li>Experiencia previa</li>
                <li>Ubicación y disponibilidad</li>
                <li>Modalidad de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default JornaleroFields;
