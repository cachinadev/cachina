import React from "react";

const MercadosFields = () => {
    return (
        <div className="bg-green-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-900">📌 Sugerencias para tu anuncio en Mercados</h2>
            <p className="text-gray-700 mt-2">
                Si tienes un puesto en el mercado o vendes productos al por mayor, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de productos que ofreces (alimentos, ropa, electrodomésticos, artesanías)</li>
                <li>Ubicación dentro del mercado o tienda física</li>
                <li>Disponibilidad de compra al por mayor o menor</li>
                <li>Precios y promociones especiales</li>
                <li>Horario de atención y métodos de pago</li>
                <li>Medios de contacto y opciones de entrega</li>
            </ul>
        </div>
    );
};

export default MercadosFields;
