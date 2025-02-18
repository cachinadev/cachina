import React from "react";

const InstaladorPanelesSolaresFields = () => {
    return (
        <div className="bg-yellow-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-800">📌 Sugerencias para tu anuncio de Instalador de Paneles Solares</h2>
            <p className="text-gray-700 mt-2">
                Si instalas paneles solares, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de paneles solares que instalas</li>
                <li>Tiempo de instalación y garantía</li>
                <li>Ubicación y disponibilidad</li>
                <li>Certificaciones y experiencia</li>
                <li>Precios aproximados y facilidades de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default InstaladorPanelesSolaresFields;
