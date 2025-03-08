import React from "react";

const LocalIndustrialFields = () => {
    return (
        <div className="bg-gray-700 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-gray-100">📌 Sugerencias para tu anuncio de Local Industrial</h2>
            <p className="text-gray-300 mt-2">
                Si ofreces un local industrial en venta o alquiler, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Ubicación y accesibilidad del local</li>
                <li>Metros cuadrados y distribución del espacio</li>
                <li>Infraestructura disponible (almacenes, oficinas, zona de carga y descarga)</li>
                <li>Servicios incluidos (electricidad industrial, agua, seguridad)</li>
                <li>Precio y condiciones del contrato</li>
                <li>Medios de contacto</li>
            </ul>
        </div>
    );
};

export default LocalIndustrialFields;
