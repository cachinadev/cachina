import React from "react";

const ServiciosFields = () => {
    return (
        <div className="bg-green-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Servicios</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces un servicio en general, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de servicio que ofreces</li>
                <li>Experiencia y referencias</li>
                <li>Disponibilidad de horarios</li>
                <li>Ubicación o zonas de cobertura</li>
                <li>Precios o cotizaciones</li>
            </ul>
        </div>
    );
};

export default ServiciosFields;
