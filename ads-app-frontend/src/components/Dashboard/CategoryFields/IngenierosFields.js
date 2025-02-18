import React from "react";

const IngenierosFields = () => {
    return (
        <div className="bg-indigo-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-indigo-800">📌 Sugerencias para tu anuncio de Ingeniero/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres ingeniero/a, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialización (civil, eléctrica, mecánica, informática, etc.)</li>
                <li>Servicios ofrecidos</li>
                <li>Proyectos en los que has trabajado</li>
                <li>Certificaciones y experiencia</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default IngenierosFields;
