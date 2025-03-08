import React from "react";

const PastorGanaderoFields = () => {
    return (
        <div className="bg-green-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-900">📌 Sugerencias para tu anuncio de Pastor Ganadero</h2>
            <p className="text-gray-700 mt-2">
                Si trabajas en la cría y pastoreo de ganado, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de ganado que manejas (bovino, ovino, caprino, etc.)</li>
                <li>Servicios ofrecidos (venta de ganado, asesoramiento, alimentación, sanidad animal)</li>
                <li>Ubicación de la granja o finca</li>
                <li>Certificaciones o experiencia</li>
                <li>Precios y condiciones de venta</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PastorGanaderoFields;
