import React from "react";

const AbogadosFields = () => {
    return (
        <div className="bg-blue-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-700">📌 Sugerencias para tu anuncio de Abogado</h2>
            <p className="text-gray-700 mt-2">
                Al publicar un anuncio para servicios legales, considera incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Áreas de especialización (Derecho Penal, Civil, Corporativo, etc.)</li>
                <li>Años de experiencia y certificaciones</li>
                <li>Ubicación y disponibilidad de atención</li>
                <li>Tarifas o posibilidad de consulta gratuita</li>
                <li>Medios de contacto (correo, WhatsApp, teléfono)</li>
            </ul>
        </div>
    );
};

export default AbogadosFields;
