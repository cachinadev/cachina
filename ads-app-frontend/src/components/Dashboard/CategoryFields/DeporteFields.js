import React from "react";
import RenderLocationFields from "../RenderLocationFields";

const DeporteFields = ({ formData, handleChange, handleCheckboxChange }) => {
    return (
        <>
            {/* Sport Type Selection */}
            <label className="block text-gray-700 font-semibold mb-2">Select Sport Types:</label>
            <div className="grid grid-cols-2 gap-2 mb-4">
                {["Futbol", "Voleibol", "Basket", "Natación", "Futsal", "Otros"].map((sport) => (
                    <label key={sport} className="flex items-center">
                        <input
                            type="checkbox"
                            name="deporteType"
                            value={sport}
                            checked={formData.deporteType?.includes(sport) || false}
                            onChange={(e) => handleCheckboxChange(e, "deporteType")}
                            className="mr-2"
                        />
                        {sport}
                    </label>
                ))}
            </div>

            {/* Location Fields */}
            <RenderLocationFields formData={formData} handleChange={handleChange} />

            {/* Contact Number */}
            <label className="block text-gray-700 font-semibold mb-2">Contact Number:</label>
            <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber || ""}
                onChange={handleChange}
                maxLength="9"
                pattern="\d{9}" // Matches exactly 9 digits
                placeholder="Enter 9-digit contact number"
                className="w-full border p-2 mb-4 rounded"
                required
            />

            {/* Cost Input */}
            <label className="block text-gray-700 font-semibold mb-2">Cost:</label>
            <div className="flex gap-2 mb-4">
                <input
                    type="number"
                    name="cost"
                    value={formData.cost || ""}
                    onChange={handleChange}
                    min="0"
                    placeholder="Enter cost"
                    className="border p-2 flex-grow rounded"
                />
                <select
                    name="currency"
                    value={formData.currency || "Soles"}
                    onChange={handleChange}
                    className="border p-2 rounded"
                >
                    <option value="Soles">Soles</option>
                    <option value="Dollars">Dollars</option>
                </select>
            </div>

            {/* Google Maps Link */}
            <label className="block text-gray-700 font-semibold mb-2">Google Maps Link:</label>
            <input
                type="url"
                name="googleLink"
                value={formData.googleLink || ""}
                onChange={handleChange}
                placeholder="Paste Google Maps link"
                className="w-full border p-2 mb-4 rounded"
            />

            {/* Facilities Description */}
            <label className="block text-gray-700 font-semibold mb-2">Facilities Description:</label>
            <textarea
                name="facilities"
                value={formData.facilities || ""}
                onChange={handleChange}
                placeholder="Describe facilities available (e.g., locker rooms, showers, lighting)"
                className="w-full border p-2 mb-4 rounded"
            />

            {/* Available Hours */}
            <label className="block text-gray-700 font-semibold mb-2">Available Hours:</label>
            <input
                type="text"
                name="availableHours"
                value={formData.availableHours || ""}
                onChange={handleChange}
                placeholder="e.g., 9 AM - 9 PM"
                className="w-full border p-2 mb-4 rounded"
            />

            {/* Website or Social Media URL */}
            <label className="block text-gray-700 font-semibold mb-2">Website or Social Media URL:</label>
            <input
                type="url"
                name="website"
                value={formData.website || ""}
                onChange={handleChange}
                placeholder="Paste website or social media link"
                className="w-full border p-2 mb-4 rounded"
            />
        </>
    );
};

export default DeporteFields;