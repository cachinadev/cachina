import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../context/AuthContext"; // ✅ Use Auth Context
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const { login } = useAuth(); // ✅ Get login function from context
  const [formData, setFormData] = useState({ phoneNumber: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Redirect authenticated users away from login page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Validate form fields
  const validateForm = () => {
    if (!formData.phoneNumber || !formData.password) {
      setError("⚠️ Por favor, complete todos los campos.");
      return false;
    }
    if (!/^\d{9}$/.test(formData.phoneNumber)) {
      setError("⚠️ El número de teléfono debe tener exactamente 9 dígitos.");
      return false;
    }
    if (formData.password.length < 6) {
      setError("⚠️ La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    setError("");
    return true;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/login`,
        formData
      );
      const { token, user } = response.data;

      // ✅ Update global auth state
      login(user, token);

      setSuccess("✅ ¡Inicio de sesión exitoso! Redirigiendo...");
      setTimeout(() => router.push("/dashboard"), 500);
    } catch (err) {
      setError(err.response?.data?.message || "❌ Error al iniciar sesión. Inténtelo de nuevo.");
      console.error("Error de inicio de sesión:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🔑 Iniciar Sesión</h1>

      {/* 🔴 Error Message */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* ✅ Success Message */}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      {/* 📝 Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 📞 Phone Number Input */}
        <div>
          <label className="block text-gray-700 font-semibold">Número de Teléfono</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
            }}
            maxLength="9"
            placeholder="Ingrese su número de 9 dígitos"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* 🔑 Password Input */}
        <div>
          <label className="block text-gray-700 font-semibold">Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* 🔘 Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white px-4 py-3 rounded-md font-semibold transition duration-200 ${
            loading ? "cursor-not-allowed opacity-75" : "hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "⏳ Iniciando sesión..." : "🚀 Iniciar Sesión"}
        </button>
      </form>

      {/* 📌 Register Link (Fixed for Next.js) */}
      <p className="text-center text-gray-500 mt-4">
        ¿No tienes una cuenta?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
};

export default Login;
