// AlquiloFields Component: Handles input fields for "Alquilo" category
import React from "react";

const AlquiloFields = ({ formData, handleChange }) => {
  return (
    <div>
      <label className="block text-gray-700 mt-4">Type of Place:</label>
      <select
        name="alquiloType"
        value={formData.alquiloType}
        onChange={handleChange}
        className="w-full border p-2"
        required
      >
        <option value="">Select Place</option>
        <option value="Casa">Casa</option>
        <option value="Departamento">Departamento</option>
        <option value="Cuarto">Cuarto</option>
        <option value="Cabaña">Cabaña</option>
        <option value="Otros">Otros</option>
      </select>

      <label className="block text-gray-700 mt-4">Area Total (m²):</label>
      <input
        type="number"
        name="areaTotal"
        value={formData.areaTotal}
        onChange={handleChange}
        className="w-full border p-2"
      />
      
      {/* Add other fields as needed */}
    </div>
  );
};

export default AlquiloFields;
