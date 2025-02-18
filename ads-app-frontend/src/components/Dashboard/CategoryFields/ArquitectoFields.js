import React from "react";

const ArquitectoFields = () => {
    return (
        <div className="bg-blue-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-700">📌 Sugerencias para tu anuncio de Arquitecto</h2>
            <p className="text-gray-700 mt-2">
                Si eres arquitecto y ofreces tus servicios, te recomendamos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidad (diseño de interiores, urbanismo, residencial, comercial, etc.)</li>
                <li>Proyectos realizados o portafolio</li>
                <li>Software y herramientas que utilizas</li>
                <li>Disponibilidad para proyectos y ubicación geográfica</li>
                <li>Experiencia y referencias profesionales</li>
            </ul>
        </div>
    );
};

export default ArquitectoFields;
