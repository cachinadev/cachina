import React from "react";

const CientificosFields = () => {
    return (
        <div className="bg-indigo-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-indigo-700">📌 Sugerencias para tu anuncio de Científico</h2>
            <p className="text-gray-700 mt-2">
                Si eres científico y buscas oportunidades, te recomendamos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Campo de investigación (biología, química, física, etc.)</li>
                <li>Experiencia y publicaciones científicas</li>
                <li>Proyectos en los que has trabajado</li>
                <li>Disponibilidad para asesorías o consultorías</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default CientificosFields;
