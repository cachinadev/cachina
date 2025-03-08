import React from "react";

const PolleriaFields = () => {
    return (
        <div className="bg-orange-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-900">📌 Sugerencias para tu anuncio de Pollería</h2>
            <p className="text-gray-700 mt-2">
                Si tienes una pollería o vendes pollo a la brasa, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de platos que ofreces (pollo a la brasa, broaster, parrillas, etc.)</li>
                <li>Menú especial y combos promocionales</li>
                <li>Opciones de delivery o consumo en local</li>
                <li>Horario de atención</li>
                <li>Ubicación del local</li>
                <li>Formas de pago aceptadas</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PolleriaFields;
