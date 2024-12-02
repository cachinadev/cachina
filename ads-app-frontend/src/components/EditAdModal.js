import { useState, useEffect } from "react";
import API from "../services/api";

const EditAdModal = ({ ad, isOpen, onClose, onAdUpdated }) => {
    const [formData, setFormData] = useState({ ...ad });
    const [error, setError] = useState("");

    useEffect(() => {
        // Reset form data when ad changes
        if (ad) {
            setFormData({ ...ad });
        }
    }, [ad]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.put(`/ads/${ad._id}`, formData); // API call to update ad
            onAdUpdated(response.data.updatedAd); // Notify parent of updated ad
            console.log("Updated ad sent to parent:", response.data.updatedAd);
            onClose(); // Close the modal
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update ad");
            console.error("Failed to update ad:", err.response?.data || err.message);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-1/2">
                <h2 className="text-xl font-bold mb-4">Edit Ad</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={formData.title || ""}
                        onChange={handleChange}
                        placeholder="Title"
                        className="w-full border p-2"
                    />
                    <textarea
                        name="description"
                        value={formData.description || ""}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full border p-2"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Update
                    </button>
                    <button
                        onClick={onClose}
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditAdModal;
