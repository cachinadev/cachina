import React from "react";

const BarcosFields = () => {
    return (
        <div className="bg-blue-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-700">📌 Sugerencias para tu anuncio de Barcos</h2>
            <p className="text-gray-700 mt-2">
                Si vendes, alquilas o realizas mantenimiento de barcos, te recomendamos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de barco (pesquero, recreativo, velero, yate, etc.)</li>
                <li>Dimensiones y capacidad</li>
                <li>Estado del barco (nuevo, usado, reparado)</li>
                <li>Ubicación y disponibilidad para entrega o inspección</li>
                <li>Precio y opciones de pago</li>
            </ul>
        </div>
    );
};

export default BarcosFields;
