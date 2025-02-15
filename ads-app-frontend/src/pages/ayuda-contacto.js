import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaQuestionCircle } from "react-icons/fa";

const AyudaContacto = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* 🔹 Header */}
            <div className="bg-blue-600 text-white p-5 rounded-t-lg text-center">
                <h1 className="text-3xl font-bold">📞 Ayuda y Contacto</h1>
                <p className="text-sm mt-1">¿Tienes preguntas? Estamos aquí para ayudarte.</p>
            </div>

            {/* 🔹 Contact Information Section */}
            <div className="p-6 text-gray-700">
                <h2 className="text-2xl font-semibold mb-3">📍 Información de Contacto</h2>
                <div className="space-y-3">
                    <p className="flex items-center gap-2 text-lg">
                        <FaPhone className="text-blue-500" /> <strong>Teléfono:</strong> +51 986 035 075
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                        <FaEnvelope className="text-blue-500" /> <strong>Email:</strong> cachinapuntope@gmail.com
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                        <FaMapMarkerAlt className="text-blue-500" /> <strong>Dirección:</strong> Lima, Perú
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                        <FaClock className="text-blue-500" /> <strong>Horario de Atención:</strong> Lunes a Viernes, 9 AM - 6 PM
                    </p>
                </div>

                {/* 🔹 FAQ Section */}
                <h2 className="text-2xl font-semibold mt-8 mb-3">❓ Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-3">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <FaQuestionCircle className="text-blue-500" /> ¿Cómo publico un anuncio?
                        </h3>
                        <p className="text-gray-600">Debes registrarte en nuestra plataforma y dirigirte a la sección de "Crear Anuncio" en el dashboard.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-3">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <FaQuestionCircle className="text-blue-500" /> ¿Cómo contacto a un vendedor?
                        </h3>
                        <p className="text-gray-600">Cada anuncio tiene una opción para contactar al vendedor por teléfono o correo electrónico.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-3">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <FaQuestionCircle className="text-blue-500" /> ¿Cómo reporto un problema?
                        </h3>
                        <p className="text-gray-600">Puedes escribirnos a nuestro correo electrónico o llenar un formulario en la sección de <a href="/libro-reclamaciones" className="text-blue-500 underline">Libro de Reclamaciones</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AyudaContacto;
