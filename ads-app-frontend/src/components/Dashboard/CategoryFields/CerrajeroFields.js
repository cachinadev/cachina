import React from "react";

const CerrajeroFields = () => {
    return (
        <div className="bg-gray-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-800">📌 Sugerencias para tu anuncio de Cerrajero</h2>
            <p className="text-gray-700 mt-2">
                Si eres cerrajero y ofreces servicios, te recomendamos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Servicios ofrecidos (apertura de puertas, duplicado de llaves, reparación de cerraduras)</li>
                <li>Disponibilidad (24/7, emergencias, horarios específicos)</li>
                <li>Ubicación y zonas de cobertura</li>
                <li>Medios de contacto y redes sociales</li>
            </ul>
        </div>
    );
};

export default CerrajeroFields;
