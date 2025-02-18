import React from "react";

const FisicoFields = () => {
    return (
        <div className="bg-blue-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-800">📌 Sugerencias para tu anuncio de Físico/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres físico/a, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialización (mecánica cuántica, termodinámica, astrofísica, etc.)</li>
                <li>Servicios ofrecidos (clases, asesoramiento científico, conferencias)</li>
                <li>Experiencia y certificaciones</li>
                <li>Modalidad (presencial o en línea)</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FisicoFields;
