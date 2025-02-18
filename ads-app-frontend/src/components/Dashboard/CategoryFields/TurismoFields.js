import React from "react";

const TurismoFields = () => {
    return (
        <div className="bg-green-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Turismo</h2>
            <p className="text-gray-200 mt-2">
                Si trabajas en turismo, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de tours y actividades que ofreces</li>
                <li>Destino y duración de los viajes</li>
                <li>Servicios incluidos</li>
                <li>Precios y disponibilidad</li>
                <li>Contacto y medios de reserva</li>
            </ul>
        </div>
    );
};

export default TurismoFields;
