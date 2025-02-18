import React from "react";

const NutricionistaFields = () => {
    return (
        <div className="bg-pink-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-pink-900">📌 Sugerencias para tu anuncio de Nutricionista</h2>
            <p className="text-gray-700 mt-2">
                Si eres nutricionista, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialización (deportiva, clínica, infantil)</li>
                <li>Servicios ofrecidos (planes nutricionales, consultas)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios y métodos de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default NutricionistaFields;
