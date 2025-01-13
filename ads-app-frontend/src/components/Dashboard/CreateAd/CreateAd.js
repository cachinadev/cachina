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
        contactNumber: "",
        cost: "",
        currency: "Soles",
        address: "",
        googleLink: "",
        pictures: [],
        deporteType: [],
        facilities: "",
        availableHours: "",
        website: "", // Optional website or social media link
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
            const requiredFields = ["title", "description", "category", "contactNumber"];
            const missingFields = requiredFields.filter(
                (field) => !formData[field] || formData[field].trim() === ""
            );

            if (missingFields.length > 0) {
                setError(`Please fill in: ${missingFields.join(", ")}`);
                return;
            }

            if (!/^\d{9}$/.test(formData.contactNumber)) {
                setError("Contact number must be a valid 9-digit number.");
                return;
            }

            await createAd(formData);

            setSuccess("Ad created successfully!");

            // Reset form
            setFormData({
                title: "",
                description: "",
                category: "",
                departamento: "",
                provincia: "",
                distrito: "",
                contactNumber: "",
                cost: "",
                currency: "Soles",
                address: "",
                googleLink: "",
                pictures: [],
                deporteType: [],
                facilities: "",
                availableHours: "",
                website: "",
            });

            fetchUserDetails();
            fetchUserAds();
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create ad. Please try again.");
            console.error("Create Ad Error:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Create New Ad</h1>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            {/* Common Fields */}
            <CommonFields
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
            />

            {/* Category-Specific Fields */}
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
                Submit
            </button>
        </form>
    );
};

export default CreateAd;
