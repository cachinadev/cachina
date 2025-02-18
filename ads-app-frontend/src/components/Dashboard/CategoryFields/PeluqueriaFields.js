import React from "react";

const PeluqueriaFields = () => {
    return (
        <div className="bg-pink-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Peluquería</h2>
            <p className="text-gray-200 mt-2">
                Si tienes una peluquería, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Servicios disponibles (cortes, tintes, tratamientos)</li>
                <li>Horarios de atención</li>
                <li>Precios y promociones</li>
                <li>Ubicación y contacto</li>
            </ul>
        </div>
    );
};

export default PeluqueriaFields;
