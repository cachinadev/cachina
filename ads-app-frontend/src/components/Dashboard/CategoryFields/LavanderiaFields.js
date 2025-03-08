import React from "react";

const LavanderiaFields = () => {
    return (
        <div className="bg-indigo-500 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-indigo-900">📌 Sugerencias para tu anuncio de Lavandería</h2>
            <p className="text-gray-700 mt-2">
                Si tienes un servicio de lavandería, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de servicios ofrecidos (lavado en seco, planchado, tintorería, autoservicio)</li>
                <li>Ubicación y horarios de atención</li>
                <li>Servicios adicionales (recolección y entrega a domicilio, membresías, lavado express)</li>
                <li>Precios aproximados y métodos de pago</li>
                <li>Promociones y descuentos especiales</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default LavanderiaFields;
