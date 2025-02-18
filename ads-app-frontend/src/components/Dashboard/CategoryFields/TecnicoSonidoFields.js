import React from "react";

const TecnicoSonidoFields = () => {
    return (
        <div className="bg-red-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Técnico de Sonido</h2>
            <p className="text-gray-200 mt-2">
                Si trabajas como técnico de sonido, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Servicios (grabación, masterización, mezcla, instalación de equipos)</li>
                <li>Equipos y software que usas</li>
                <li>Experiencia en eventos o estudios de grabación</li>
                <li>Disponibilidad de horarios</li>
                <li>Contacto para proyectos</li>
            </ul>
        </div>
    );
};

export default TecnicoSonidoFields;
