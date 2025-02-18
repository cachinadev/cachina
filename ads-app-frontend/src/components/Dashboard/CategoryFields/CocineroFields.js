import React from "react";

const CocineroFields = () => {
    return (
        <div className="bg-orange-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-800">📌 Sugerencias para tu anuncio de Cocinero</h2>
            <p className="text-gray-700 mt-2">
                Si eres cocinero y buscas empleo o clientes, incluye:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de cocina en la que te especializas</li>
                <li>Experiencia en restaurantes o eventos</li>
                <li>Servicios adicionales como catering o comida a domicilio</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default CocineroFields;
