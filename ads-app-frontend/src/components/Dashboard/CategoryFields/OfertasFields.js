import React from "react";

const OfertasFields = () => {
    return (
        <div className="bg-purple-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-purple-900">📌 Sugerencias para tu anuncio de Ofertas</h2>
            <p className="text-gray-700 mt-2">
                Si estás promocionando una oferta especial o descuentos en productos/servicios, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de producto o servicio en oferta</li>
                <li>Duración de la promoción (fechas de inicio y fin)</li>
                <li>Descuento o beneficio especial</li>
                <li>Condiciones de la oferta (compra mínima, restricciones, etc.)</li>
                <li>Ubicación de la tienda o servicio</li>
                <li>Formas de pago aceptadas</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default OfertasFields;
