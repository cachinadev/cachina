import React from "react";

const DisenadorModaFields = () => {
    return (
        <div className="bg-purple-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Diseñador de Moda</h2>
            <p className="text-gray-200 mt-2">
                Si eres diseñador de moda y deseas promocionar tus servicios o productos, te recomendamos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Especialidad (Alta costura, ropa casual, deportiva, vestidos de gala, etc.)</li>
                <li>Servicios ofrecidos (diseño personalizado, confección, asesoría de imagen, etc.)</li>
                <li>Materiales y telas utilizadas</li>
                <li>Ejemplos de trabajos anteriores o portafolio</li>
                <li>Ubicación del taller o disponibilidad para envíos</li>
                <li>Precios o cotizaciones</li>
                <li>Contacto para consultas y pedidos</li>
            </ul>
        </div>
    );
};

export default DisenadorModaFields;
