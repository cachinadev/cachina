import React from "react";

const CateringFields = () => {
    return (
        <div className="bg-orange-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-800">📌 Sugerencias para tu anuncio de Catering</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de catering para eventos, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de eventos atendidos (bodas, fiestas, corporativos, privados)</li>
                <li>Menús disponibles (vegetariano, gourmet, buffet, temáticos)</li>
                <li>Capacidad y número de personas atendidas</li>
                <li>Ubicación y zonas de servicio</li>
                <li>Precios y paquetes personalizados</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default CateringFields;
