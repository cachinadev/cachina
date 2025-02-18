import React from "react";

const AlquilerTernoVestidosFields = () => {
    return (
        <div className="bg-purple-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Alquiler de Ternos y Vestidos</h2>
            <p className="text-gray-200 mt-2">
                Si alquilas ternos y vestidos, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipos de prendas y estilos</li>
                <li>Tallas disponibles</li>
                <li>Condiciones de alquiler y devolución</li>
                <li>Precios y paquetes</li>
                <li>Contacto para reservaciones</li>
            </ul>
        </div>
    );
};

export default AlquilerTernoVestidosFields;
