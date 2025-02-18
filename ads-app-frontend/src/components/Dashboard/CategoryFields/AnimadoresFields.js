import React from "react";

const AnimadoresFields = () => {
    return (
        <div className="bg-yellow-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-700">📌 Sugerencias para tu anuncio de Animadores</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de animación para eventos, menciona:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de eventos atendidos (cumpleaños, bodas, fiestas infantiles, etc.)</li>
                <li>Actividades y dinámicas que realizas</li>
                <li>Duración del servicio y disponibilidad</li>
                <li>Precios y paquetes disponibles</li>
                <li>Fotos o videos de eventos anteriores</li>
            </ul>
        </div>
    );
};

export default AnimadoresFields;
