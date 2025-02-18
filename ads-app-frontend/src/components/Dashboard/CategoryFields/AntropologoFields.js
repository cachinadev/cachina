import React from "react";

const AntropologoFields = () => {
    return (
        <div className="bg-indigo-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-indigo-700">📌 Sugerencias para tu anuncio de Antropólogo</h2>
            <p className="text-gray-700 mt-2">
                Si brindas servicios de antropología o investigación, incluye:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidad (cultural, social, arqueológica, lingüística, etc.)</li>
                <li>Experiencia y trabajos previos</li>
                <li>Servicios ofrecidos (consultoría, investigación, estudios de campo, etc.)</li>
                <li>Disponibilidad para proyectos nacionales o internacionales</li>
                <li>Publicaciones o referencias de investigaciones anteriores</li>
            </ul>
        </div>
    );
};

export default AntropologoFields;
