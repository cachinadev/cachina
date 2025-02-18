import React from "react";

const MedicoCirujanoFields = () => {
    return (
        <div className="bg-red-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Médico Cirujano</h2>
            <p className="text-gray-100 mt-2">
                Si eres médico cirujano, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-200 mt-2">
                <li>Especialización y años de experiencia</li>
                <li>Clínicas y hospitales donde atiendes</li>
                <li>Consultas y procedimientos que realizas</li>
                <li>Horarios de atención</li>
                <li>Precios y seguros médicos aceptados</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default MedicoCirujanoFields;
