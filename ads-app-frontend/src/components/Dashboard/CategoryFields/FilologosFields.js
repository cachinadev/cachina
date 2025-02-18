import React from "react";

const FilologosFields = () => {
    return (
        <div className="bg-orange-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-800">📌 Sugerencias para tu anuncio de Filólogo/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres filólogo/a, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidad (lingüística, traducción, enseñanza, literatura)</li>
                <li>Idiomas con los que trabajas</li>
                <li>Experiencia y certificaciones</li>
                <li>Modalidad (presencial o en línea)</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FilologosFields;
