import React, { useState } from "react";
import CommonFields from "./CreateAd/fields/CommonFields";
import CategoryFields from "./CreateAd/fields/CategoryFields";
import { editAd } from "../../services/api";

const EditAdModal = ({ ad, isOpen, onClose, onAdUpdated }) => {
  const [formData, setFormData] = useState({ ...ad });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

    try {
      const formattedData = {
        ...formData,
        pictures: formData.pictures || [],
      };

      await editAd(ad._id, formattedData);
      onAdUpdated(formattedData);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update ad. Please try again.");
      console.error("Edit Ad Error:", err.response?.data || err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-3/4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Ad</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Render Common Fields */}
          <CommonFields formData={formData} handleChange={handleChange} />

          {/* Render Category-Specific Fields Dynamically */}
          <CategoryFields
            category={formData.category}
            formData={formData}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
          />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdModal;
