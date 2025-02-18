import React from "react";

const TejedorasFields = () => {
    return (
        <div className="bg-pink-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Tejedoras</h2>
            <p className="text-gray-200 mt-2">
                Si eres tejedor/a, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de productos que elaboras (ropas, accesorios, tapices, etc.)</li>
                <li>Materiales que usas</li>
                <li>Tiempo estimado de entrega</li>
                <li>Opciones de personalización</li>
                <li>Medios de contacto y precios</li>
            </ul>
        </div>
    );
};

export default TejedorasFields;
