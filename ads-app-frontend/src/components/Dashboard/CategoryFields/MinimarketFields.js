import React from "react";

const MinimarketFields = () => {
    return (
        <div className="bg-green-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Minimarket</h2>
            <p className="text-gray-200 mt-2">
                Si tienes un minimarket, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Variedad de productos que ofreces</li>
                <li>Horarios de atención</li>
                <li>Servicios adicionales (delivery, pago con tarjeta, etc.)</li>
                <li>Ubicación y contacto</li>
            </ul>
        </div>
    );
};

export default MinimarketFields;
