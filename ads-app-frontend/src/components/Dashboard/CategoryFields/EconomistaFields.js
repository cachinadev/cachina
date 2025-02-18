import React from "react";

const EconomistaFields = () => {
    return (
        <div className="bg-green-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-700">📌 Sugerencias para tu anuncio de Economista</h2>
            <p className="text-gray-700 mt-2">
                Si eres economista, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Áreas de especialización (macroeconomía, finanzas, mercados, asesoría empresarial)</li>
                <li>Servicios ofrecidos (consultoría, análisis de inversión, estudios de mercado)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default EconomistaFields;
