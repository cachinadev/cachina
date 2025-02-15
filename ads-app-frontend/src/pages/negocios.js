import React from "react";

const Negocios = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
            {/* 🔹 Header Section */}
            <div className="bg-blue-600 text-white p-6 rounded-t-lg text-center">
                <h1 className="text-3xl font-bold">Impulsa Tu Negocio con Cachina.pe</h1>
                <p className="text-sm mt-2">Llega a miles de clientes y aumenta tus ventas con nuestra plataforma.</p>
            </div>

            {/* 🔹 Why Choose Us */}
            <div className="p-6 text-gray-700 leading-relaxed">
                <h2 className="text-2xl font-semibold mb-4"> ¿Por Qué Anunciar con Nosotros?</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong> Llega a más clientes:</strong> Amplifica tu visibilidad en todo el país.</li>
                    <li><strong> Análisis de rendimiento:</strong> Conoce cuántas personas ven y guardan tus anuncios.</li>
                    <li><strong> Opciones de publicidad premium:</strong> Destaca tus anuncios y aumenta su alcance.</li>
                    <li><strong> Seguridad y confianza:</strong> Protección de datos y sistema de validación de anuncios.</li>
                </ul>

                {/* 🔹 Contact CTA */}
                <h2 className="text-2xl font-semibold mt-8 mb-4"> Hablemos de Negocios</h2>
                <p>
                    ¿Listo para llevar tu empresa al siguiente nivel? Contáctanos y recibe una propuesta personalizada:
                </p>
                <p className="mt-4"><strong>📧 Email:</strong> <a href="mailto:cachinapuntope@gmail.com" className="text-blue-500 font-semibold underline">cachinapuntope@gmail.com</a></p>
                <p className="mt-2"><strong>📞 Teléfono:</strong> +51 986 035 075</p>

                {/* 🔹 Call-to-Action */}
                <div className="mt-6 text-center">
                    <a href="mailto:cachinapuntope@gmail.com" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        📩 ¡Solicita Información Ahora!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Negocios;
