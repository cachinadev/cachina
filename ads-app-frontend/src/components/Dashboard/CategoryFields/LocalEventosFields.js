import React from "react";

const LocalEventosFields = () => {
    return (
        <div className="bg-pink-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-pink-800">📌 Sugerencias para tu anuncio de Local de Eventos</h2>
            <p className="text-gray-700 mt-2">
                Si alquilas locales para eventos, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Capacidad del local</li>
                <li>Servicios incluidos (sonido, iluminación, catering, seguridad)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios y opciones de reserva</li>
                <li>Fotos y referencias</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default LocalEventosFields;
