import React from "react";

const FarmacologoFields = () => {
    return (
        <div className="bg-blue-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-800">📌 Sugerencias para tu anuncio de Farmacólogo/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres farmacólogo/a, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialización (farmacia hospitalaria, investigación, bioquímica)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y disponibilidad</li>
                <li>Asesoramiento en medicamentos y tratamientos</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FarmacologoFields;
