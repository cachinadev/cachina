import React from "react";

const OficinaFields = () => {
    return (
        <div className="bg-gray-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-900">📌 Sugerencias para tu anuncio de Oficina</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces una oficina en alquiler o venta, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Ubicación y tamaño de la oficina</li>
                <li>Servicios incluidos (internet, mobiliario, limpieza, seguridad)</li>
                <li>Condiciones del contrato de alquiler o compra</li>
                <li>Precio y formas de pago</li>
                <li>Accesibilidad y transporte cercano</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default OficinaFields;
