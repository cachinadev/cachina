import React from "react";

const ComidaCaseraFields = () => {
    return (
        <div className="bg-green-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-900">📌 Sugerencias para tu anuncio de Comida Casera</h2>
            <p className="text-gray-700 mt-2">
                Si preparas y vendes comida casera, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de platos que preparas (guisos, sopas, estofados, platos típicos)</li>
                <li>Opciones de porciones (individual, familiar, pedidos especiales)</li>
                <li>Opciones de entrega (para llevar, delivery, consumo en local)</li>
                <li>Horario de atención y área de cobertura</li>
                <li>Precios y métodos de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ComidaCaseraFields;
