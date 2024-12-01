import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
    const router = useRouter(); // Next.js router for navigation
    const [formData, setFormData] = useState({ phoneNumber: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Basic validation
        if (!formData.phoneNumber || !formData.password) {
            setError("Please fill in all fields.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/users/login", formData);

            setSuccess(response.data.message);
            setError("");

            // Save the token to localStorage
            localStorage.setItem("token", response.data.token);

            // Redirect to the dashboard
            router.push("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Please try again.");
            console.error("Login error:", err.response || err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-lg bg-white">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="phoneNumber" className="block text-gray-700">
                        Phone Number
                    </label>
                    <input
                        id="phoneNumber"
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-md p-2"
                        placeholder="Enter your phone number"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-md p-2"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full bg-blue-500 text-white px-4 py-2 rounded-md ${
                        loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"
                    }`}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-500 hover:underline">
                    Register here
                </a>
            </p>
        </div>
    );
};

export default Login;
