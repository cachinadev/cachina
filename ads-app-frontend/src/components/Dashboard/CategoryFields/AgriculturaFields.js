import React from "react";

const AgriculturaFields = () => {
  return (
    <div className="mt-4 p-4 border border-green-400 rounded bg-green-50">
      <h3 className="text-green-600 font-bold">🌾 Sugerencias para tu Anuncio de Agricultura</h3>
      <p className="text-gray-700 mt-2">
        Para mejorar tu anuncio, considera incluir en la descripción:
      </p>
      <ul className="list-disc list-inside text-gray-600 mt-2">
        <li>📍 Ubicación del terreno o finca.</li>
        <li>🌱 Tipo de cultivo: Frutas, Verduras, Tubérculos, Granos Andinos, etc.</li>
        <li>💧 Información sobre riego y calidad del suelo.</li>
        <li>🚜 Equipos o herramientas incluidas.</li>
        <li>📆 Época de cosecha y disponibilidad.</li>
        <li>📦 Opciones de venta: Al por mayor, por kilo, por unidad.</li>
      </ul>
      <p className="text-gray-700 mt-4">
        ¡Una buena descripción atraerá más compradores! 🍀
      </p>
    </div>
  );
};

export default AgriculturaFields;
