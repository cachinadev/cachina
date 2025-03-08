import React from "react";

const RepartidorComidaFields = () => {
    return (
        <div className="bg-green-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-900">📌 Sugerencias para tu anuncio de Repartidor de Comida</h2>
            <p className="text-gray-700 mt-2">
                Si trabajas como repartidor de comida o tienes un servicio de delivery, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Zonas de reparto y horarios disponibles</li>
                <li>Tiempo estimado de entrega</li>
                <li>Medios de transporte utilizados (moto, bicicleta, auto, etc.)</li>
                <li>Precios y tarifas de envío</li>
                <li>Formas de pago aceptadas</li>
                <li>Medios de contacto y reservas</li>
            </ul>
        </div>
    );
};

export default RepartidorComidaFields;
