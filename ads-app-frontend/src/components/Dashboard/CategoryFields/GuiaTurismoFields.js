import React from "react";

const GuiaTurismoFields = () => {
    return (
        <div className="bg-teal-300 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-teal-800">📌 Sugerencias para tu anuncio de Guía de Turismo</h2>
            <p className="text-gray-700 mt-2">
                Si eres guía de turismo, te recomendamos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Destinos o rutas que cubres</li>
                <li>Idiomas en los que ofreces el servicio</li>
                <li>Duración y precios de los tours</li>
                <li>Modalidad (grupal, privado, en línea)</li>
                <li>Experiencia y certificaciones</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default GuiaTurismoFields;
