import React from "react";

const ArtesanoFields = () => {
    return (
        <div className="bg-orange-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-orange-700">📌 Sugerencias para tu anuncio de Artesano</h2>
            <p className="text-gray-700 mt-2">
                Si eres artesano y deseas anunciar tus productos, considera agregar:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de artesanía que realizas (cerámica, tejido, pintura, madera, etc.)</li>
                <li>Materiales utilizados y proceso de fabricación</li>
                <li>Fotos de tus productos terminados</li>
                <li>Ubicación y métodos de envío</li>
                <li>Precios y formas de pago disponibles</li>
            </ul>
        </div>
    );
};

export default ArtesanoFields;
