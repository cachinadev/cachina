import React, { useState, useEffect } from "react";
import { submitComplaint } from "../services/api";

const LibroReclamaciones = () => {
    const [formData, setFormData] = useState({
        complaintId: "",
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        documentType: "",
        documentNumber: "",
        contractType: "",
        serviceId: "",
        complaintType: "",
        details: "",
        acceptedPrivacyPolicy: false,
    });

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [submittedComplaintId, setSubmittedComplaintId] = useState(null);

    // Generate a random complaint ID
    useEffect(() => {
        const generateComplaintId = () => {
            const randomNum = Math.floor(100000 + Math.random() * 900000);
            return `RCL-${randomNum}`;
        };
        setFormData((prev) => ({
            ...prev,
            complaintId: generateComplaintId(),
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await submitComplaint(formData);
            setSubmittedComplaintId(response.complaintId); // ✅ Store and display submitted complaint ID
            setSuccessMessage(response.message);
            setErrorMessage(null);

            // Reset form after submission (except complaint ID)
            setFormData({
                complaintId: formData.complaintId, // Keep the same complaint ID
                name: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                address: "",
                documentType: "",
                documentNumber: "",
                contractType: "",
                serviceId: "",
                complaintType: "",
                details: "",
                acceptedPrivacyPolicy: false,
            });
        } catch (error) {
            console.error("Error submitting complaint:", error.response?.data || error.message);
            setErrorMessage(error.response?.data?.message || "Error submitting complaint. Please try again.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* ✅ Header with Company Info */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg text-center">
                <h1 className="text-2xl font-bold">📜 Libro de Reclamaciones</h1>
                <p className="text-sm">CACHINA PE E.I.R.L. | RUC: 20613204106</p>
            </div>

            {/* ✅ Success & Error Messages */}
            {successMessage && (
                <div className="text-green-500 text-center mt-4">
                    <p>{successMessage}</p>
                    <strong>Tu código de reclamo: {submittedComplaintId}</strong>
                </div>
            )}
            {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}

            {/* ✅ Complaint Form */}
            <form onSubmit={handleSubmit} className="mt-4">
                {/* Complaint ID Display */}
                <div className="text-center mb-4">
                    <p className="text-gray-500 text-sm">ID de Reclamo: <strong>{formData.complaintId}</strong></p>
                </div>

                {/* 🔹 Consumer Identification */}
                <h2 className="text-lg font-semibold mb-2">1️⃣ Identificación del Consumidor</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre*" className="border p-2 rounded" required />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Apellido*" className="border p-2 rounded" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" className="border p-2 rounded" required />
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Número de teléfono*" className="border p-2 rounded" required />
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Domicilio*" className="border p-2 rounded" required />
                    <select name="documentType" value={formData.documentType} onChange={handleChange} className="border p-2 rounded" required>
                        <option value="">Tipo de documento*</option>
                        <option value="DNI">DNI</option>
                        <option value="Pasaporte">Pasaporte</option>
                    </select>
                    <input type="text" name="documentNumber" value={formData.documentNumber} onChange={handleChange} placeholder="Número de documento*" className="border p-2 rounded" required />
                </div>

                {/* 🔹 Contracted Service */}
                <h2 className="text-lg font-semibold mt-6 mb-2">2️⃣ Identificación del Bien Contratado</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select name="contractType" value={formData.contractType} onChange={handleChange} className="border p-2 rounded" required>
                        <option value="">Tipo de bien contratado*</option>
                        <option value="Producto">Producto</option>
                        <option value="Servicio">Servicio</option>
                    </select>
                    <input type="text" name="serviceId" value={formData.serviceId} onChange={handleChange} placeholder="ID o link del servicio o anuncio" className="border p-2 rounded" />
                </div>

                {/* 🔹 Complaint Details */}
                <h2 className="text-lg font-semibold mt-6 mb-2">3️⃣ Detalle de la Reclamación</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select name="complaintType" value={formData.complaintType} onChange={handleChange} className="border p-2 rounded" required>
                        <option value="">Tipo de reclamo*</option>
                        <option value="Reclamo">Reclamo</option>
                        <option value="Queja">Queja</option>
                    </select>
                </div>
                <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Detalle del reclamo o queja*" rows="4" className="border p-2 rounded w-full mt-4" required></textarea>

                {/* 🔹 Privacy Policy Checkbox */}
                <div className="mt-4 flex items-center">
                    <input type="checkbox" name="acceptedPrivacyPolicy" checked={formData.acceptedPrivacyPolicy} onChange={handleChange} className="mr-2" required />
                    <label className="text-sm">
                        Acepto la <a href="/politica-de-privacidad" className="text-blue-500 underline">Política de Privacidad</a>
                    </label>
                </div>

                {/* 🔹 Submit Button */}
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full">
                    Enviar Reclamo
                </button>
            </form>
        </div>
    );
};

export default LibroReclamaciones;
