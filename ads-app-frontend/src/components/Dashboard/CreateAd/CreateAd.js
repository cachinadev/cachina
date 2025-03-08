import React, { useState } from "react";
import dynamic from "next/dynamic";
import CommonFields from "./fields/CommonFields";
import CategoryFields from "./fields/CategoryFields";
import { createAd } from "../../../services/api";

// ✅ Dynamically import the MapComponent to avoid SSR issues
const MapComponent = dynamic(() => import("../../MapComponent"), { ssr: false });

const CreateAd = ({ fetchUserDetails, fetchUserAds }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        departamento: "",
        provincia: "",
        distrito: "",
        address: "",
        contactNumber: "",
        cost: "",
        currency: "Soles",
        googleLink: "",
        latitude: "",
        longitude: "",
        pictures: [],
        availableHours: "",
        website: "",
        paymentMethods: "",
        availableDays: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [imagePreviews, setImagePreviews] = useState([]);
    

    // ✅ Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => {
            if (type === "checkbox") {
                return {
                    ...prev,
                    [name]: checked
                        ? [...(prev[name] || []), value]
                        : prev[name].filter((item) => item !== value),
                };
            }
            return { ...prev, [name]: value };
        });
    };

    // ✅ Handle file input changes
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length + formData.pictures.length > 10) {
            setError("Puedes subir un máximo de 10 imágenes.");
            return;
        }

        setFormData((prev) => ({ ...prev, pictures: [...prev.pictures, ...files] }));

        // ✅ Generate image previews safely
        const newPreviews = files.map((file) => ({
            url: URL.createObjectURL(file),
            file,
        }));

        setImagePreviews((prev) => [...prev, ...newPreviews]);
    };

    // ✅ Remove image
    const handleRemoveImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            pictures: prev.pictures.filter((_, i) => i !== index),
        }));

        // ✅ Revoke Object URL to free memory
        URL.revokeObjectURL(imagePreviews[index].url);
        setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    };

    // ✅ Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
    
        try {
            const requiredFields = ["title", "description", "category", "contactNumber", "departamento", "provincia", "distrito", "latitude", "longitude"];
            const missingFields = requiredFields.filter((field) => {
                const value = formData[field];
                return !value || (typeof value === "string" && value.trim() === "");
            });            
    
            if (missingFields.length > 0) {
                setError(`Por favor complete: ${missingFields.join(", ")}`);
                return;
            }
    
            if (!/^\d{9}$/.test(formData.contactNumber)) {
                setError("El número de contacto debe tener 9 dígitos válidos.");
                return;
            }
            
            // ✅ Convert `formData` to a `FormData` object
            const formDataToSend = new FormData();

            // ✅ Append all fields to FormData
            Object.keys(formData).forEach((key) => {
                if (key !== "pictures") {
                    formDataToSend.append(key, formData[key]);
                }
            });

            // ✅ Append images properly
            formData.pictures.forEach((file) => {
                formDataToSend.append("images", file);
            });

            // ✅ Debugging: Log all form data before sending
            console.log("🚀 Submitting Ad FormData...");
            for (let pair of formDataToSend.entries()) {
                console.log(`${pair[0]}:`, pair[1]);
            }

            // ✅ Send request using `createAd` function
            await createAd(formDataToSend);
    
            setSuccess("¡Anuncio creado exitosamente!");

            setFormData({
                title: "",
                description: "",
                category: "",
                departamento: "",
                provincia: "",
                distrito: "",
                address: "",
                contactNumber: "",
                cost: "",
                currency: "Soles",
                googleLink: "",
                latitude: "",
                longitude: "",
                pictures: [],
                availableDays: "",
                website: "",
                paymentMethods: "",
            });
            setImagePreviews([]);
            fetchUserDetails();
            fetchUserAds();
        } catch (err) {
            setError(err.response?.data?.message || "No se pudo crear el anuncio. Intente nuevamente.");
            console.error("❌ Error al crear el anuncio:", err);
        }
    };    

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">📢 Difunde tu servicio/negocio y más</h1>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {success && (
                <div className="text-center">
                    <p className="text-green-500 font-semibold text-lg mb-4">
                        ¡Anuncio creado exitosamente!
                    </p>
                </div>
            )}

            {/* 🔹 Common Fields */}
            <CommonFields formData={formData} handleChange={handleChange} />

            {/* 🔹 Location Map */}
            <MapComponent formData={formData} setFormData={setFormData} />

            {/* 🔹 Category-Specific Fields */}
            <CategoryFields category={formData.category} formData={formData} handleChange={handleChange} />

            {/* 🔹 Image Upload Section */}
            <div>
                <h3 className="font-bold mb-2">📸 Imágenes del Anuncio</h3>

                {/* ✅ Custom File Input */}
                <label className="cursor-pointer bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-all inline-block">
                    📂 Seleccionar Imágenes
                    <input
                        type="file"
                        multiple
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>

                {/* ✅ Display selected file names (if any) */}
                {formData.pictures.length > 0 ? (
                    <p className="mt-2 text-sm text-gray-600">
                        {formData.pictures.length} archivo(s) seleccionado(s)
                    </p>
                ) : (
                    <p className="mt-2 text-sm text-gray-500">Ningún archivo seleccionado</p>
                )}

                {/* ✅ Display image previews */}
                <div className="grid grid-cols-3 gap-4 mt-3">
                    {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative">
                            <img
                                src={preview.url}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-32 object-cover rounded-md shadow-md"
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full text-xs shadow-md"
                            >
                                ❌
                            </button>
                        </div>
                    ))}
                </div>
                
            </div>

        {/* 🔹 Submit Button */}
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
                📢 Publicar Anuncio
            </button>
        </form>
    );
};

export default CreateAd;
