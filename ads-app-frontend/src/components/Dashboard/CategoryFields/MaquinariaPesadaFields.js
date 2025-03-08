import React from "react";

const MaquinariaPesadaFields = () => {
    return (
        <div className="bg-yellow-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-yellow-900">📌 Sugerencias para tu anuncio de Maquinaria Pesada</h2>
            <p className="text-gray-700 mt-2">
                Si alquilas o vendes maquinaria pesada, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de maquinaria disponible (excavadoras, montacargas, grúas, bulldozers, tractores)</li>
                <li>Condiciones de alquiler o venta</li>
                <li>Ubicación y disponibilidad</li>
                <li>Especificaciones técnicas de la maquinaria</li>
                <li>Opciones de transporte o entrega</li>
                <li>Precios y métodos de pago</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default MaquinariaPesadaFields;
