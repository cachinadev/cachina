import React from "react";

const AlbañilFields = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-700">📌 Sugerencias para tu anuncio de Albañil</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de albañilería, incluye la siguiente información en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de trabajos realizados (construcción, remodelación, acabados, etc.)</li>
                <li>Experiencia y referencias de proyectos anteriores</li>
                <li>Disponibilidad geográfica</li>
                <li>Presupuesto estimado o rango de precios</li>
                <li>Medios de contacto y horarios de atención</li>
            </ul>
        </div>
    );
};

export default AlbañilFields;
