import React from "react";
import RenderLocationFields from "../RenderLocationFields";

const AgriculturaFields = ({ formData, handleChange, handleCheckboxChange }) => {
    return (
        <>
            {/* Agriculture Type Selection */}
            <label className="block text-gray-700 font-semibold mb-2">Select Agricultura Types:</label>
            <div className="grid grid-cols-2 gap-2 mb-4">
                {["Frutas", "Verduras", "Tubérculos", "Granos Andinos", "Otros"].map((type) => (
                    <label key={type} className="flex items-center">
                        <input
                            type="checkbox"
                            name="agriculturaType"
                            value={type}
                            checked={formData.agriculturaType?.includes(type) || false}
                            onChange={(e) => handleCheckboxChange(e, "agriculturaType")}
                            className="mr-2"
                        />
                        {type}
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

            {/* Secondary Contact Number (optional with checkbox) */}
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    name="hasSecondaryContact"
                    checked={formData.hasSecondaryContact || false}
                    onChange={(e) => handleChange({ target: { name: "hasSecondaryContact", value: e.target.checked } })}
                    className="mr-2"
                />
                <label className="text-gray-700">Add Secondary Contact Number</label>
            </div>

            {formData.hasSecondaryContact && (
                <input
                    type="text"
                    name="secondaryContact"
                    value={formData.secondaryContact || ""}
                    onChange={handleChange}
                    maxLength="9"
                    pattern="\d{9}"
                    placeholder="Enter 9-digit secondary contact number"
                    className="w-full border p-2 mb-4 rounded"
                />
            )}

            {/* Social Media Links */}
            <label className="block text-gray-700 font-semibold mb-2">Facebook (Optional):</label>
            <input
                type="url"
                name="facebook"
                value={formData.facebook || ""}
                onChange={handleChange}
                placeholder="Paste Facebook page URL"
                className="w-full border p-2 mb-4 rounded"
            />

            <label className="block text-gray-700 font-semibold mb-2">Instagram (Optional):</label>
            <input
                type="url"
                name="instagram"
                value={formData.instagram || ""}
                onChange={handleChange}
                placeholder="Paste Instagram profile URL"
                className="w-full border p-2 mb-4 rounded"
            />

            <label className="block text-gray-700 font-semibold mb-2">TikTok (Optional):</label>
            <input
                type="url"
                name="tiktok"
                value={formData.tiktok || ""}
                onChange={handleChange}
                placeholder="Paste TikTok profile URL"
                className="w-full border p-2 mb-4 rounded"
            />

            {/* Website Link */}
            <label className="block text-gray-700 font-semibold mb-2">Website (Optional):</label>
            <input
                type="url"
                name="website"
                value={formData.website || ""}
                onChange={handleChange}
                placeholder="Paste website URL"
                className="w-full border p-2 mb-4 rounded"
            />
        </>
    );
};

export default AgriculturaFields;
