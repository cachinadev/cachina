import React from "react";

const InstructorYogaFields = () => {
    return (
        <div className="bg-pink-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-pink-800">📌 Sugerencias para tu anuncio de Instructor de Yoga</h2>
            <p className="text-gray-700 mt-2">
                Si eres instructor/a de yoga, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de yoga que enseñas</li>
                <li>Modalidad (presencial, en línea, personalizada)</li>
                <li>Duración y costos de las clases</li>
                <li>Certificaciones y experiencia</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default InstructorYogaFields;
