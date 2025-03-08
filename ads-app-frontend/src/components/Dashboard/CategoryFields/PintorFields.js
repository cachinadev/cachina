import React from "react";

const PintorFields = () => {
    return (
        <div className="bg-red-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-red-900">📌 Sugerencias para tu anuncio de Pintor</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de pintura, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de pintura que aplicas (residencial, industrial, artística, automotriz, etc.)</li>
                <li>Materiales y técnicas utilizadas</li>
                <li>Experiencia y certificaciones</li>
                <li>Presupuestos y precios</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PintorFields;
