import React from "react";

const FruticultorFields = () => {
    return (
        <div className="bg-green-600 p-4 rounded-md mt-4">
            <h2 className="text-lg font-semibold text-green-900">📌 Sugerencias para tu anuncio de Fruticultor</h2>
            <p className="text-gray-700 mt-2">
                Si te dedicas a la producción y venta de frutas, te sugerimos incluir en tu anuncio:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Tipos de frutas que cultivas y vendes</li>
                <li>Opciones de venta (al por mayor, al por menor, a domicilio)</li>
                <li>Ubicación y área de distribución</li>
                <li>Certificaciones o prácticas ecológicas utilizadas</li>
                <li>Precios y disponibilidad por temporada</li>
                <li>Medios de contacto y pedidos</li>
            </ul>
        </div>
    );
};

export default FruticultorFields;
