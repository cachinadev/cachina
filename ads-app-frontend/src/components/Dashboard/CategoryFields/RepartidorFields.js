import React from "react";

const RepartidorFields = () => {
    return (
        <div className="bg-yellow-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-900">📌 Sugerencias para tu anuncio de Repartidor</h2>
            <p className="text-gray-700 mt-2">
                Si eres repartidor y transportas documentos, paquetes u otros envíos, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de paquetes o documentos que entregas</li>
                <li>Zonas de cobertura y tiempos de entrega</li>
                <li>Modalidad del servicio (express, programado, nacional, internacional)</li>
                <li>Medios de transporte utilizados</li>
                <li>Tarifas y costos</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default RepartidorFields;
