import React from "react";

const BodegasFields = () => {
    return (
        <div className="bg-yellow-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Bodegas</h2>
            <p className="text-gray-200 mt-2">
                Si tienes una bodega, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Productos principales disponibles</li>
                <li>Horarios de atención</li>
                <li>Ubicación exacta</li>
                <li>Ofertas y promociones</li>
                <li>Contacto para pedidos</li>
            </ul>
        </div>
    );
};

export default BodegasFields;
