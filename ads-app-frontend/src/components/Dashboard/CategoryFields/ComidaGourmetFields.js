import React from "react";

const ComidaGourmetFields = () => {
    return (
        <div className="bg-purple-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-purple-900">📌 Sugerencias para tu anuncio de Comida Gourmet</h2>
            <p className="text-gray-700 mt-2">
                Si ofreces comida gourmet, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidades (platos exclusivos, ingredientes premium, cocina de autor)</li>
                <li>Opciones de menú (degustación, maridaje, platos a la carta)</li>
                <li>Ubicación y horario de atención</li>
                <li>Experiencia del chef y certificaciones</li>
                <li>Precios y reservas</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default ComidaGourmetFields;
