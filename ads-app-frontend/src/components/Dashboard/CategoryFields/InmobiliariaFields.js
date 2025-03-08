import React from "react";

const InmobiliariaFields = () => {
    return (
        <div className="bg-blue-200 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-800">📌 Sugerencias para tu anuncio de Inmobiliaria</h2>
            <p className="text-gray-700 mt-2">
                Si tienes una inmobiliaria y deseas atraer más clientes, te recomendamos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de propiedades que ofreces (casas, departamentos, terrenos, locales comerciales, etc.)</li>
                <li>Ubicación de los inmuebles disponibles</li>
                <li>Facilidades de financiamiento o créditos disponibles</li>
                <li>Experiencia y certificaciones en el sector inmobiliario</li>
                <li>Precios y opciones de pago</li>
                <li>Horarios de atención y medios de contacto</li>
                <li>Testimonios de clientes satisfechos</li>
            </ul>
        </div>
    );
};

export default InmobiliariaFields;
