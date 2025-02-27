import React, { useState, useEffect } from "react";
import CommonFields from "./CreateAd/fields/CommonFields";
import CategoryFields from "./CreateAd/fields/CategoryFields";
import { editAd, uploadImages } from "../../services/api";

const EditAdModal = ({ ad, isOpen, onClose, onAdUpdated }) => {
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
    currency: "Cotizar",
    googleLink: "",
    pictures: [],
    availableHours: "",
    website: "",
    paymentMethods: "",
    availableDays: "",
  });

  const [error, setError] = useState("");
  const [newImages, setNewImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  // ✅ Reset formData whenever `ad` changes
  useEffect(() => {
    if (ad) {
      setFormData({
        ...ad,
        pictures: ad.pictures || [],
      });
      setNewImages([]);
      setImagePreviews([]);
    }
  }, [ad]);

  // ✅ Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ✅ Remove existing images
  const handleRemoveImage = (imageToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      pictures: prevData.pictures.filter((img) => img !== imageToRemove),
    }));
  };

  // ✅ Handle new image uploads with previews
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setNewImages([...newImages, ...files]);

    // ✅ Generate preview for UI
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...filePreviews]);
  };

  // ✅ Submit edited ad
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let updatedPictures = [...formData.pictures];

      if (newImages.length > 0) {
        const uploadedPictures = await uploadImages(ad._id, newImages);
        updatedPictures = [...updatedPictures, ...uploadedPictures];
      }

      const formattedData = { ...formData, pictures: updatedPictures };

      console.log("📤 Updating Ad with Data:", formattedData);
      await editAd(ad._id, formattedData);
      console.log("✅ Ad Updated Successfully");

      onAdUpdated(formattedData);
      handleClose();
    } catch (err) {
      setError(err.response?.data?.message || "Error al actualizar el anuncio. Intente nuevamente.");
      console.error("❌ Edit Ad Error:", err.response?.data || err.message);
    }
  };

  // ✅ Reset modal state when closing
  const handleClose = () => {
    setNewImages([]);
    setImagePreviews([]);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-3/4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center">✏️ Editar Anuncio</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 max-h-[80vh] overflow-y-auto">
          {/* 🔹 Common Fields */}
          <CommonFields formData={formData} handleChange={handleChange} />

          {/* 🔹 Category-Specific Fields */}
          <CategoryFields category={formData.category} formData={formData} handleChange={handleChange} />

          {/* 🔹 Image Management */}
          <div>
            <h3 className="font-bold mb-2">📸 Imágenes del Anuncio</h3>

            {/* ✅ Display Existing Images */}
            <div className="grid grid-cols-3 gap-4">
              {formData.pictures.map((pic, index) => (
                <div key={index} className="relative">
                  <img
                    src={`http://localhost:5000${pic}`}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-32 object-cover rounded-md shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(pic)}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full text-xs shadow-md"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>

            {/* ✅ Display New Image Previews */}
            <div className="grid grid-cols-3 gap-4 mt-3">
              {imagePreviews.map((preview, index) => (
                <img key={index} src={preview} alt={`Preview ${index + 1}`} className="w-full h-32 object-cover rounded-md shadow-md" />
              ))}
            </div>

            {/* ✅ Upload New Images */}
            <label className="cursor-pointer bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-all inline-block mt-4">
              📂 Seleccionar Imágenes
              <input type="file" multiple accept="image/png, image/jpeg, image/jpg" onChange={handleImageUpload} className="hidden" />
            </label>

            {/* ✅ Show number of selected files */}
            {newImages.length > 0 ? (
              <p className="mt-2 text-sm text-gray-600">{newImages.length} archivo(s) seleccionado(s)</p>
            ) : (
              <p className="mt-2 text-sm text-gray-500">Ningún archivo seleccionado</p>
            )}
          </div>

          {/* 🔹 Action Buttons */}
          <div className="flex justify-end gap-4">
            <button type="button" onClick={handleClose} className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">
              ❌ Cancelar
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              💾 Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdModal;
