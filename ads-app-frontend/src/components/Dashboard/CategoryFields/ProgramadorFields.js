import React from "react";

const ProgramadorFields = () => {
    return (
        <div className="bg-blue-800 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Programador</h2>
            <p className="text-gray-200 mt-2">
                Si eres programador, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Lenguajes de programación dominados</li>
                <li>Tipo de desarrollo (web, móvil, software)</li>
                <li>Experiencia y proyectos anteriores</li>
                <li>Tarifas y contacto</li>
            </ul>
        </div>
    );
};

export default ProgramadorFields;
