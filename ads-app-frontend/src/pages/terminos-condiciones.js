import React from "react";

const TerminosCondiciones = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* ✅ Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg text-center">
        <h1 className="text-2xl font-bold">📜 Términos y Condiciones</h1>
        <p className="text-sm">Última actualización: Febrero 2025</p>
      </div>

      {/* ✅ Introduction */}
      <div className="mt-6">
        <p className="text-gray-600">
          Bienvenido a <strong>Cachina.pe</strong>. Al utilizar nuestro sitio web y nuestros servicios, aceptas cumplir estos Términos y Condiciones. Si no estás de acuerdo, por favor, no utilices nuestra plataforma.
        </p>
      </div>

      {/* ✅ 1️⃣ Uso del Sitio */}
      <h2 className="text-lg font-semibold mt-6">1. Uso del Sitio</h2>
      <p className="text-gray-600">
        Cachina.pe es una plataforma de publicación de anuncios. Los usuarios deben garantizar que la información publicada es veraz y cumplir con las normativas aplicables. No se permite contenido ilegal, ofensivo o fraudulento.
      </p>

      {/* ✅ 2️⃣ Responsabilidad del Usuario */}
      <h2 className="text-lg font-semibold mt-6">2. Responsabilidad del Usuario</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>No publicar contenido engañoso o ilegal.</li>
        <li>Respetar los derechos de autor y propiedad intelectual.</li>
        <li>No compartir información personal de terceros sin consentimiento.</li>
      </ul>

      {/* ✅ 3️⃣ Pagos y Servicios Premium */}
      <h2 className="text-lg font-semibold mt-6">3. Pagos y Servicios Premium</h2>
      <p className="text-gray-600">
        Algunos servicios en Cachina.pe pueden requerir pagos. Todas las transacciones son finales y no reembolsables. Nos reservamos el derecho de modificar precios y condiciones en cualquier momento.
      </p>

      {/* ✅ 4️⃣ Privacidad y Protección de Datos */}
      <h2 className="text-lg font-semibold mt-6">4. Privacidad y Protección de Datos</h2>
      <p className="text-gray-600">
        Al utilizar nuestros servicios, aceptas nuestra <a href="/politica-de-privacidad" className="text-blue-500 underline">Política de Privacidad</a>. Nos comprometemos a proteger tu información y cumplir con la Ley N.° 29733 de Protección de Datos Personales en Perú.
      </p>

      {/* ✅ 5️⃣ Terminación de la Cuenta */}
      <h2 className="text-lg font-semibold mt-6">5. Terminación de la Cuenta</h2>
      <p className="text-gray-600">
        Cachina.pe puede suspender o eliminar cuentas que violen estos términos sin previo aviso. Los usuarios pueden solicitar la eliminación de su cuenta en cualquier momento.
      </p>

      {/* ✅ 6️⃣ Limitación de Responsabilidad */}
      <h2 className="text-lg font-semibold mt-6">6. Limitación de Responsabilidad</h2>
      <p className="text-gray-600">
        No nos hacemos responsables por pérdidas, daños o perjuicios derivados del uso del sitio. Cachina.pe actúa como intermediario y no garantiza la veracidad de los anuncios publicados por los usuarios.
      </p>

      {/* ✅ 7️⃣ Modificaciones a los Términos */}
      <h2 className="text-lg font-semibold mt-6">7. Modificaciones a los Términos</h2>
      <p className="text-gray-600">
        Cachina.pe se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigencia desde su publicación en esta página.
      </p>

      {/* ✅ 8️⃣ Contacto */}
      <h2 className="text-lg font-semibold mt-6">8. Contacto</h2>
      <p className="text-gray-600">
        Si tienes preguntas sobre estos términos, contáctanos a través de:
      </p>
      <ul className="list-disc ml-6 text-gray-600">
        <li>📧 <a href="mailto:cachinapuntope@gmail.com" className="text-blue-500 underline">cachinapuntope@gmail.com</a></li>
        <li>📞 Teléfono: +51 986 035 075</li>
      </ul>

      {/* ✅ Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CACHINA PE E.I.R.L. - RUC: 20613204106. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default TerminosCondiciones;
