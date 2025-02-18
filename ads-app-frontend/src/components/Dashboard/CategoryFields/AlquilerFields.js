import React from "react";

const AlquilerFields = () => {
    return (
        <div className="bg-purple-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-purple-700">📌 Sugerencias para tu anuncio de Alquiler</h2>
            <p className="text-gray-700 mt-2">
                Si deseas alquilar un inmueble o un espacio, considera incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Descripción detallada del espacio (metros cuadrados, habitaciones, baños, etc.)</li>
                <li>Ubicación exacta o aproximada</li>
                <li>Condiciones del alquiler (mensualidad, depósito, plazos, requisitos)</li>
                <li>Servicios incluidos (agua, luz, internet, seguridad, etc.)</li>
                <li>Fotos reales del lugar y medios de contacto</li>
            </ul>
        </div>
    );
};

export default AlquilerFields;
