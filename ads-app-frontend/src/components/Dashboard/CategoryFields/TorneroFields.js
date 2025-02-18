import React from "react";

const TorneroFields = () => {
    return (
        <div className="bg-gray-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Tornero</h2>
            <p className="text-gray-200 mt-2">
                Si eres tornero, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de piezas que fabricas</li>
                <li>Materiales con los que trabajas</li>
                <li>Herramientas y maquinaria disponibles</li>
                <li>Ubicación y disponibilidad</li>
                <li>Contacto para pedidos</li>
            </ul>
        </div>
    );
};

export default TorneroFields;
