import React from "react";

const ChifaFields = () => {
    return (
        <div className="bg-red-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-red-900">📌 Sugerencias para tu anuncio de Chifa</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces comida chifa, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidades (chaufa, tallarín saltado, kam lu wantán, sopa wantán)</li>
                <li>Opciones de menú (para llevar, delivery, buffet, platos a la carta)</li>
                <li>Horario de atención y ubicación exacta</li>
                <li>Servicios adicionales (reservas, eventos, catering)</li>
                <li>Precios y promociones disponibles</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ChifaFields;
