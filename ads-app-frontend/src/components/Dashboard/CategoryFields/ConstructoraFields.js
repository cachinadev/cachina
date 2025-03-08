import React from "react";

const ConstructoraFields = () => {
    return (
        <div className="bg-gray-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-900">📌 Sugerencias para tu anuncio de Constructora</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de construcción, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de construcciones (residencial, comercial, industrial, remodelaciones)</li>
                <li>Servicios adicionales (arquitectura, diseño, urbanismo, ingeniería civil)</li>
                <li>Ubicación y zonas de trabajo</li>
                <li>Certificaciones y experiencia en proyectos</li>
                <li>Precios y disponibilidad para cotizaciones</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ConstructoraFields;
