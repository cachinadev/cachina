import React from "react";

const departamentosProvinciasDistritos = {
    Lima: {
        Lima: ["Miraflores", "San Isidro", "Surco"],
        Callao: ["Ventanilla", "Bellavista", "La Punta"],
    },
    Arequipa: {
        Arequipa: ["Cercado", "Yanahuara", "Cayma"],
        Islay: ["Mollendo", "Mejía", "Cocachacra"],
    },
};

const RenderLocationFields = ({ formData, handleChange }) => {
    return (
        <>
            <label htmlFor="departamento" className="block text-gray-700">
                Departamento:
            </label>
            <select
                name="departamento"
                value={formData.departamento || ""}
                onChange={(e) => {
                    handleChange({
                        target: {
                            name: "departamento",
                            value: e.target.value,
                        },
                    });
                    handleChange({ target: { name: "provincia", value: "" } });
                    handleChange({ target: { name: "distrito", value: "" } });
                }}
                className="w-full border p-2 mb-4 rounded"
                required
            >
                <option value="">Select Departamento</option>
                {Object.keys(departamentosProvinciasDistritos).map((dep) => (
                    <option key={dep} value={dep}>
                        {dep}
                    </option>
                ))}
            </select>

            <label htmlFor="provincia" className="block text-gray-700">
                Provincia:
            </label>
            <select
                name="provincia"
                value={formData.provincia || ""}
                onChange={(e) => {
                    handleChange({
                        target: {
                            name: "provincia",
                            value: e.target.value,
                        },
                    });
                    handleChange({ target: { name: "distrito", value: "" } });
                }}
                className="w-full border p-2 mb-4 rounded"
                disabled={!formData.departamento}
                required
            >
                <option value="">Select Provincia</option>
                {formData.departamento &&
                    Object.keys(departamentosProvinciasDistritos[formData.departamento] || {}).map(
                        (prov) => (
                            <option key={prov} value={prov}>
                                {prov}
                            </option>
                        )
                    )}
            </select>

            <label htmlFor="distrito" className="block text-gray-700">
                Distrito:
            </label>
            <select
                name="distrito"
                value={formData.distrito || ""}
                onChange={handleChange}
                className="w-full border p-2 mb-4 rounded"
                disabled={!formData.provincia}
                required
            >
                <option value="">Select Distrito</option>
                {formData.provincia &&
                    (departamentosProvinciasDistritos[formData.departamento]?.[formData.provincia] || []).map(
                        (dist) => (
                            <option key={dist} value={dist}>
                                {dist}
                            </option>
                        )
                    )}
            </select>
        </>
    );
};

export default RenderLocationFields;
