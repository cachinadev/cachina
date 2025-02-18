import React from "react";

const VeterinariaFields = () => {
    return (
        <div className="bg-brown-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Veterinaria</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces servicios veterinarios, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Servicios disponibles (consultas, cirugías, vacunas)</li>
                <li>Horarios de atención</li>
                <li>Especialidades y experiencia</li>
                <li>Ubicación y contacto</li>
            </ul>
        </div>
    );
};

export default VeterinariaFields;
