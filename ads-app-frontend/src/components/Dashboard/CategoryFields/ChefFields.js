import React from "react";

const ChefFields = () => {
    return (
        <div className="bg-orange-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-700">📌 Sugerencias para tu anuncio de Chef</h2>
            <p className="text-gray-700 mt-2">
                Si eres chef y ofreces servicios, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de cocina en la que te especializas</li>
                <li>Experiencia en restaurantes o eventos</li>
                <li>Disponibilidad para servicios privados</li>
                <li>Menús o platos destacados</li>
                <li>Medios de contacto y redes sociales</li>
            </ul>
        </div>
    );
};

export default ChefFields;
