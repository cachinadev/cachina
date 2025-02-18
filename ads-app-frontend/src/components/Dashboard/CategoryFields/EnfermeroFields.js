import React from "react";

const EnfermeroFields = () => {
    return (
        <div className="bg-pink-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-pink-700">📌 Sugerencias para tu anuncio de Enfermero/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres enfermero/a, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de servicios ofrecidos (cuidados en casa, hospital, emergencias)</li>
                <li>Experiencia y certificaciones</li>
                <li>Especialidad (pediatría, geriatría, cuidados intensivos)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default EnfermeroFields;
