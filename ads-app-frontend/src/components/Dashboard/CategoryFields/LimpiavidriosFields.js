import React from "react";

const LimpiavidriosFields = () => {
    return (
        <div className="bg-blue-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-900">📌 Sugerencias para tu anuncio de Limpiavidrios</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de limpieza de vidrios, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de vidrios que limpias (ventanas, edificios, automóviles, escaparates, espejos)</li>
                <li>Herramientas y productos que utilizas</li>
                <li>Disponibilidad para trabajo en alturas</li>
                <li>Ubicación y áreas de servicio</li>
                <li>Precios y paquetes de limpieza</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default LimpiavidriosFields;
