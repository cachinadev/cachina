import React from "react";

const ContadorFields = () => {
    return (
        <div className="bg-green-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-700">📌 Sugerencias para tu anuncio de Contador</h2>
            <p className="text-gray-700 mt-2">
                Si eres contador, te recomendamos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Servicios contables ofrecidos (declaraciones de impuestos, auditorías, asesoramiento financiero)</li>
                <li>Certificaciones y experiencia laboral</li>
                <li>Especialización en algún sector (empresas, autónomos, ONGs)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ContadorFields;
