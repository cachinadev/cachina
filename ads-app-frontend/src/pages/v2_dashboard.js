import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import EditAdModal from "../components/EditAdModal";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [ads, setAds] = useState([]); // Manage ads state globally
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("allAds"); // Manage tabs: All Ads / Create Ad

  // Fetch user details
  const fetchUserDetails = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    /*try {
      const response = await API.get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser({
        ...response.data,
        adsPosted: response.data.adsPosted || [],
        uniqueId: response.data.uniqueId || "Unknown",
      });
    */
    try {
        const response = await API.get("/users/me");
        setUser({
          ...response.data,
          adsPosted: response.data.adsPosted || [],
          uniqueId: response.data.uniqueId || "Unknown",
        });
    } catch (err) {
      console.error("Failed to fetch user details:", err.response?.data || err.message);
      localStorage.removeItem("token");
      router.push("/login");
    }
  };

  // Fetch user ads
  const fetchUserAds = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await API.get("/ads/my-ads", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAds(response.data);
    } catch (err) {
      console.error("Failed to fetch ads:", err.response?.data || err.message);
    }
  };

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/"); // Redirect to landing page
    router.reload(); // Refresh to show Login/Register buttons
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchUserDetails();
    fetchUserAds();
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
          <p>ID: {user.uniqueId}</p>
          <p>Plan: {user.planType}</p>
          <p>Ads Posted: {ads.length}</p> {/* Display ads count */}
          <nav className="mt-6">
            <ul>
              <li
                className={`p-2 cursor-pointer ${
                  activeTab === "allAds" ? "bg-gray-700 text-white" : "hover:bg-gray-600"
                }`}
                onClick={() => setActiveTab("allAds")}
              >
                All Ads
              </li>
              <li
                className={`p-2 cursor-pointer ${
                  activeTab === "createAd" ? "bg-gray-700 text-white" : "hover:bg-gray-600"
                }`}
                onClick={() => setActiveTab("createAd")}
              >
                Create Ad
              </li>
            </ul>
          </nav>
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 bg-gray-100 p-6">
          {activeTab === "allAds" && (
            <AllAds ads={ads} setAds={setAds} fetchUserDetails={fetchUserDetails} />
          )}
          {activeTab === "createAd" && (
            <CreateAd fetchUserDetails={fetchUserDetails} fetchUserAds={fetchUserAds} />
          )}
        </main>
      </div>
    </div>
  );
};

