import React from "react";

const PoliticaDePrivacidad = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* 🔹 Header */}
            <div className="bg-blue-600 text-white p-5 rounded-t-lg text-center">
                <h1 className="text-3xl font-bold">🔒 Política de Privacidad</h1>
                <p className="text-sm mt-1">Última actualización: 14 de febrero de 2025</p>
            </div>

            {/* 🔹 Content */}
            <div className="p-5 leading-relaxed text-gray-700">
                <h2 className="text-xl font-semibold mt-6">📌 1. Introducción</h2>
                <p>
                    En <strong>CACHINA PE E.I.R.L.</strong>, su privacidad es nuestra prioridad.
                    Nos comprometemos a proteger sus datos personales de acuerdo con la
                    <strong> Ley N.° 29733 – Ley de Protección de Datos Personales del Perú</strong>.
                    Esta política detalla cómo recopilamos, usamos y protegemos su información al utilizar nuestros servicios.
                </p>

                <h2 className="text-xl font-semibold mt-6">📌 2. Datos que Recopilamos</h2>
                <p>
                    Recopilamos datos personales de nuestros usuarios con su consentimiento y únicamente para fines legítimos.
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li><strong>Datos personales:</strong> Nombre, apellido, correo electrónico, teléfono y dirección.</li>
                    <li><strong>Identificación:</strong> Documento de identidad (DNI, Pasaporte, etc.).</li>
                    <li><strong>Datos comerciales:</strong> Información de anuncios publicados y servicios contratados.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">📌 3. Uso de la Información</h2>
                <p>
                    Utilizamos sus datos personales exclusivamente para:
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Gestionar y mejorar su experiencia en nuestra plataforma.</li>
                    <li>Brindar soporte técnico y atención al cliente.</li>
                    <li>Cumplir con regulaciones legales y prevenir fraudes.</li>
                    <li>Enviar notificaciones relevantes sobre nuestros servicios.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">📌 4. Derechos de los Usuarios</h2>
                <p>
                    Según la <strong>Ley N.° 29733</strong>, usted tiene derecho a:
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Acceder a sus datos personales.</li>
                    <li>Rectificar información incorrecta o desactualizada.</li>
                    <li>Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                    <li>Oponerse al uso de su información personal.</li>
                </ul>
                <p className="mt-2">
                    Para ejercer estos derechos, contáctenos a través de:
                </p>
                <p className="text-blue-600 font-medium mt-1">📧 cachinapuntope@gmail.com</p>
                <p className="text-blue-600 font-medium">📞 +51 986 035 075</p>

                <h2 className="text-xl font-semibold mt-6">📌 5. Seguridad de los Datos</h2>
                <p>
                    Implementamos medidas de seguridad avanzadas para proteger su información personal contra accesos no autorizados,
                    alteraciones o pérdidas. En caso de una brecha de seguridad, notificaremos a las autoridades correspondientes
                    y a los usuarios afectados, conforme a lo establecido en la <strong>Ley N.° 29733</strong>.
                </p>

                <h2 className="text-xl font-semibold mt-6">📌 6. Transferencia de Datos</h2>
                <p>
                    No compartimos sus datos con terceros sin su autorización, salvo en los siguientes casos:
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Para cumplir con obligaciones legales o requerimientos judiciales.</li>
                    <li>Para prevenir fraudes y garantizar la seguridad de nuestros servicios.</li>
                    <li>Cuando sea necesario para la prestación de los servicios contratados.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">📌 7. Tiempo de Conservación de Datos</h2>
                <p>
                    Sus datos personales se almacenarán solo durante el tiempo necesario para cumplir con los fines para los cuales fueron recopilados.
                    Posteriormente, serán eliminados de manera segura conforme a la normativa vigente.
                </p>

                <h2 className="text-xl font-semibold mt-6">📌 8. Uso de Cookies</h2>
                <p>
                    Utilizamos cookies para mejorar la experiencia de navegación en nuestra plataforma.
                    Puede gestionar sus preferencias de cookies en la configuración de su navegador.
                </p>

                <h2 className="text-xl font-semibold mt-6">📌 9. Actualización de la Política</h2>
                <p>
                    Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento.
                    Los cambios serán publicados en esta página y, si es necesario, se notificará a los usuarios.
                </p>

                <h2 className="text-xl font-semibold mt-6">📌 10. Legislación Aplicable</h2>
                <p>
                    Esta política se rige por la legislación peruana, incluyendo:
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li>📜 <strong>Ley N.° 29733</strong> – Ley de Protección de Datos Personales</li>
                    <li>📜 <strong>Constitución Política del Perú</strong>, artículo 2, numeral 6</li>
                    <li>📜 <strong>Ley N.° 27806</strong> – Ley de Transparencia y Acceso a la Información Pública</li>
                    <li>📜 <strong>Ley N.° 27444</strong> – Ley del Procedimiento Administrativo General</li>
                </ul>

                {/* 🔹 Footer */}
                <div className="text-center text-sm text-gray-500 mt-8">
                    <p>© 2025 CACHINA PE E.I.R.L. | RUC: 20613204106</p>
                    <p>Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    );
};

export default PoliticaDePrivacidad;
