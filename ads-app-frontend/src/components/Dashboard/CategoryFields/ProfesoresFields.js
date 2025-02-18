import React from "react";

const ProfesoresFields = () => {
    return (
        <div className="bg-green-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Profesor</h2>
            <p className="text-gray-200 mt-2">
                Si eres profesor, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Materias que enseñas (matemáticas, idiomas, ciencias, arte, etc.)</li>
                <li>Modalidad (presencial, en línea, clases particulares)</li>
                <li>Experiencia y certificaciones</li>
                <li>Disponibilidad de horarios</li>
                <li>Precios por hora o paquete de clases</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ProfesoresFields;
