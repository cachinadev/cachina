import React from "react";

const MecanicoFields = () => {
    return (
        <div className="bg-gray-900 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-300">📌 Sugerencias para tu anuncio de Mecánico</h2>
            <p className="text-gray-300 mt-2">
                Si eres mecánico, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Tipos de vehículos que reparas (autos, motos, camiones, maquinaria pesada)</li>
                <li>Servicios ofrecidos (cambio de aceite, frenos, diagnóstico, alineación, etc.)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación del taller y servicio a domicilio</li>
                <li>Precios y formas de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default MecanicoFields;
