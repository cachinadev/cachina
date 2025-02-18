import React from "react";

const SecretariaFields = () => {
    return (
        <div className="bg-blue-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Secretaria</h2>
            <p className="text-gray-200 mt-2">
                Si buscas empleo como secretaria, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Experiencia en oficinas o empresas</li>
                <li>Habilidades en administración y organización</li>
                <li>Conocimientos en software de oficina</li>
                <li>Disponibilidad de horarios</li>
                <li>Ubicación y posibilidad de trabajo remoto</li>
            </ul>
        </div>
    );
};

export default SecretariaFields;
