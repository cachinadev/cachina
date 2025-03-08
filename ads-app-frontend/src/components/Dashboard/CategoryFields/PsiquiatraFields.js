import React from "react";

const PsiquiatraFields = () => {
    return (
        <div className="bg-blue-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-900">📌 Sugerencias para tu anuncio de Psiquiatra</h2>
            <p className="text-gray-700 mt-2">
                Si eres psiquiatra y ofreces consultas, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidad y tipo de tratamientos ofrecidos</li>
                <li>Servicios adicionales (terapia individual, grupal, farmacoterapia, etc.)</li>
                <li>Experiencia y certificaciones</li>
                <li>Modalidad de consulta (presencial o en línea)</li>
                <li>Ubicación del consultorio</li>
                <li>Tarifas y formas de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PsiquiatraFields;
