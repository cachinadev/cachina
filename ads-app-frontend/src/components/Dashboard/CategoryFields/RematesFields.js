import React from "react";

const RematesFields = () => {
    return (
        <div className="bg-blue-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Remates</h2>
            <p className="text-gray-200 mt-2">
                Si organizas o participas en remates, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de bienes en remate (vehículos, inmuebles, maquinaria, etc.)</li>
                <li>Fechas y ubicaciones de los remates</li>
                <li>Condiciones de compra</li>
                <li>Registro de compradores</li>
                <li>Contacto para consultas</li>
            </ul>
        </div>
    );
};

export default RematesFields;
