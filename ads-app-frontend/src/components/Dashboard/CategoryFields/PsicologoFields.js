import React from "react";

const PsicologoFields = () => {
    return (
        <div className="bg-purple-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Psicólogo</h2>
            <p className="text-gray-200 mt-2">
                Si eres psicólogo, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Especialización (clínico, educativo, organizacional, infantil, terapia de pareja)</li>
                <li>Modalidad de atención (presencial, en línea)</li>
                <li>Experiencia y certificaciones</li>
                <li>Disponibilidad de horarios</li>
                <li>Precios por consulta</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PsicologoFields;
