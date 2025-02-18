import React from "react";

const BarrenderoFields = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-700">📌 Sugerencias para tu anuncio de Barrendero</h2>
            <p className="text-gray-700 mt-2">
                Si trabajas como barrendero y buscas oportunidades, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Experiencia en limpieza de calles o espacios públicos</li>
                <li>Disponibilidad horaria y días de trabajo</li>
                <li>Tipo de espacios donde trabajas (calles, mercados, edificios, etc.)</li>
                <li>Ubicación y posibilidad de trasladarte</li>
                <li>Opciones de contratación (por día, semana, mes)</li>
            </ul>
        </div>
    );
};

export default BarrenderoFields;
