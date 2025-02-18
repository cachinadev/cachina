import React from "react";

const FinanzasFields = () => {
    return (
        <div className="bg-green-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-800">📌 Sugerencias para tu anuncio de Finanzas</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios financieros, incluye en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialización (contabilidad, inversiones, asesoría financiera)</li>
                <li>Servicios ofrecidos (préstamos, planificación financiera, auditoría)</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default FinanzasFields;
