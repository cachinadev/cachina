import React from "react";

const FruteraFields = () => {
    return (
        <div className="bg-orange-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-800">📌 Sugerencias para tu anuncio de Frutera</h2>
            <p className="text-gray-700 mt-2">
                Si vendes frutas, te recomendamos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de frutas disponibles</li>
                <li>Origen y calidad del producto</li>
                <li>Precios y opciones de compra al por mayor o menor</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FruteraFields;
