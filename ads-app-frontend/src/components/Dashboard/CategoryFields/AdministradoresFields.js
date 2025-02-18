import React from "react";

const AdministradoresFields = () => {
    return (
        <div className="bg-yellow-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-700">📌 Sugerencias para tu anuncio de Administración</h2>
            <p className="text-gray-700 mt-2">
                Para destacar tus servicios de administración, incluye:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Áreas de gestión (empresarial, financiera, de proyectos, etc.)</li>
                <li>Años de experiencia y títulos académicos</li>
                <li>Disponibilidad para trabajo remoto o presencial</li>
                <li>Casos de éxito y referencias</li>
                <li>Formas de contacto y horarios</li>
            </ul>
        </div>
    );
};

export default AdministradoresFields;
