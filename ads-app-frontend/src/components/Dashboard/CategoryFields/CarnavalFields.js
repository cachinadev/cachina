import React from "react";

const CarnavalFields = () => {
    return (
        <div className="bg-red-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-red-900">📌 Sugerencias para tu anuncio de Carnaval</h2>
            <p className="text-gray-700 mt-2">
                Si organizas o participas en eventos de carnaval, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Descripción del evento o servicio</li>
                <li>Fecha, hora y ubicación del carnaval</li>
                <li>Participación de comparsas, danzas o artistas</li>
                <li>Servicios ofrecidos (disfraces, maquillajes, carrozas, etc.)</li>
                <li>Opciones de inscripción o venta de entradas</li>
                <li>Medios de contacto para más información</li>
            </ul>
        </div>
    );
};

export default CarnavalFields;
