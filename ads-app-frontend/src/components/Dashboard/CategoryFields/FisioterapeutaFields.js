import React from "react";

const FisioterapeutaFields = () => {
    return (
        <div className="bg-green-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-800">📌 Sugerencias para tu anuncio de Fisioterapeuta</h2>
            <p className="text-gray-700 mt-2">
                Si eres fisioterapeuta, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialización (deportiva, neurológica, pediátrica, etc.)</li>
                <li>Servicios ofrecidos (rehabilitación, masajes terapéuticos, ejercicios guiados)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Modalidad (a domicilio, clínica, en línea)</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FisioterapeutaFields;
