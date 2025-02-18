import React from "react";

const EscritorFields = () => {
    return (
        <div className="bg-gray-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-800">📌 Sugerencias para tu anuncio de Escritor/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres escritor/a, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de escritura (literaria, técnica, periodística, creativa)</li>
                <li>Experiencia y portafolio</li>
                <li>Géneros en los que trabajas</li>
                <li>Servicios ofrecidos (redacción, corrección, asesoría)</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default EscritorFields;
