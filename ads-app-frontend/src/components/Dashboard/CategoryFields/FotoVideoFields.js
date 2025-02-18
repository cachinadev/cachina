import React from "react";

const FotoVideoFields = () => {
    return (
        <div className="bg-blue-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Fotografía y Video</h2>
            <p className="text-gray-200 mt-2">
                Si ofreces servicios de fotografía y video, aquí algunas recomendaciones para destacar tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Tipo de servicio: (fotografía de eventos, retratos, moda, productos, bodas, etc.)</li>
                <li>Equipos y tecnología utilizada</li>
                <li>Opciones de edición y postproducción</li>
                <li>Disponibilidad de servicio a domicilio o estudio</li>
                <li>Portafolio o muestras de trabajos anteriores</li>
                <li>Paquetes y precios</li>
                <li>Contacto y redes sociales</li>
            </ul>
        </div>
    );
};

export default FotoVideoFields;
