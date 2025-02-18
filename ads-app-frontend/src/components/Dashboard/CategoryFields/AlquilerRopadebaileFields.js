import React from "react";

const AlquilerRopadebaileFields = () => {
    return (
        <div className="bg-red-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Alquiler de Ropa de Baile</h2>
            <p className="text-gray-200 mt-2">
                Si alquilas ropa de baile, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipos de vestuarios disponibles</li>
                <li>Tallas y estilos</li>
                <li>Precios y duración del alquiler</li>
                <li>Condiciones de uso y devolución</li>
                <li>Contacto para consultas</li>
            </ul>
        </div>
    );
};

export default AlquilerRopadebaileFields;
