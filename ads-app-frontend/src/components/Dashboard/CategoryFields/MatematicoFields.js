import React from "react";

const MatematicoFields = () => {
    return (
        <div className="bg-indigo-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-indigo-900">📌 Sugerencias para tu anuncio de Matemático/a</h2>
            <p className="text-gray-700 mt-2">
                Si eres matemático/a, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Áreas de especialización (estadística, álgebra, cálculo, etc.)</li>
                <li>Servicios ofrecidos (clases, asesorías, investigación)</li>
                <li>Experiencia y formación académica</li>
                <li>Ubicación y disponibilidad</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default MatematicoFields;
