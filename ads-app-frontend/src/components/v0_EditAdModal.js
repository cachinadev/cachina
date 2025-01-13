import { useState, useEffect } from "react";
import API from "../../services/api";

const EditAdModal = ({ ad, isOpen, onClose, onAdUpdated }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    if (ad) {
      // Populate form data with ad details
      setFormData({
        title: ad.title || "",
        description: ad.description || "",
        category: ad.category || "",
        deporteType: ad.deporteType || "",
        alquiloType: ad.alquiloType || "",
        cost: ad.cost || "",
        currency: ad.currency || "Soles",
        departamento: ad.departamento || "",
        provincia: ad.provincia || "",
        distrito: ad.distrito || "",
        contactNumber: ad.contactNumber || "",
        address: ad.address || "",
        googleLink: ad.googleLink || "",
        areaTotal: ad.areaTotal || "",
        habitaciones: ad.habitaciones || "",
        planta: ad.planta || "",
        mobiliario: ad.mobiliario || "",
        equipamiento: ad.equipamiento || "",
        servicios: ad.servicios || "",
        estacionamiento: ad.estacionamiento || "Yes",
      });
    }
  }, [ad]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.title || !formData.description || !formData.category) {
      setError("Title, Description, and Category are mandatory.");
      return;
    }

    try {
      const response = await API.put(`/ads/${ad._id}`, formData);
      onAdUpdated(response.data.updatedAd); // Notify parent of the update
      onClose(); // Close modal
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update ad.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Edit Ad</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title</label>
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
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="Deporte">Deporte</option>
              <option value="Alquilo">Alquilo</option>
            </select>
          </div>

          {/* Conditional Fields */}
          {formData.category === "Deporte" && (
            <div>
              <label className="block text-gray-700">Sport Type</label>
              <select
                name="deporteType"
                value={formData.deporteType}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Sport</option>
                <option value="Futbol">Futbol</option>
                <option value="Voleibol">Voleibol</option>
                <option value="Basket">Basket</option>
                <option value="Natación">Natación</option>
                <option value="Futsal">Futsal</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
          )}

          {formData.category === "Alquilo" && (
            <div>
              <label className="block text-gray-700">Type of Place</label>
              <select
                name="alquiloType"
                value={formData.alquiloType}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Place</option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Cuarto">Cuarto</option>
                <option value="Cabaña">Cabaña</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-gray-700">Cost</label>
            <div className="flex gap-2">
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                className="border p-2 flex-grow rounded"
              />
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="border p-2 rounded"
              >
                <option value="Soles">Soles</option>
                <option value="Dollars">Dollars</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdModal;
