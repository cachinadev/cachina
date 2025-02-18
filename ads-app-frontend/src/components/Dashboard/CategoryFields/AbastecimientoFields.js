import React from "react";

const AbastecimientoFields = () => {
    return (
        <div className="bg-yellow-900 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Abastecimiento</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces servicios de abastecimiento, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipos de productos o insumos que abasteces</li>
                <li>Zonas de cobertura</li>
                <li>Frecuencia y tiempos de entrega</li>
                <li>Condiciones de pago y pedidos</li>
                <li>Contacto para contrataciones</li>
            </ul>
        </div>
    );
};

export default AbastecimientoFields;
