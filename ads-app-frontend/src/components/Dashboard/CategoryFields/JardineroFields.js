import React from "react";

const JardineroFields = () => {
    return (
        <div className="bg-green-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Jardinero</h2>
            <p className="text-gray-200 mt-2">
                Si eres jardinero, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Servicios que ofreces (mantenimiento, diseño de jardines, poda, etc.)</li>
                <li>Materiales y herramientas que usas</li>
                <li>Disponibilidad horaria</li>
                <li>Ubicación y zonas de cobertura</li>
                <li>Contacto para cotizaciones</li>
            </ul>
        </div>
    );
};

export default JardineroFields;
