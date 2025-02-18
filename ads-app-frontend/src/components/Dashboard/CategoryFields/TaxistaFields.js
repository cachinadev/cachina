import React from "react";

const TaxistaFields = () => {
    return (
        <div className="bg-yellow-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Taxista</h2>
            <p className="text-gray-200 mt-2">
                Si eres taxista, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de servicio (taxi convencional, aplicativo, privado, viajes largos)</li>
                <li>Zonas de cobertura</li>
                <li>Disponibilidad de horarios</li>
                <li>Tarifas aproximadas</li>
                <li>Contacto para reservas</li>
            </ul>
        </div>
    );
};

export default TaxistaFields;
