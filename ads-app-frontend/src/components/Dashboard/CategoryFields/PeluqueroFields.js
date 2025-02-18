import React from "react";

const PeluqueroFields = () => {
    return (
        <div className="bg-pink-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Peluquero</h2>
            <p className="text-gray-200 mt-2">
                Si eres peluquero, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipos de cortes y estilos ofrecidos</li>
                <li>Servicios adicionales (tinte, alisado, barbería)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios y promociones</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PeluqueroFields;
