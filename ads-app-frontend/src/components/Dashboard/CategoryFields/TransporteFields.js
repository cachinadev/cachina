import React from "react";

const TransporteFields = () => {
    return (
        <div className="bg-green-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-900">📌 Sugerencias para tu anuncio de Transporte</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de transporte, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de transporte ofrecido (carga, pasajeros, mudanzas, etc.)</li>
                <li>Zonas de cobertura</li>
                <li>Tarifas y disponibilidad</li>
                <li>Flota de vehículos disponible</li>
                <li>Servicios adicionales (seguros, envíos urgentes, etc.)</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default TransporteFields;
