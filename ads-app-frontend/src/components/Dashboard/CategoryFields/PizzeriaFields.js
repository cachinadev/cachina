import React from "react";

const PizzeriaFields = () => {
    return (
        <div className="bg-orange-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-900">📌 Sugerencias para tu anuncio de Pizzería</h2>
            <p className="text-gray-700 mt-2">
                Si tienes una pizzería o vendes pizzas, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de pizzas que ofreces</li>
                <li>Opciones de entrega o consumo en local</li>
                <li>Promociones y descuentos especiales</li>
                <li>Horario de atención</li>
                <li>Ubicación de la pizzería o servicio de delivery</li>
                <li>Formas de pago aceptadas</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PizzeriaFields;
