import React from "react";

const FontaneroFields = () => {
    return (
        <div className="bg-gray-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-800">📌 Sugerencias para tu anuncio de Fontanero/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres fontanero/a, considera incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de servicios ofrecidos (reparaciones, instalaciones, mantenimientos)</li>
                <li>Especialización (hogar, edificios comerciales, industriales)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios aproximados</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FontaneroFields;
