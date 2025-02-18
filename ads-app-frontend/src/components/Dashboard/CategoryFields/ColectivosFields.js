import React from "react";

const ColectivosFields = () => {
    return (
        <div className="bg-yellow-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Colectivos</h2>
            <p className="text-gray-200 mt-2">
                Si brindas transporte colectivo, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Ruta y frecuencia del servicio</li>
                <li>Horarios de salida</li>
                <li>Capacidad y condiciones del vehículo</li>
                <li>Tarifas y promociones</li>
                <li>Información de contacto</li>
            </ul>
        </div>
    );
};

export default ColectivosFields;
