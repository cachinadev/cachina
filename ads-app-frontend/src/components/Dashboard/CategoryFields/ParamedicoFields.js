import React from "react";

const ParamedicoFields = () => {
    return (
        <div className="bg-red-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Paramédico</h2>
            <p className="text-gray-200 mt-2">
                Si trabajas como paramédico, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Especialización (emergencias, rescates, traslados médicos)</li>
                <li>Experiencia y certificaciones</li>
                <li>Servicios ofrecidos (primeros auxilios, asistencia a domicilio)</li>
                <li>Ubicación y disponibilidad</li>
                <li>Precios y seguros médicos aceptados</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ParamedicoFields;
