import React from "react";

const ApicultorFields = () => {
    return (
        <div className="bg-yellow-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-800">📌 Sugerencias para tu anuncio de Apicultor</h2>
            <p className="text-gray-700 mt-2">
                Si eres apicultor y ofreces productos o servicios relacionados con la apicultura, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de productos que vendes (miel, cera, propóleo, jalea real)</li>
                <li>Servicios adicionales (retiro de enjambres, formación en apicultura, alquiler de colmenas)</li>
                <li>Ubicación y zonas de cobertura</li>
                <li>Certificaciones y métodos de producción</li>
                <li>Precios y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ApicultorFields;
