import React from "react";

const BienesRaicesFields = () => {
    return (
        <div className="bg-yellow-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-700">📌 Sugerencias para tu anuncio de Bienes Raíces</h2>
            <p className="text-gray-700 mt-2">
                Si deseas vender, alquilar o promocionar inmuebles, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de propiedad (casa, departamento, terreno, oficina, etc.)</li>
                <li>Ubicación exacta y características principales</li>
                <li>Dimensiones y distribución de los espacios</li>
                <li>Fotos de calidad del inmueble</li>
                <li>Precio y opciones de financiamiento</li>
            </ul>
        </div>
    );
};

export default BienesRaicesFields;
