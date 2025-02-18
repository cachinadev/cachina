import React from "react";

const ArtistasFields = () => {
    return (
        <div className="bg-pink-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-pink-700">📌 Sugerencias para tu anuncio de Artista</h2>
            <p className="text-gray-700 mt-2">
                Si eres artista y deseas promocionar tu talento, te sugerimos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de arte que realizas (pintura, escultura, música, teatro, etc.)</li>
                <li>Eventos o exposiciones en las que has participado</li>
                <li>Fotos o videos de tus trabajos</li>
                <li>Servicios ofrecidos (clases, presentaciones, encargos personalizados)</li>
                <li>Redes sociales o página web para mostrar tu portafolio</li>
            </ul>
        </div>
    );
};

export default ArtistasFields;
