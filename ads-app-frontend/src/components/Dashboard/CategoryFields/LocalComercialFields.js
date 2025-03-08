import React from "react";

const LocalComercialFields = () => {
    return (
        <div className="bg-gray-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-900">📌 Sugerencias para tu anuncio de Local Comercial</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces un local comercial en venta o alquiler, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Ubicación exacta y metros cuadrados del local</li>
                <li>Tipo de negocio recomendado para el espacio</li>
                <li>Servicios disponibles (agua, luz, internet, estacionamiento)</li>
                <li>Condiciones del alquiler o venta</li>
                <li>Precio y formas de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default LocalComercialFields;
