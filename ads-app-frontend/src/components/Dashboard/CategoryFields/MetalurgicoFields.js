import React from "react";

const MetalurgicoFields = () => {
    return (
        <div className="bg-gray-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-400">📌 Sugerencias para tu anuncio de Metalúrgico</h2>
            <p className="text-gray-300 mt-2">
                Si trabajas en metalurgia, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Tipos de metales con los que trabajas</li>
                <li>Servicios ofrecidos (fundición, soldadura, tratamientos térmicos)</li>
                <li>Proyectos anteriores y experiencia</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios y formas de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default MetalurgicoFields;
