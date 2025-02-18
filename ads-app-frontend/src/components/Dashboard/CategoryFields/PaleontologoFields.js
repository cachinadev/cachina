import React from "react";

const PaleontologoFields = () => {
    return (
        <div className="bg-brown-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-200">📌 Sugerencias para tu anuncio de Paleontólogo</h2>
            <p className="text-gray-200 mt-2">
                Si eres paleontólogo, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Especialización (fósiles, dinosaurios, geología)</li>
                <li>Proyectos y experiencia en excavaciones</li>
                <li>Ubicación y disponibilidad</li>
                <li>Servicios o asesorías ofrecidas</li>
                <li>Precios y condiciones</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PaleontologoFields;
