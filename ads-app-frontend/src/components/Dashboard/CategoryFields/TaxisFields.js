import React from "react";

const TaxisFields = () => {
    return (
        <div className="bg-red-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-red-900">📌 Sugerencias para tu anuncio de Taxi</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicio de taxi o transporte privado, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Zonas de cobertura y disponibilidad</li>
                <li>Tarifas estimadas y formas de pago</li>
                <li>Opciones de reservas anticipadas</li>
                <li>Servicios especiales (aeropuerto, turismo, carga liviana, etc.)</li>
                <li>Seguridad y medidas sanitarias</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default TaxisFields;
