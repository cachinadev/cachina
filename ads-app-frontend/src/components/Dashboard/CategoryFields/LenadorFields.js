import React from "react";

const LenadorFields = () => {
    return (
        <div className="bg-brown-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-brown-900">📌 Sugerencias para tu anuncio de Leñador</h2>
            <p className="text-gray-700 mt-2">
                Si trabajas como leñador o vendes madera, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de madera que cortas y vendes</li>
                <li>Servicios adicionales (transporte, corte personalizado, leña para chimeneas)</li>
                <li>Ubicación y áreas de cobertura</li>
                <li>Normativas y permisos ambientales cumplidos</li>
                <li>Precios y condiciones de compra</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default LenadorFields;
