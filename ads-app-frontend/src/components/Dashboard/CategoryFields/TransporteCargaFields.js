import React from "react";

const TransporteCargaFields = () => {
    return (
        <div className="bg-gray-900 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Transporte de Carga</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces transporte de carga, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de carga que transportas</li>
                <li>Capacidad y vehículos disponibles</li>
                <li>Rutas y zonas de cobertura</li>
                <li>Disponibilidad de horarios</li>
                <li>Contacto y tarifas</li>
            </ul>
        </div>
    );
};

export default TransporteCargaFields;
