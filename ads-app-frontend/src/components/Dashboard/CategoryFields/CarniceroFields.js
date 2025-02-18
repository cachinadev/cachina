import React from "react";

const CarniceroFields = () => {
    return (
        <div className="bg-red-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-red-700">📌 Sugerencias para tu anuncio de Carnicero</h2>
            <p className="text-gray-700 mt-2">
                Si eres carnicero y ofreces productos, te recomendamos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de carne que vendes (res, cerdo, pollo, cordero, etc.)</li>
                <li>Ubicación de la carnicería o servicio de entrega</li>
                <li>Opciones de corte y empaquetado</li>
                <li>Horarios de atención</li>
                <li>Fotos de los productos</li>
            </ul>
        </div>
    );
};

export default CarniceroFields;
