import React from "react";

const BarberoFields = () => {
    return (
        <div className="bg-red-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-red-700">📌 Sugerencias para tu anuncio de Barbero</h2>
            <p className="text-gray-700 mt-2">
                Si eres barbero y deseas anunciar tu servicio, te recomendamos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de cortes y servicios ofrecidos</li>
                <li>Experiencia y certificaciones</li>
                <li>Horarios de atención y ubicación</li>
                <li>Precios y paquetes disponibles</li>
                <li>Fotos de tu trabajo y opiniones de clientes</li>
            </ul>
        </div>
    );
};

export default BarberoFields;
