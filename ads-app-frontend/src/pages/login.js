import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ phoneNumber: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirigir a usuarios autenticados fuera de la página de inicio de sesión
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validar formulario
  const validateForm = () => {
    if (!formData.phoneNumber || !formData.password) {
      setError("Por favor, complete todos los campos.");
      return false;
    }
    if (!/^\d{9}$/.test(formData.phoneNumber)) {
      setError("El número de teléfono debe tener exactamente 9 dígitos.");
      return false;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    setError("");
    return true;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", formData);

      const { token, user } = response.data;

      // Guardar token y detalles del usuario en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setSuccess("¡Inicio de sesión exitoso! Redirigiendo...");
      setTimeout(() => router.push("/dashboard"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Error al iniciar sesión. Inténtelo de nuevo.");
      console.error("Error de inicio de sesión:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Número de Teléfono</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength="9"
            placeholder="Ingrese su número de 9 dígitos"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
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

        <button
          type="submit"
          className={`w-full bg-blue-500 text-white px-4 py-3 rounded-md font-semibold transition duration-200 ${
            loading ? "cursor-not-allowed opacity-75" : "hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
        </button>
      </form>

      <p className="text-center text-gray-500 mt-4">
        ¿No tienes una cuenta?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Regístrate aquí
        </a>
      </p>
    </div>
  );
};

export default Login;
