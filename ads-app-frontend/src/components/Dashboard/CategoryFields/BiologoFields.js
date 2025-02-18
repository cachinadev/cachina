import React from "react";

const BiologoFields = () => {
    return (
        <div className="bg-green-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-700">📌 Sugerencias para tu anuncio de Biólogo</h2>
            <p className="text-gray-700 mt-2">
                Si eres biólogo y ofreces servicios o buscas empleo, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialización (microbiología, biotecnología, ecología, etc.)</li>
                <li>Experiencia en investigación, docencia o consultoría</li>
                <li>Servicios que ofreces (análisis ambientales, estudios de biodiversidad, etc.)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Certificaciones o publicaciones relevantes</li>
            </ul>
        </div>
    );
};

export default BiologoFields;
