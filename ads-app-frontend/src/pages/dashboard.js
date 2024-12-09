import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import EditAdModal from "../components/EditAdModal";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [ads, setAds] = useState([]); // Manage ads state globally
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("allAds"); // Manage tabs: All Ads / Create Ad

    // Fetch user and ads data
    const fetchUserDetails = async () => {
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

    const fetchUserAds = async () => {
        try {
            const response = await API.get("/ads/my-ads");
            setAds(response.data);
        } catch (err) {
            console.error("Failed to fetch ads:", err.response?.data || err.message);
        }
    };

    useEffect(() => {
        fetchUserDetails();
        fetchUserAds();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

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
                <aside className="w-1/4 bg-gray-800 text-white p-4">
                    <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
                    <p>ID: {user.uniqueId}</p>
                    <p>Plan: {user.planType}</p>
                    <p>Ads Posted: {ads.length}</p> {/* Display ads count */}
                    <nav className="mt-6">
                        <ul>
                            <li
                                className={`p-2 cursor-pointer ${
                                    activeTab === "allAds" ? "bg-gray-700" : ""
                                }`}
                                onClick={() => setActiveTab("allAds")}
                            >
                                All Ads
                            </li>
                            <li
                                className={`p-2 cursor-pointer ${
                                    activeTab === "createAd" ? "bg-gray-700" : ""
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

                <main className="w-3/4 bg-gray-100 p-6">
                    {activeTab === "allAds" && <AllAds ads={ads} setAds={setAds} fetchUserDetails={fetchUserDetails} />}
                    {activeTab === "createAd" && (
                        <CreateAd fetchUserDetails={fetchUserDetails} fetchUserAds={fetchUserAds} />
                    )}
                </main>
            </div>
            <footer className="bg-gray-800 text-white text-center py-2">
                © 2024  CACHINA PE. All Rights Reserved.
            </footer>
        </div>
    );
};

// All Ads Components

const AllAds = ({ ads, setAds, fetchUserDetails }) => {
    const [selectedAd, setSelectedAd] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleDeleteAd = async (adId) => {
        if (!window.confirm("Are you sure you want to delete this ad?")) return;

        try {
            const response = await API.delete(`/ads/${adId}`);
            alert(response.data.message); // Show success message
            setAds((prevAds) => prevAds.filter((ad) => ad._id !== adId)); // Update the state
            await fetchUserDetails(); // Refresh user data
        } catch (err) {
            console.error("Error deleting ad:", err.response?.data || err.message);
            alert(err.response?.data?.message || "Failed to delete ad"); // Show error message
        }
    };

    const handleEditAd = (ad) => {
        setSelectedAd(ad); // Set the selected ad for editing
        setIsEditModalOpen(true);
    };

    const handleAdUpdated = (updatedAd) => {
        setAds((prevAds) =>
            prevAds.map((ad) => (ad._id === updatedAd._id ? updatedAd : ad))
        );
    };

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-xl font-bold mb-4">Your Ads</h2>
            {ads.length === 0 ? (
                <p>You have no ads yet.</p>
            ) : (
                <ul className="space-y-4 flex-1 overflow-y-auto">
                    {ads.map((ad) => (
                        <li key={ad._id} className="p-4 border rounded-md shadow-sm">
                            <h3 className="text-lg font-bold">{ad.title}</h3>
                            <p>{ad.description}</p>
                            <p className="text-sm text-gray-500">Category: {ad.category}</p>
                            <div className="mt-2 flex gap-2">
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
        currency: "Soles",
        address: "",
        googleLink: "",
        areaTotal: "",
        habitaciones: "",
        planta: "",
        bano: "",
        mobiliario: "",
        equipamiento: "",
        servicios: "",
        pictures: [],
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
        setFormData({ ...formData, pictures: e.target.files });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear any previous error messages
        setSuccess(""); // Clear any previous success messages
    
        // Check for mandatory fields
        if (!formData.title || !formData.description) {
            setError("Title and Description are mandatory fields.");
            return;
        }
    
        try {
            // Send form data to the backend
            const response = await API.post("/ads", formData);
            setSuccess(response.data.message || "Ad created successfully!");
    
            // Reset form data
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
                areaTotal: "",
                habitaciones: "",
                planta: "",
                bano: "",
                mobiliario: "",
                equipamiento: "",
                servicios: "",
                pictures: [],
            });
            fetchUserDetails();
            fetchUserAds();
        } catch (err) {
            console.error("Error creating ad:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Failed to create ad.");
        }
    };
         

    const renderFormFields = () => {
        if (formData.category === "Alquilo") {
            return (
                <>
                    <label htmlFor="departamento">Departamento:</label>
                    <select
                        id="departamento"
                        name="departamento"
                        value={formData.departamento}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                    >
                        <option value="">Seleccione</option>
                        {Object.keys(departamentosProvinciasDistritos).map((dep) => (
                            <option key={dep} value={dep}>
                                {dep}
                            </option>
                        ))}
                    </select>
                    <br />

                    <label htmlFor="provincia">Provincia:</label>
                    <select
                        id="provincia"
                        name="provincia"
                        value={formData.provincia}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                        disabled={!formData.departamento}
                    >
                        <option value="">Seleccione</option>
                        {formData.departamento &&
                            Object.keys(departamentosProvinciasDistritos[formData.departamento]).map((prov) => (
                                <option key={prov} value={prov}>
                                    {prov}
                                </option>
                            ))}
                    </select>
                    <br />

                    <label htmlFor="distrito">Distrito:</label>
                    <select
                        id="distrito"
                        name="distrito"
                        value={formData.distrito}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                        disabled={!formData.provincia}
                    >
                        <option value="">Seleccione</option>
                        {formData.provincia &&
                            departamentosProvinciasDistritos[formData.departamento][formData.provincia].map((dist) => (
                                <option key={dist} value={dist}>
                                    {dist}
                                </option>
                            ))}
                    </select>
                    <br />

                    <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Número de Contacto"
                        maxLength="9"
                        pattern="[0-9]{9}"
                        className="w-full border p-2"
                        required
                    />
                    <br />

                    <input
                        type="number"
                        id="cost"
                        name="cost"
                        value={formData.cost}
                        onChange={handleChange}
                        placeholder="Costo por mes"
                        className="w-full border p-2"
                    />
                    <label>
                        <input
                            type="radio"
                            name="currency"
                            value="Soles"
                            checked={formData.currency === "Soles"}
                            onChange={handleChange}
                        />{" "}
                        Soles
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="currency"
                            value="Dollars"
                            checked={formData.currency === "Dollars"}
                            onChange={handleChange}
                        />{" "}
                        Dólares
                    </label>
                    <br />

                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Dirección"
                        className="w-full border p-2"
                    />
                    <br />

                    <input
                        type="url"
                        name="googleLink"
                        value={formData.googleLink}
                        onChange={handleChange}
                        placeholder="Enlace de Google Maps"
                        className="w-full border p-2"
                    />
                    <br />

                    <input
                        type="text"
                        name="areaTotal"
                        value={formData.areaTotal}
                        onChange={handleChange}
                        placeholder="Área total"
                        className="w-full border p-2"
                    />
                    <br />

                    <input
                        type="number"
                        name="habitaciones"
                        value={formData.habitaciones}
                        onChange={handleChange}
                        placeholder="Número de habitaciones"
                        className="w-full border p-2"
                    />
                    <br />

                    <input
                        type="number"
                        name="planta"
                        value={formData.planta}
                        onChange={handleChange}
                        placeholder="Planta o piso"
                        className="w-full border p-2"
                    />
                    <br />

                    <input
                        type="text"
                        name="bano"
                        value={formData.bano}
                        onChange={handleChange}
                        placeholder="Baño"
                        className="w-full border p-2"
                    />
                    <br />

                    <input
                        type="text"
                        name="mobiliario"
                        value={formData.mobiliario}
                        onChange={handleChange}
                        placeholder="Mobiliario"
                        className="w-full border p-2"
                    />
                    <br />

                    <input
                        type="text"
                        name="equipamiento"
                        value={formData.equipamiento}
                        onChange={handleChange}
                        placeholder="Equipamiento"
                        className="w-full border p-2"
                    />
                    <br />

                    <input
                        type="text"
                        name="servicios"
                        value={formData.servicios}
                        onChange={handleChange}
                        placeholder="Servicios"
                        className="w-full border p-2"
                    />
                    <br />

                    <input
                        type="file"
                        name="pictures"
                        multiple
                        onChange={handleFileChange}
                        accept="image/*"
                        className="w-full border p-2"
                    />
                </>
            );
        }
        return null;
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Create a New Ad</h2>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
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
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border p-2"
                >
                    <option value="">Select Category</option>
                    <option value="Alquilo">Alquilo</option>
                    <option value="Deporte">Deporte</option>
                </select>
                {renderFormFields()}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create Ad
                </button>
            </form>
        </div>
    );
};

export default Dashboard;
