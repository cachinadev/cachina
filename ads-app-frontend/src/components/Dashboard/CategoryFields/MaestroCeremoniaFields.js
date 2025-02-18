import React from "react";

const MaestroCeremoniaFields = () => {
    return (
        <div className="bg-orange-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-900">📌 Sugerencias para tu anuncio de Maestro de Ceremonia</h2>
            <p className="text-gray-700 mt-2">
                Si eres maestro/a de ceremonias, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Eventos que cubres (bodas, corporativos, cumpleaños, etc.)</li>
                <li>Idiomas y estilo de presentación</li>
                <li>Experiencia y referencias</li>
                <li>Ubicación y disponibilidad</li>
                <li>Tarifas y métodos de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default MaestroCeremoniaFields;
