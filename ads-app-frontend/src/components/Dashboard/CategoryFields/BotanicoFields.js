import React from "react";

const BotanicoFields = () => {
    return (
        <div className="bg-green-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-800">📌 Sugerencias para tu anuncio de Botánico</h2>
            <p className="text-gray-700 mt-2">
                Si eres botánico y ofreces servicios, considera incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Área de especialización (flora nativa, medicinal, conservación, etc.)</li>
                <li>Servicios ofrecidos (identificación de plantas, asesoría en jardinería, etc.)</li>
                <li>Experiencia en proyectos de investigación o conservación</li>
                <li>Ubicación y disponibilidad</li>
                <li>Contacto y redes sociales</li>
            </ul>
        </div>
    );
};

export default BotanicoFields;
