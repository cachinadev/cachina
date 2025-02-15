import React from "react";

const TrabajaConNosotros = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
            {/* 🔹 Header */}
            <div className="bg-blue-600 text-white p-5 rounded-t-lg">
                <h1 className="text-3xl font-bold">💼 Trabaja con Nosotros</h1>
            </div>

            {/* 🔹 Content */}
            <div className="p-6 text-gray-700">
                <h2 className="text-2xl font-semibold mb-3">¡Tenemos 0 ofertas de trabajo para ti! </h2>
                <p className="text-lg">Vacantes Disponibles</p>
                <p className="text-gray-500 mt-2 italic">Actualmente no hay vacantes.</p>

                {/* 🔹 Contact Section */}
                <div className="mt-6">
                    <p className="text-sm text-gray-600">
                        Para futuras oportunidades, envíanos tu CV a{" "}
                        <span className="text-blue-600 font-medium"> cachinapuntope@gmail.com</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrabajaConNosotros;
