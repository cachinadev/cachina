import React from "react";

const NegocioFields = () => {
    return (
        <div className="bg-green-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-900">📌 Sugerencias para tu anuncio de Negocio</h2>
            <p className="text-gray-700 mt-2">
                Si promueves un negocio, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Descripción del negocio y servicios</li>
                <li>Ubicación y horarios de atención</li>
                <li>Precios y promociones</li>
                <li>Medios de pago disponibles</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default NegocioFields;
