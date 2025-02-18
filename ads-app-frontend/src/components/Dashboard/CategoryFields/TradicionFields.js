import React from "react";

const TradicionFields = () => {
    return (
        <div className="bg-green-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Tradición</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces servicios o productos relacionados con la tradición, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de tradición (festividades, danzas, gastronomía, artesanías, etc.)</li>
                <li>Historia y significado de la tradición</li>
                <li>Disponibilidad y ubicaciones</li>
                <li>Contacto para reservas o pedidos</li>
            </ul>
        </div>
    );
};

export default TradicionFields;
