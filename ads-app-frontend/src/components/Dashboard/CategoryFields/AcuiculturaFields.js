import React from "react";

const AcuiculturaFields = () => {
    return (
        <div className="bg-green-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-700">📌 Sugerencias para tu anuncio de Acuicultura</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces productos o servicios relacionados con la acuicultura, menciona:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de especies cultivadas (peces, mariscos, etc.)</li>
                <li>Ubicación y tipo de criadero (estanques, jaulas, etc.)</li>
                <li>Calidad del agua y métodos de alimentación</li>
                <li>Disponibilidad de venta y entrega</li>
                <li>Certificaciones sanitarias y permisos</li>
            </ul>
        </div>
    );
};

export default AcuiculturaFields;
