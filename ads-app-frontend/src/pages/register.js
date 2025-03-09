import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Registration = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    type: "personal", // Predeterminado a personal
    name: "",
    companyName: "",
    taxId: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Alternar visibilidad de contraseña
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uniqueId, setUniqueId] = useState(null); // Guardar ID único
  const [loading, setLoading] = useState(false); // Estado de carga para el botón

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleType = () => {
    setFormData({
      ...formData,
      type: formData.type === "personal" ? "company" : "personal",
      name: "",
      companyName: "",
      taxId: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validación del formulario
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    if (formData.type === "personal" && (!formData.name || !formData.phone || !formData.password)) {
      setError("Todos los campos son obligatorios para el registro personal.");
      setLoading(false);
      return;
    }

    if (
      formData.type === "company" &&
      (!formData.companyName || !formData.taxId || !formData.phone || !formData.password)
    ) {
      setError("Todos los campos son obligatorios para el registro de empresas.");
      setLoading(false);
      return;
    }

    if (formData.phone.length !== 9 || isNaN(formData.phone)) {
      setError("El número de teléfono debe tener 9 dígitos.");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        type: formData.type,
        name: formData.type === "personal" ? formData.name : formData.companyName,
        taxId: formData.type === "company" ? formData.taxId : undefined,
        phoneNumber: formData.phone, // El backend espera phoneNumber
        password: formData.password,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/register`,
        payload
    );    

      const { token, user, message } = response.data;

      // Guardar token y detalles del usuario en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Actualizar mensaje de éxito e ID único
      setSuccess(message || "¡Registro exitoso!");
      setUniqueId(user.uniqueId);

      // Redirigir al dashboard después de 2 segundos
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Error al registrarse.");
      console.error("Error de registro:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Registro</h1>
      
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && (
        <div className="text-green-500 text-center mb-4">
          <p>{success}</p>
          {uniqueId && (
            <p>
              Tu ID único: <strong>{uniqueId}</strong>
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Alternar entre Persona y Empresa */}
        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-700">¿Registrar como empresa?</label>
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

        {/* Nombre o Nombre de Empresa */}
        <div>
          <label className="block text-gray-700">
            {formData.type === "personal" ? "Nombre" : "Nombre de la Empresa"}
          </label>
          <input
            type="text"
            name={formData.type === "personal" ? "name" : "companyName"}
            value={formData.type === "personal" ? formData.name : formData.companyName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        {/* RUC para Empresas */}
        {formData.type === "company" && (
          <div>
            <label className="block text-gray-700">RUC</label>
            <input
              type="text"
              name="taxId"
              value={formData.taxId}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2"
            />
          </div>
        )}

{/* Número de Teléfono */}
<div>
  <label className="block text-gray-700">Teléfono</label>
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={(e) => {
      const onlyNumbers = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
      if (onlyNumbers.length <= 9) {
        handleChange({ target: { name: "phone", value: onlyNumbers } });
      }
    }}
    maxLength={9}
    className="w-full border-gray-300 rounded-md p-2"
    inputMode="numeric"
    pattern="[0-9]*"
  />
</div>

        {/* Contraseña */}
        <div>
          <label className="block text-gray-700">Contraseña</label>
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
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>

        {/* Confirmar Contraseña */}
        <div>
          <label className="block text-gray-700">Confirmar Contraseña</label>
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
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
};

export default Registration;