import React from "react";

const PanaderoFields = () => {
    return (
        <div className="bg-yellow-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-900">📌 Sugerencias para tu anuncio de Panadero</h2>
            <p className="text-gray-700 mt-2">
                Si eres panadero o tienes una panadería, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de panes y productos que ofreces</li>
                <li>Horario de atención</li>
                <li>Opciones de venta al por mayor o menor</li>
                <li>Ubicación de la panadería o servicio de entrega</li>
                <li>Promociones y descuentos disponibles</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PanaderoFields;
