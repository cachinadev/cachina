import React from "react";

const Nosotros = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
            {/* 🔹 Header Section */}
            <div className="bg-blue-600 text-white p-6 rounded-t-lg text-center">
                <h1 className="text-3xl font-bold">Sobre Nosotros</h1>
                <p className="text-sm mt-2">Conectamos oportunidades, simplificamos transacciones y fortalecemos comunidades.</p>
            </div>

            {/* 🔹 Who We Are */}
            <div className="p-6 text-gray-700 leading-relaxed">
                <h2 className="text-2xl font-semibold mb-4">¿Quiénes Somos?</h2>
                <p>
                    <strong>Cachina.pe</strong> es una plataforma digital innovadora diseñada para facilitar la compra, venta e intercambio de servicios en Perú. 
                    Nuestro objetivo es ofrecer una experiencia confiable, rápida y accesible para todos los usuarios, desde emprendedores hasta compradores ocasionales.
                </p>

                {/* 🔹 Our Mission, Vision, and Values */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">Nuestra Misión</h2>
                <p>
                    Conectar personas con oportunidades comerciales a través de una plataforma accesible y segura, permitiendo el acceso fácil y confiable a productos y servicios.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Nuestra Visión</h2>
                <p>
                    Ser la plataforma líder en comercio digital en Perú, promoviendo el crecimiento económico y la confianza en los negocios en línea.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Nuestros Valores</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>🤝 Comunidad:</strong> Creemos en el poder de conectar a las personas.</li>
                    <li><strong>🚀 Innovación:</strong> Mejoramos continuamente para ofrecer la mejor experiencia.</li>
                    <li><strong>🌍 Accesibilidad:</strong> Una plataforma inclusiva para todos.</li>
                    <li><strong>🔒 Confianza:</strong> Seguridad y transparencia en cada transacción.</li>
                </ul>

                {/* 🔹 Contact Information */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">Contáctanos</h2>
                <p>
                    Escríbenos a 
                    <a href="mailto:cachinapuntope@gmail.com" className="text-blue-500 font-semibold underline"> cachinapuntope@gmail.com</a> o llámanos al <strong>+51 986 035 075</strong>.
                </p>
            </div>
        </div>
    );
};

export default Nosotros;
