import React, { useState } from "react";
import CommonFields from "./fields/CommonFields";
import CategoryFields from "./fields/CategoryFields";
import { createAd } from "../../../services/api";

const CreateAd = ({ fetchUserDetails, fetchUserAds }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        departamento: "",
        provincia: "",
        distrito: "",
        address: "",  // ✅ Ensure address is included
        contactNumber: "",
        cost: "",
        currency: "Cotizar", // ✅ Default to "Cotizar" if no cost
        googleLink: "",
        pictures: [],
        availableHours: "",
        website: "",
        paymentMethods: "", // ✅ Added to match backend
        availableDays: "", // ✅ Added to match backend
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            ...(name === "cost" && (!value || value === "0") ? { currency: "Cotizar" } : {}), // ✅ Set "Cotizar" if cost is empty or 0
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, pictures: Array.from(e.target.files) }));
    };

    const handleCheckboxChange = (e, field) => {
        const { value, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [field]: checked
                ? [...(prevData[field] || []), value]
                : prevData[field].filter((item) => item !== value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const requiredFields = ["title", "description", "category", "contactNumber", "departamento", "provincia", "distrito"];
            const missingFields = requiredFields.filter(
                (field) => !formData[field] || formData[field].trim() === ""
            );

            if (missingFields.length > 0) {
                setError(`Por favor complete: ${missingFields.join(", ")}`);
                return;
            }

            if (!/^\d{9}$/.test(formData.contactNumber)) {
                setError("El número de contacto debe tener 9 dígitos válidos.");
                return;
            }

            await createAd(formData);

            setSuccess("¡Anuncio creado exitosamente!");

            setFormData({
                title: "",
                description: "",
                category: "",
                departamento: "",
                provincia: "",
                distrito: "",
                address: "",  // ✅ Ensure address is included
                contactNumber: "",
                cost: "",
                currency: "Cotizar", // ✅ Reset to default after submit
                googleLink: "",
                pictures: [],
                availableDays: "", // ✅ Reset to empty after submit
                website: "",
                paymentMethods: "",
            });

            fetchUserDetails();
            fetchUserAds();
        } catch (err) {
            setError(err.response?.data?.message || "No se pudo crear el anuncio. Intente nuevamente.");
            console.error("Error al crear el anuncio:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">📢 Difunde tu anuncio</h1>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {success && (
                <div className="text-center">
                    <p className="text-green-500 font-semibold text-lg mb-4">
                        ¡Anuncio creado exitosamente!
                    </p>
                </div>
            )}

            {/* Campos Comunes */}
            <CommonFields
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
            />

            {/* Campos Específicos de la Categoría */}
            <CategoryFields
                category={formData.category}
                formData={formData}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
            />

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
                📢 Publicar Anuncio
            </button>

            {success && (
                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                        🎉 Tu anuncio ha sido publicado con éxito. ¡Esperamos que recibas muchas visitas y clientes!
                    </p>
                </div>
            )}
        </form>
    );
};

export default CreateAd;
