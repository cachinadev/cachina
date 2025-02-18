import React from "react";

const RestauranteFields = () => {
    return (
        <div className="bg-red-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Restaurante</h2>
            <p className="text-gray-200 mt-2">
                Si tienes un restaurante, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de comida que ofreces</li>
                <li>Horarios de atención</li>
                <li>Ubicación y servicios (delivery, reservas, etc.)</li>
                <li>Precios y promociones</li>
            </ul>
        </div>
    );
};

export default RestauranteFields;
