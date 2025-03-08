import React from "react";

const FotografiaFields = () => {
    return (
        <div className="bg-blue-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-900">📌 Sugerencias para tu anuncio de Fotografía</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de fotografía, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de fotografía (bodas, retratos, eventos, productos, moda, comercial)</li>
                <li>Equipos y técnicas utilizadas</li>
                <li>Opciones de paquetes y precios</li>
                <li>Ubicación y disponibilidad</li>
                <li>Galería de trabajos previos</li>
                <li>Servicios adicionales (edición, impresión, videos, drones)</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FotografiaFields;
