import React from "react";

const PlomeroFields = () => {
    return (
        <div className="bg-blue-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-white">📌 Sugerencias para tu anuncio de Plomero</h2>
            <p className="text-gray-200 mt-2">
                Si trabajas como plomero, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Servicios ofrecidos (instalaciones, reparaciones, detección de fugas)</li>
                <li>Especialización en sistemas de agua potable o desagüe</li>
                <li>Experiencia y certificaciones</li>
                <li>Ubicación y zonas de trabajo</li>
                <li>Rango de precios por servicio</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default PlomeroFields;
