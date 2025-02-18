import React from "react";

const BibliotecologoFields = () => {
    return (
        <div className="bg-green-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-700">📌 Sugerencias para tu anuncio de Bibliotecólogo</h2>
            <p className="text-gray-700 mt-2">
                Si eres bibliotecólogo y buscas empleo o clientes, considera incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidad en gestión de bibliotecas o archivos</li>
                <li>Experiencia con sistemas de clasificación</li>
                <li>Servicios ofrecidos (organización, digitalización, catalogación)</li>
                <li>Disponibilidad y ubicación</li>
                <li>Portafolio o referencias profesionales</li>
            </ul>
        </div>
    );
};

export default BibliotecologoFields;
