import React from "react";

const AlquilerSonidoFields = () => {
    return (
        <div className="bg-red-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-red-800">📌 Sugerencias para tu anuncio de Alquiler de Sonido</h2>
            <p className="text-gray-700 mt-2">
                Si alquilas equipos de sonido para eventos, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de equipos disponibles (parlantes, micrófonos, consolas, subwoofers, monitores)</li>
                <li>Capacidad de sonido según el evento</li>
                <li>Servicios adicionales (DJ, técnico de sonido, montaje y desmontaje)</li>
                <li>Experiencia en eventos (conciertos, fiestas, conferencias, bodas)</li>
                <li>Precios y paquetes de alquiler</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default AlquilerSonidoFields;
