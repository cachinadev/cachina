import React from "react";

const CuranderosFields = () => {
    return (
        <div className="bg-purple-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-purple-700">📌 Sugerencias para tu anuncio de Curandero</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces servicios de curanderismo, considera incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidades (hierbas medicinales, limpiezas espirituales, terapias alternativas)</li>
                <li>Testimonios o experiencia en el área</li>
                <li>Ubicación y modalidad del servicio (presencial, virtual)</li>
                <li>Horarios y disponibilidad</li>
                <li>Medios de contacto y redes sociales</li>
            </ul>
        </div>
    );
};

export default CuranderosFields;
