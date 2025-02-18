import React from "react";

const VentaFields = () => {
    return (
        <div className="bg-purple-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Venta</h2>
            <p className="text-gray-200 mt-2">
                Si estás vendiendo un producto, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Descripción detallada del producto</li>
                <li>Estado (nuevo/usado)</li>
                <li>Precio y formas de pago</li>
                <li>Ubicación para entrega o envío</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default VentaFields;
