import React from "react";

const QuimicoFields = () => {
    return (
        <div className="bg-gray-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Químico</h2>
            <p className="text-gray-200 mt-2">
                Si eres químico, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Especialización (industrial, farmacéutico, bioquímico, ambiental)</li>
                <li>Experiencia en laboratorios o industrias</li>
                <li>Servicios ofrecidos (análisis químicos, formulación, consultoría)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default QuimicoFields;
