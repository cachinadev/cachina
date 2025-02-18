import React from "react";

const DiseñadorGraficoFields = () => {
    return (
        <div className="bg-yellow-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-900">📌 Sugerencias para tu anuncio de Diseñador Gráfico</h2>
            <p className="text-gray-700 mt-2">
                Si eres diseñador gráfico, recomendamos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Servicios ofrecidos (branding, ilustración, diseño web, publicidad)</li>
                <li>Programas y herramientas que manejas</li>
                <li>Portafolio o ejemplos de trabajos previos</li>
                <li>Disponibilidad y ubicación</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default DiseñadorGraficoFields;
