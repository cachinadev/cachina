import React from "react";

const MedicoFields = () => {
    return (
        <div className="p-4 border rounded bg-gray-50">
            <h2 className="text-lg font-semibold text-blue-700">
                📌 Sugerencias para publicar un anuncio en la categoría &quot;Médico&quot;
            </h2>
            <p className="text-gray-700 mt-2">
                Al publicar un anuncio en la categoría de <strong>Médico</strong>, es recomendable incluir información detallada para atraer pacientes y clientes. Aquí algunas sugerencias:
            </p>
            <ul className="list-disc pl-6 mt-3 text-gray-700">
                <li><strong>Especialidad:</strong> Indica si eres médico general, pediatra, cardiólogo, dermatólogo, ginecólogo, etc.</li>
                <li><strong>Servicios Ofrecidos:</strong> Menciona chequeos médicos, consultas, exámenes especializados, cirugías, emergencias, etc.</li>
                <li><strong>Ubicación:</strong> Agrega la dirección de tu consultorio, hospital o si realizas visitas a domicilio.</li>
                <li><strong>Horarios de Atención:</strong> Detalla los días y horarios en los que atiendes.</li>
                <li><strong>Contacto:</strong> Incluye tu número de teléfono, correo o WhatsApp para agendar citas.</li>
                <li><strong>Precio de Consulta:</strong> Si es posible, indica el costo de la consulta o si trabajas con seguros médicos.</li>
                <li><strong>Experiencia y Certificaciones:</strong> Muestra tu trayectoria profesional, títulos y certificaciones.</li>
                <li><strong>Redes Sociales / Página Web:</strong> Comparte enlaces a tus redes o página web para mayor confianza.</li>
            </ul>
            <p className="text-gray-600 mt-4">
                🏥 ¡Publica tu anuncio con información clara para atraer más pacientes y ofrecer una mejor atención médica!
            </p>
        </div>
    );
};

export default MedicoFields;