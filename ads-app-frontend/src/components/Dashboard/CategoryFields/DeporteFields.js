import React from "react";

const DeporteFields = () => {
    return (
        <div className="bg-green-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Deporte</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces servicios o productos relacionados con el deporte, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de deporte o actividad</li>
                <li>Ubicación del servicio (gimnasio, cancha, entrenamiento a domicilio, etc.)</li>
                <li>Horarios y disponibilidad</li>
                <li>Precios o tarifas</li>
                <li>Equipo necesario (si se proporciona o si el cliente debe llevarlo)</li>
                <li>Experiencia o certificaciones del entrenador</li>
                <li>Contacto para más información</li>
            </ul>
        </div>
    );
};

export default DeporteFields;
