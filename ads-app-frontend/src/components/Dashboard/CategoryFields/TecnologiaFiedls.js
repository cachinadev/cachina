import React from "react";

const TecnologiaFields = () => {
    return (
        <div className="bg-blue-900 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Tecnología</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces productos o servicios tecnológicos, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Gama de productos o servicios</li>
                <li>Marcas y modelos disponibles</li>
                <li>Garantía y soporte técnico</li>
                <li>Precios y métodos de pago</li>
                <li>Ubicación y contacto</li>
            </ul>
        </div>
    );
};

export default TecnologiaFields;
