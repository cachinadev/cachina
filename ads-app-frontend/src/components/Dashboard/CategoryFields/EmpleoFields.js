import React from "react";

const EmpleoFields = () => {
    return (
        <div className="bg-purple-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-purple-700">📌 Sugerencias para tu anuncio de Oferta de Empleo</h2>
            <p className="text-gray-700 mt-2">
                Si estás ofreciendo un empleo, asegúrate de incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Puesto disponible y descripción del trabajo</li>
                <li>Requisitos y habilidades necesarias</li>
                <li>Ubicación y modalidad (remoto, presencial, híbrido)</li>
                <li>Salario y beneficios</li>
                <li>Cómo postularse</li>
            </ul>
        </div>
    );
};

export default EmpleoFields;
