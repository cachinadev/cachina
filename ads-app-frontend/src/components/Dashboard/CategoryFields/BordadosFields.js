import React from "react";

const BordadoresFields = () => {
    return (
        <div className="bg-green-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Bordador</h2>
            <p className="text-gray-200 mt-2">
                Si eres bordador, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipos de bordados que realizas</li>
                <li>Materiales y técnicas utilizadas</li>
                <li>Tiempo estimado de entrega</li>
                <li>Ejemplos de trabajos previos</li>
                <li>Precios y contacto</li>
            </ul>
        </div>
    );
};

export default BordadoresFields;