// Create Ad Component
// Create Ad Component
// Create Ad Component
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
      currency: "", // Default currency
      address: "",
      googleLink: "",
      estacionamiento: "Yes", // Default parking option
      areaTotal: "",
      habitaciones: "",
      planta: "",
      bano: "",
      mobiliario: "",
      equipamiento: "",
      servicios: "",
      pictures: [], // For image files
      alquiloType: "", // For "Alquilo" specific field
      deporteType: [], // For "Deporte" specific field
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const departamentosProvinciasDistritos = {
      Lima: {
          Lima: ["Miraflores", "San Isidro", "Surco"],
          Callao: ["Ventanilla", "Bellavista", "La Punta"],
      },
      Arequipa: {
          Arequipa: ["Cercado", "Yanahuara", "Cayma"],
          Islay: ["Mollendo", "Mejía", "Cocachacra"],
      },
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
      setFormData({ ...formData, pictures: Array.from(e.target.files) });
  };

  const handleCheckboxChange = (e, field) => {
      const { value, checked } = e.target;
      setFormData({
          ...formData,
          [field]: checked
              ? [...formData[field], value]
              : formData[field].filter((item) => item !== value),
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setSuccess("");

      if (!formData.title || !formData.description || !formData.category) {
          setError("Title, Description, and Category are mandatory.");
          return;
      }

      if (formData.category === "Deporte") {
          if (
              !formData.deporteType.length ||
              !formData.departamento ||
              !formData.provincia ||
              !formData.distrito ||
              !formData.contactNumber ||
              !formData.googleLink
          ) {
              setError("All mandatory fields for 'Deporte' must be filled.");
              return;
          }

          if (formData.contactNumber.length !== 9 || isNaN(formData.contactNumber)) {
              setError("Contact number must be 9 digits.");
              return;
          }
      }

      if (formData.category === "Alquilo") {
          if (
              !formData.alquiloType ||
              !formData.departamento ||
              !formData.provincia ||
              !formData.distrito ||
              !formData.contactNumber ||
              !formData.googleLink
          ) {
              setError("All mandatory fields for 'Alquilo' must be filled.");
              return;
          }

          if (formData.contactNumber.length !== 9 || isNaN(formData.contactNumber)) {
              setError("Contact number must be 9 digits.");
              return;
          }
      }

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
          if (key === "pictures") {
              value.forEach((file) => formDataToSend.append("images", file));
          } else {
              formDataToSend.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
          }
      });

      try {
          const response = await API.post("/ads/upload-images", formDataToSend, {
              headers: { "Content-Type": "multipart/form-data" },
          });

          setSuccess(response.data.message);
          setFormData({
              title: "",
              description: "",
              category: "",
              deporteType: [],
              departamento: "",
              provincia: "",
              distrito: "",
              contactNumber: "",
              cost: "",
              currency: "",
              address: "",
              googleLink: "",
              areaTotal: "",
              habitaciones: "",
              planta: "",
              bano: "",
              mobiliario: "",
              equipamiento: "",
              servicios: "",
              estacionamiento: "Yes",
              pictures: [],
              alquiloType: "",
          });

          fetchUserDetails();
          fetchUserAds();
      } catch (err) {
          setError(err.response?.data?.message || "Failed to create ad.");
      }
  };

  const renderDeporteFields = () => (
      <>
          <label className="block text-gray-700 mt-4">Sport Type:</label>
          <select
              name="deporteType"
              value={formData.deporteType}
              onChange={handleChange}
              className="w-full border p-2"
              required
          >
              <option value="">Select Sport</option>
              {["Futbol", "Voleibol", "Basket", "Natación", "Futsal", "Otros"].map((sport) => (
                  <option key={sport} value={sport}>
                      {sport}
                  </option>
              ))}
          </select>


          {renderLocationFields()}

          <label className="block text-gray-700 mt-4">Contact Number:</label>
          <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              maxLength="9"
              pattern="[0-9]{9}"
              className="w-full border p-2"
              required
          />

          <label className="block text-gray-700 mt-4">Cost:</label>
          <div className="flex gap-2">
              <input
                  type="number"
                  name="cost"
                  value={formData.cost}
                  onChange={handleChange}
                  className="border p-2 flex-grow"
              />
              <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="border p-2"
              >
                  <option value="Soles">Soles</option>
                  <option value="Dollars">Dollars</option>
              </select>
          </div>

          <label className="block text-gray-700 mt-4">Google Link:</label>
          <input
              type="text"
              name="googleLink"
              value={formData.googleLink}
              onChange={handleChange}
              className="w-full border p-2"
              required
          />
      </>
  );

  const renderAlquiloFields = () => (
      <>
          <label className="block text-gray-700 mt-4">Type of Place:</label>
          <select
              name="alquiloType"
              value={formData.alquiloType}
              onChange={handleChange}
              className="w-full border p-2"
              required
          >
              <option value="">Select Place</option>
              {["Casa", "Departamento", "Cuarto", "Cabaña", "Otros"].map((place) => (
                  <option key={place} value={place}>
                      {place}
                  </option>
              ))}
          </select>

          {renderLocationFields()}

          <label className="block text-gray-700 mt-4">Contact Number:</label>
          <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              maxLength="9"
              pattern="[0-9]{9}"
              className="w-full border p-2"
              required
          />

          <label className="block text-gray-700 mt-4">Cost:</label>
          <div className="flex gap-2">
              <input
                  type="number"
                  name="cost"
                  value={formData.cost}
                  onChange={handleChange}
                  className="border p-2 flex-grow"
              />
              <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="border p-2"
              >
                  <option value="Soles">Soles</option>
                  <option value="Dolares">Dolares</option>

              </select>
          </div>

          <label className="block text-gray-700 mt-4">Area Total (m²):</label>
          <input
              type="number"
              name="areaTotal"
              value={formData.areaTotal}
              onChange={handleChange}
              className="w-full border p-2"
          />

          <label className="block text-gray-700 mt-4">Número de Habitaciones:</label>
          <input
              type="number"
              name="habitaciones"
              value={formData.habitaciones}
              onChange={handleChange}
              className="w-full border p-2"
          />

          <label className="block text-gray-700 mt-4">Planta o Piso:</label>
          <input
              type="number"
              name="planta"
              value={formData.planta}
              onChange={handleChange}
              className="w-full border p-2"
          />

          <label className="block text-gray-700 mt-4">Baño:</label>
          <select
              name="bano"
              value={formData.bano}
              onChange={handleChange}
              className="w-full border p-2"
          >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>

          <label className="block text-gray-700 mt-4">Mobiliario:</label>
          <input
              type="text"
              name="mobiliario"
              value={formData.mobiliario}
              onChange={handleChange}
              maxLength="255"
              className="w-full border p-2"
          />

          <label className="block text-gray-700 mt-4">Equipamiento:</label>
          <input
              type="text"
              name="equipamiento"
              value={formData.equipamiento}
              onChange={handleChange}
              maxLength="255"
              className="w-full border p-2"
          />

          <label className="block text-gray-700 mt-4">Servicios:</label>
          <input
              type="text"
              name="servicios"
              value={formData.servicios}
              onChange={handleChange}
              maxLength="255"
              className="w-full border p-2"
          />
      </>
  );

  const renderLocationFields = () => (
      <>
          <label htmlFor="departamento" className="block text-gray-700 mt-4">
              Departamento:
          </label>
          <select
              id="departamento"
              name="departamento"
              value={formData.departamento}
              onChange={(e) => {
                  setFormData({
                      ...formData,
                      departamento: e.target.value,
                      provincia: "",
                      distrito: "",
                  });
              }}
              className="w-full border p-2"
              required
          >
              <option value="">Select Departamento</option>
              {Object.keys(departamentosProvinciasDistritos).map((dep) => (
                  <option key={dep} value={dep}>
                      {dep}
                  </option>
              ))}
          </select>

          <label htmlFor="provincia" className="block text-gray-700 mt-4">
              Provincia:
          </label>
          <select
              id="provincia"
              name="provincia"
              value={formData.provincia}
              onChange={(e) => {
                  setFormData({
                      ...formData,
                      provincia: e.target.value,
                      distrito: "",
                  });
              }}
              className="w-full border p-2"
              required
              disabled={!formData.departamento}
          >
              <option value="">Select Provincia</option>
              {formData.departamento &&
                  Object.keys(departamentosProvinciasDistritos[formData.departamento]).map((prov) => (
                      <option key={prov} value={prov}>
                          {prov}
                      </option>
                  ))}
          </select>

          <label htmlFor="distrito" className="block text-gray-700 mt-4">
              Distrito:
          </label>
          <select
              id="distrito"
              name="distrito"
              value={formData.distrito}
              onChange={handleChange}
              className="w-full border p-2"
              required
              disabled={!formData.provincia}
          >
              <option value="">Select Distrito</option>
              {formData.provincia &&
                  departamentosProvinciasDistritos[formData.departamento][formData.provincia].map((dist) => (
                      <option key={dist} value={dist}>
                          {dist}
                      </option>
                  ))}
          </select>
      </>
  );

  return (
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Ad</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <label className="block text-gray-700">Title:</label>
          <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 mb-4"
              required
          />

          <label className="block text-gray-700">Description:</label>
          <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="w-full border p-2 mb-4"
                          required
                      />
          
                      <label className="block text-gray-700">Category:</label>
                      <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full border p-2 mb-4"
                          required
                      >
                          <option value="">Select Category</option>
                          <option value="Deporte">Deporte</option>
                          <option value="Alquilo">Alquilo</option>
                      </select>
          
                      {/* Render additional fields based on category */}
                      {formData.category === "Deporte" && renderDeporteFields()}
                      {formData.category === "Alquilo" && renderAlquiloFields()}
          
                      <label className="block text-gray-700">Pictures:</label>
                      <input
                          type="file"
                          name="pictures"
                          onChange={handleFileChange}
                          multiple
                          className="w-full border p-2 mb-4"
                      />
          
                      <button
                          type="submit"
                          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      >
                          Submit
                      </button>
                  </form>
              );
          };

