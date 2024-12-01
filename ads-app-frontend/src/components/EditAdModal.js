import { useState } from "react";
import API from "../services/api";

const EditAdModal = ({ ad, isOpen, onClose, onAdUpdated }) => {
    const [formData, setFormData] = useState({ ...ad });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.put(`/ads/${ad._id}`, formData);
            onAdUpdated(response.data); // Update the ad in the parent component
            onClose(); // Close the modal
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update ad");
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
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="w-full border p-2"
                    />
                    <textarea
                        name="description"
                        value={formData.description}
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

const handleSaveChanges = async () => {
    try {
        const response = await API.put(`/ads/${ad._id}`, formData); // Send the updated ad details
        onAdUpdated(response.data.updatedAd); // Update the parent state
        onClose(); // Close the modal
    } catch (err) {
        console.error("Failed to update ad:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Failed to update ad");
    }
};

const handleDeleteAd = async (adId) => {
    if (!window.confirm("Are you sure you want to delete this ad?")) return;

    try {
        const response = await API.delete(`/ads/${adId}`);
        alert(response.data.message);
        setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId)); // Update state
    } catch (err) {
        console.error("Error deleting ad:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Failed to delete ad");
    }
};


export default EditAdModal;

