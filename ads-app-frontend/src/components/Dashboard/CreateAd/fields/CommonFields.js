import React from "react";

const CommonFields = ({ formData, handleChange, handleFileChange }) => (
    <>
        <div>
            <label className="block text-gray-700">Title:</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
            />
        </div>
        <div>
            <label className="block text-gray-700">Description:</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
            ></textarea>
        </div>
        <div>
            <label className="block text-gray-700">Category:</label>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
            >
                <option value="">Select Category</option>
                <option value="Deporte">Deporte</option>
                <option value="Alquilo">Alquilo</option>
            </select>
        </div>
        <div>
            <label className="block text-gray-700">Upload Pictures:</label>
            <input
                type="file"
                name="pictures"
                onChange={handleFileChange}
                multiple
                className="w-full border p-2 rounded"
            />
        </div>
    </>
);

export default CommonFields;
