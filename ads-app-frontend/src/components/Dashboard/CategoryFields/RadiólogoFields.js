import React from "react";

const RadiologoFields = () => {
    return (
        <div className="bg-blue-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-900">📌 Sugerencias para tu anuncio de Radiólogo</h2>
            <p className="text-gray-700 mt-2">
                Si eres radiólogo y ofreces servicios de diagnóstico por imágenes, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de estudios radiológicos que realizas (RX, tomografía, resonancia, etc.)</li>
                <li>Ubicación del consultorio o servicio a domicilio</li>
                <li>Disponibilidad de turnos y horarios de atención</li>
                <li>Equipos y tecnología utilizada</li>
                <li>Certificaciones y experiencia profesional</li>
                <li>Medios de contacto y costos estimados</li>
            </ul>
        </div>
    );
};

export default RadiologoFields;
