import React from "react";

const CafeteriaFields = () => {
    return (
        <div className="bg-brown-400 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-brown-800">📌 Sugerencias para tu anuncio de Cafetería</h2>
            <p className="text-gray-700 mt-2">
                Si tienes una cafetería y deseas promocionarla, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Especialidades (café de origen, espresso, capuchino, bebidas frías)</li>
                <li>Menú adicional (panadería, postres, bocadillos)</li>
                <li>Ubicación exacta y horario de atención</li>
                <li>Ambiente y servicios extra (wifi, coworking, música en vivo)</li>
                <li>Promociones y descuentos</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default CafeteriaFields;
