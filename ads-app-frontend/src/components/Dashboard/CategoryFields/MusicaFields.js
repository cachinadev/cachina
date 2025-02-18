import React from "react";

const MusicaFields = () => {
    return (
        <div className="bg-purple-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Música</h2>
            <p className="text-gray-100 mt-2">
                Si ofreces servicios musicales, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-200 mt-2">
                <li>Tipo de música o género</li>
                <li>Eventos donde tocas (bodas, fiestas, conciertos)</li>
                <li>Instrumentos y equipo que utilizas</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios y métodos de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default MusicaFields;
