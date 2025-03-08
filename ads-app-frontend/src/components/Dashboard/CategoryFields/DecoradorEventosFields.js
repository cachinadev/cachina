import React from "react";

const DecoradorEventosFields = () => {
    return (
        <div className="bg-pink-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-pink-900">📌 Sugerencias para tu anuncio de Decorador de Eventos</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de decoración para eventos, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de eventos que decoras (bodas, fiestas, corporativos, temáticos)</li>
                <li>Estilos de decoración (moderno, vintage, minimalista, rústico, personalizado)</li>
                <li>Servicios adicionales (centros de mesa, iluminación, globos, telas, flores)</li>
                <li>Ubicación y disponibilidad para eventos</li>
                <li>Galería de imágenes con trabajos previos</li>
                <li>Precios aproximados y opciones de cotización</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default DecoradorEventosFields;
