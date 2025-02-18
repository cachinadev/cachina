import React from "react";

const OtrosFields = () => {
    return (
        <div className="bg-gray-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio en la categoría "Otros"</h2>
            <p className="text-gray-100 mt-2">
                Si tu anuncio no encaja en una categoría específica, te sugerimos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-200 mt-2">
                <li>Descripción clara de lo que ofreces o buscas</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios y condiciones</li>
                <li>Medios de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default OtrosFields;
