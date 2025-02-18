import React from "react";

const CanchaDeportivaFields = () => {
    return (
        <div className="bg-blue-100 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-blue-700">📌 Sugerencias para tu anuncio de Cancha Deportiva</h2>
            <p className="text-gray-700 mt-2">
                Si alquilas o administras una cancha deportiva, te recomendamos incluir:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipo de cancha (fútbol, básquet, vóley, tenis, etc.)</li>
                <li>Dimensiones y tipo de piso</li>
                <li>Servicios adicionales (iluminación, vestuarios, estacionamiento)</li>
                <li>Ubicación exacta y disponibilidad de horarios</li>
                <li>Precios y opciones de reserva</li>
            </ul>
        </div>
    );
};

export default CanchaDeportivaFields;
