import React from "react";

const Recursos = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* ✅ Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg text-center">
        <h1 className="text-2xl font-bold">📚 Recursos para Emprendedores y Negocios</h1>
        <p className="text-sm">Herramientas y formatos para ayudarte a gestionar y hacer crecer tu negocio.</p>
      </div>

      {/* ✅ Introduction */}
      <div className="mt-6">
        <p className="text-gray-600">
          En Cachina.pe, entendemos que administrar un negocio requiere de múltiples herramientas. Aquí encontrarás recursos esenciales para facturación, contratos, cursos, y aplicaciones útiles.
        </p>
      </div>

      {/* ✅ 1️⃣ Billing Systems */}
      <h2 className="text-lg font-semibold mt-6">1️⃣ Sistemas de Facturación</h2>
      <p className="text-gray-600">
        Encuentra software de facturación que te ayude a gestionar tus ventas y emitir comprobantes electrónicos de manera eficiente.
      </p>
      <ul className="list-disc ml-6 text-gray-600 mt-2">
        <li>🔹 Sistema de Facturación Sunat</li>
        <li>🔹 Facturación Electrónica para PYMEs</li>
        <li>🔹 Integración con sistemas contables</li>
      </ul>

      {/* ✅ 2️⃣ Contract Templates */}
      <h2 className="text-lg font-semibold mt-6">2️⃣ Formatos de Contratos</h2>
      <p className="text-gray-600">
        Descarga plantillas de contratos comerciales para formalizar tus acuerdos con clientes y proveedores.
      </p>
      <ul className="list-disc ml-6 text-gray-600 mt-2">
        <li>📜 Contrato de Compraventa</li>
        <li>📜 Contrato de Prestación de Servicios</li>
        <li>📜 Contrato de Alquiler</li>
      </ul>

      {/* ✅ 3️⃣ Online Courses */}
      <h2 className="text-lg font-semibold mt-6">3️⃣ Cursos y Capacitación</h2>
      <p className="text-gray-600">
        Aprende estrategias de negocio, marketing digital y gestión financiera con estos cursos recomendados.
      </p>
      <ul className="list-disc ml-6 text-gray-600 mt-2">
        <li>🎓 Marketing Digital para Emprendedores</li>
        <li>🎓 Finanzas y Contabilidad Básica</li>
        <li>🎓 Estrategias de Ventas y Atención al Cliente</li>
      </ul>

      {/* ✅ 4️⃣ Business Applications */}
      <h2 className="text-lg font-semibold mt-6">4️⃣ Aplicaciones para Negocios</h2>
      <p className="text-gray-600">
        Herramientas digitales para optimizar la gestión de tu empresa.
      </p>
      <ul className="list-disc ml-6 text-gray-600 mt-2">
        <li>📱 Aplicaciones de Gestión de Inventario</li>
        <li>📱 CRM para Seguimiento de Clientes</li>
        <li>📱 Herramientas de Contabilidad y Facturación</li>
      </ul>

      {/* ✅ Future Integrations */}
      <h2 className="text-lg font-semibold mt-6">🔜 Más Recursos Próximamente</h2>
      <p className="text-gray-600">
        Estamos trabajando en más herramientas y contenido para ayudarte a llevar tu negocio al siguiente nivel.
      </p>

      {/* ✅ Contact */}
      <h2 className="text-lg font-semibold mt-6">📩 ¿Tienes una sugerencia?</h2>
      <p className="text-gray-600">
        Si conoces algún recurso útil que podamos incluir, envíanos un mensaje a:
      </p>
      <ul className="list-disc ml-6 text-gray-600 mt-2">
        <li>📧 <a href="mailto:cachinapuntope@gmail.com" className="text-blue-500 underline">cachinapuntope@gmail.com</a></li>
        <li>📞 Teléfono: +51 986 035 075</li>
      </ul>
    </div>
  );
};

export default Recursos;
