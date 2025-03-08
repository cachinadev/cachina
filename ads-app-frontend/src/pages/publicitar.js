import React from "react";
import Image from "next/image";

const Publicitar = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* 📢 Header */}
      <div className="text-center bg-red-500 text-gray-900 p-5 rounded-t-lg">
        <h1 className="text-3xl font-bold">📢 Publicita en Cachina.pe</h1>
        <p className="text-md mt-1 font-medium">Aumenta tu visibilidad con nuestras tarifas económicas 🚀</p>
      </div>

      {/* 💰 Pricing Table */}
      <div className="mt-6 space-y-3">
        {[
          { label: "Un día (24h)", price: "0.50 céntimos 🎉" },
          { label: "Una semana (7 días)", price: "1 Sol 💰" },
          { label: "Un mes (4 semanas)", price: "5 Soles 🏆" },
          { label: "Un año (12 meses)", price: "50 Soles 🔥" },
          { label: "Permanente, indefinido", price: "100 Soles ♾️" }

        ].map((item, index) => (
          <div key={index} className="flex justify-between bg-gray-100 p-3 rounded-md shadow">
            <h2 className="text-lg font-semibold text-gray-800">{item.label}</h2>
            <p className="text-green-600 font-semibold">{item.price}</p>
          </div>
        ))}
      </div>

      {/* 💳 Payment Info */}
      <div className="mt-6 bg-blue-50 p-5 rounded-md border border-blue-300 text-center">
        <h2 className="text-lg font-bold text-blue-800">💳 Pago con Yape</h2>
        <p className="text-gray-700 mt-2">Envíalo al número:</p>
        <p className="text-blue-700 font-semibold text-lg">📲 985 979 119</p>
        <p className="text-gray-500 text-sm">Titular: <strong>Gabino Vidangos</strong></p>

        {/* 📷 Yape QR Code Image */}
        <div className="mt-4 flex justify-center">
          <Image 
            src="/images/yape.png"
            alt="Yape QR Code"
            width={160}
            height={160}
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="text-gray-600 text-sm mt-2">Escanea el QR para pagar con Yape.</p>
      </div>

      {/* 📄 Submission Info */}
      <div className="mt-6 bg-gray-100 p-5 rounded-md border border-gray-300">
        <h2 className="text-lg font-bold text-gray-800">📌 Datos para enviar a Publicar</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1 text-sm">
          {[
            "Título", "Número de contacto", "Categoría", "Descripción", 
            "Ubicación (Dep/Prov/Dist)", "Dirección", "Localización",
            "Costo y Método de Pago", "Días disponibles", "Redes Sociales / Página Web", "Imágenes del Anuncio"
          ].map((item, index) => (
            <li key={index}><strong>{item}:</strong></li>
          ))}
        </ul>
      </div>

      {/* 📩 Call to Action */}
      <div className="mt-6 text-center">
        <p className="text-gray-700 text-lg font-medium">¡Envía tu información al 985979119 y publica en minutos!</p>

        {/* ✅ WhatsApp Direct Link */}
        <a
          href="https://wa.me/51985979119?text=Hola%2C+quiero+publicitar+en+Cachina.pe"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block bg-green-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-green-600 transition"
        >
          📲 Contactar por WhatsApp
        </a>

        <p className="text-gray-500 text-sm mt-4">
            ¿Ya tienes una cuenta?  
            <a href="/login" className="text-blue-600 font-semibold hover:underline ml-1">Iniciar sesión</a> 
            {/*<a href="/register" className="text-blue-600 font-semibold hover:underline ml-1">Registrarse</a>*/}
        </p>



        <p className="text-blue-600 font-semibold text-lg mt-2">📧 cachinapuntope@gmail.com</p>
      </div>
    </div>
  );
};

export default Publicitar;
