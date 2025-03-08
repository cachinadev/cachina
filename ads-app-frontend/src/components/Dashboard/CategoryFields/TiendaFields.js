import React from "react";

const TiendaFields = () => {
    return (
        <div className="bg-purple-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-purple-900">📌 Sugerencias para tu anuncio de Tienda</h2>
            <p className="text-gray-700 mt-2">
                Si tienes una tienda física o en línea, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de productos que vendes</li>
                <li>Ubicación de la tienda o plataforma en línea</li>
                <li>Opciones de entrega o envío</li>
                <li>Promociones y descuentos disponibles</li>
                <li>Formas de pago aceptadas</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default TiendaFields;
