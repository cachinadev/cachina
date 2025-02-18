import React from "react";

const ExpresosFields = () => {
    return (
        <div className="bg-blue-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Expresos</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces servicio de transporte expreso, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Rutas y destinos disponibles</li>
                <li>Horario de servicio</li>
                <li>Capacidad de pasajeros</li>
                <li>Tarifas y descuentos</li>
                <li>Contacto para reservas</li>
            </ul>
        </div>
    );
};

export default ExpresosFields;
