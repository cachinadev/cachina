import React from "react";

const TransportistasFields = () => {
    return (
        <div className="bg-orange-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Transportista</h2>
            <p className="text-gray-200 mt-2">
                Si eres transportista, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de servicio que ofreces (personas, carga, mudanzas, etc.)</li>
                <li>Vehículos disponibles</li>
                <li>Rutas y cobertura</li>
                <li>Horario de disponibilidad</li>
                <li>Contacto y precios</li>
            </ul>
        </div>
    );
};

export default TransportistasFields;
