import React from "react";

const PayasosFields = () => {
    return (
        <div className="bg-red-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Payaso</h2>
            <p className="text-gray-200 mt-2">
                Si eres payaso profesional, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipos de eventos que animas (cumpleaños, fiestas, empresas)</li>
                <li>Servicios adicionales (globoflexia, magia, juegos interactivos)</li>
                <li>Experiencia y referencias</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios y paquetes</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PayasosFields;
