import React from "react";

const PeonCampoFields = () => {
    return (
        <div className="bg-green-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Peón de Campo</h2>
            <p className="text-gray-200 mt-2">
                Si trabajas como peón de campo, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de trabajo agrícola que realizas (siembra, cosecha, riego)</li>
                <li>Experiencia en el campo</li>
                <li>Disponibilidad de horarios</li>
                <li>Ubicación y zonas donde trabajas</li>
                <li>Condiciones de trabajo (jornal, pago por hectárea, etc.)</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PeonCampoFields;
