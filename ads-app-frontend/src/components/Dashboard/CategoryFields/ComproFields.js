import React from "react";

const ComproFields = () => {
    return (
        <div className="bg-orange-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-900">📌 Sugerencias para tu anuncio de Compras</h2>
            <p className="text-gray-700 mt-2">
                Si buscas comprar productos o servicios, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Descripción clara del producto o servicio que buscas</li>
                <li>Condiciones específicas (nuevo, usado, en oferta, a granel)</li>
                <li>Ubicación y preferencia de entrega</li>
                <li>Rango de precios que estás dispuesto a pagar</li>
                <li>Disponibilidad para contacto y negociación</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ComproFields;
