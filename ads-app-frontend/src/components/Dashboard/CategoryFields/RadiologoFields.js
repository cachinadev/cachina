import React from "react";

const RadiologoFields = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Radiólogo</h2>
            <p className="text-gray-200 mt-2">
                Si eres radiólogo, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Especialización (radiología general, tomografía, resonancia magnética, ecografía, etc.)</li>
                <li>Equipos con los que trabajas</li>
                <li>Centros médicos donde atiendes</li>
                <li>Disponibilidad y horarios</li>
                <li>Precios de consulta</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default RadiologoFields;
