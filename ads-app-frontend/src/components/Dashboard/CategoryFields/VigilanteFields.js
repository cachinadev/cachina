import React from "react";

const VigilanteFields = () => {
    return (
        <div className="bg-black p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Vigilante</h2>
            <p className="text-gray-200 mt-2">
                Si eres vigilante, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Experiencia en seguridad</li>
                <li>Tipo de vigilancia (residencial, empresarial, eventos, etc.)</li>
                <li>Disponibilidad horaria</li>
                <li>Certificaciones o cursos de seguridad</li>
                <li>Contacto para contrataciones</li>
            </ul>
        </div>
    );
};

export default VigilanteFields;
