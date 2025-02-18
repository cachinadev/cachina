import React from "react";

const LocutoresFields = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-300">📌 Sugerencias para tu anuncio de Locutor</h2>
            <p className="text-gray-300 mt-2">
                Si eres locutor/a, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Especialización (radio, eventos, doblaje, comerciales)</li>
                <li>Idiomas y estilos que manejas</li>
                <li>Experiencia y referencias</li>
                <li>Ubicación y disponibilidad</li>
                <li>Tarifas y métodos de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default LocutoresFields;
