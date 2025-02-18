import React from "react";

const FilosofoFields = () => {
    return (
        <div className="bg-gray-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-800">📌 Sugerencias para tu anuncio de Filósofo/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres filósofo/a, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Áreas de estudio (ética, lógica, metafísica, filosofía política)</li>
                <li>Servicios ofrecidos (clases, conferencias, asesoramiento académico)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FilosofoFields;
