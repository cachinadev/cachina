import React from "react";

const SaludFields = () => {
    return (
        <div className="bg-green-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Servicios de Salud</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces servicios de salud, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de servicio médico (general, especializado, terapias alternativas)</li>
                <li>Modalidad de atención (presencial, a domicilio, en línea)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y horarios</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default SaludFields;