// All Ads Component
const AllAds = ({ ads, setAds, fetchUserDetails }) => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDeleteAd = async (adId) => {
    if (!window.confirm("Are you sure you want to delete this ad?")) return;

    try {
      const response = await API.delete(`/ads/${adId}`);
      alert(response.data.message);
      setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId));
      await fetchUserDetails();
    } catch (err) {
      console.error("Error deleting ad:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to delete ad");
    }
  };

  const handleEditAd = (ad) => {
    setSelectedAd(ad);
    setIsEditModalOpen(true);
  };

  const handleAdUpdated = (updatedAd) => {
    setAds((prevAds) =>
      prevAds.map((ad) => (ad._id === updatedAd._id ? updatedAd : ad))
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Ads</h2>
      {ads.length === 0 ? (
        <p>You have no ads yet.</p>
      ) : (
        <ul className="space-y-4">
          {ads.map((ad) => (
            <li key={ad._id} className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-bold">{ad.title}</h3>
              <p>{ad.description}</p>
              <p className="text-sm text-gray-500">Category: {ad.category}</p>

              {/* Render images */}
              {ad.pictures && ad.pictures.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {ad.pictures.map((pic, index) => (
                    <img
                      key={index}
                      src={`http://localhost:5000${pic}`} // Full path to image
                      alt={`Ad ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  ))}
                </div>
              )}

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEditAd(ad)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAd(ad._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedAd && (
        <EditAdModal
          ad={selectedAd}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onAdUpdated={handleAdUpdated}
        />
      )}
    </div>
  );
};

export default Dashboard;