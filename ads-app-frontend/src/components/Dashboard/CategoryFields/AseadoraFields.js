import React from "react";

const AseadoraFields = () => {
    return (
        <div className="bg-green-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-800">📌 Sugerencias para tu anuncio de Aseadora</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de limpieza, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de limpieza ofrecida (hogares, oficinas, industriales, eventos)</li>
                <li>Frecuencia del servicio (diario, semanal, mensual, ocasional)</li>
                <li>Disponibilidad y zonas de cobertura</li>
                <li>Uso de productos ecológicos o especializados</li>
                <li>Precios y formas de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default AseadoraFields;
