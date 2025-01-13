import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Registration = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    type: "personal", // Default to personal
    name: "",
    companyName: "",
    taxId: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uniqueId, setUniqueId] = useState(null); // Store unique ID
  const [loading, setLoading] = useState(false); // Loading state for button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleType = () => {
    setFormData({
      ...formData,
      type: formData.type === "personal" ? "company" : "personal",
      name: "", // Reset name field
      companyName: "", // Reset company name field
      taxId: "", // Reset tax ID field
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Form Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.type === "personal" && (!formData.name || !formData.phone || !formData.password)) {
      setError("All fields are required for personal registration");
      setLoading(false);
      return;
    }

    if (
      formData.type === "company" &&
      (!formData.companyName || !formData.taxId || !formData.phone || !formData.password)
    ) {
      setError("All fields are required for company registration");
      setLoading(false);
      return;
    }

    if (formData.phone.length !== 9 || isNaN(formData.phone)) {
      setError("Phone number must be 9 digits");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        type: formData.type,
        name: formData.type === "personal" ? formData.name : formData.companyName,
        taxId: formData.type === "company" ? formData.taxId : undefined,
        phoneNumber: formData.phone, // Backend expects phoneNumber
        password: formData.password,
      };

      const response = await axios.post(
        "http://192.168.18.27:5000/api/users/register",
        payload
      );

      const { token, user, message } = response.data;

      // Save the token and user details to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Update success message and uniqueId
      setSuccess(message || "Registration successful!");
      setUniqueId(user.uniqueId);

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      console.error("Registration error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && (
        <div className="text-green-500 mb-4">
          <p>{success}</p>
          {uniqueId && (
            <p>
              Your Unique ID: <strong>{uniqueId}</strong>
            </p>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Toggle Between Personal and Company */}
        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-700">Register as a company?</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={formData.type === "company"}
              onChange={handleToggleType}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>
        </div>

        {/* Name or Company Name */}
        <div>
          <label className="block text-gray-700">
            {formData.type === "personal" ? "Name" : "Company Name"}
          </label>
          <input
            type="text"
            name={formData.type === "personal" ? "name" : "companyName"}
            value={formData.type === "personal" ? formData.name : formData.companyName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Tax ID (RUC) for Companies */}
        {formData.type === "company" && (
          <div>
            <label className="block text-gray-700">Tax ID (RUC)</label>
            <input
              type="text"
              name="taxId"
              value={formData.taxId}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2"
            />
          </div>
        )}

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={9}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Registration;
