import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ phoneNumber: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect logged-in users away from the login page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields
  const validateForm = () => {
    if (!formData.phoneNumber || !formData.password) {
      setError("Please fill in all fields.");
      return false;
    }
    if (!/^\d{9}$/.test(formData.phoneNumber)) {
      setError("Phone number must be exactly 9 digits.");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", formData);

      const { token, user } = response.data;

      // Save token and user details to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setSuccess("Login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
      console.error("Login error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength="9"
            placeholder="Enter your 9-digit phone number"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 text-white px-4 py-3 rounded-md font-semibold transition duration-200 ${
            loading ? "cursor-not-allowed opacity-75" : "hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-gray-500 mt-4">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Register here
        </a>
      </p>
    </div>
  );
};

export default Login;
