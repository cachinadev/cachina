import React from "react";

const PintoresFields = () => {
    return (
        <div className="bg-yellow-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Pintor</h2>
            <p className="text-gray-200 mt-2">
                Si eres pintor, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de pintura en la que te especializas (interiores, exteriores, murales, automotriz)</li>
                <li>Materiales y técnicas que usas</li>
                <li>Experiencia y referencias</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios y cotizaciones</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PintoresFields;
