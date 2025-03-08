import React from "react";

const AlmacenFields = () => {
    return (
        <div className="bg-blue-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-800">📌 Sugerencias para tu anuncio de Almacén</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de almacenamiento o renta de almacenes, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Ubicación exacta y accesibilidad</li>
                <li>Dimensiones y capacidad del almacén</li>
                <li>Servicios adicionales (seguridad, climatización, vigilancia)</li>
                <li>Disponibilidad y condiciones de alquiler</li>
                <li>Precios y opciones de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default AlmacenFields;
