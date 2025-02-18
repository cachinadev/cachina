import React from "react";
import RenderLocationFields from "../RenderLocationFields";

const CommonFields = ({ formData, handleChange, handleFileChange }) => (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700">Título:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="Nombre de negocio, servicio, negocio o producto"
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700">Número de contacto:</label>
                <input
                    type="text"
                    name="contactNumber"
                    maxLength="9"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="Ingrese un número de 9 dígitos"
                    required
                />
            </div>
        </div>
        
        <div>
            <label className="block text-gray-700">Categoría:</label>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
            >
                   <option value="">Seleccionar categoría</option>
                   {[
                       { 
                           label: "🏠 Bienes Raíces y Alquiler", 
                           options: ["Alquilo", "Bienes Raíces", "Lugares", "Garajes", "Local de eventos", "Alquiler de Ropa de Baile", "Alquiler de Ternos/Vestidos"]
                       },
                       { 
                           label: "🛍️ Compra y Venta", 
                           options: ["Venta", "Remates", "Comida", "Bodegas", "Minimarket", "Restaurante"]
                       },
                       { 
                           label: "👷‍♂️ Trabajo y Profesiones", 
                           options: [
                               "Empleo", "Negocio", "Servicios", "Profesores", "Ingenieros", "Médico Cirujano", "Psicólogo", "Electricista", "Plomero", "Mecánico", "Carpintero", 
                               "Pintores", "Soldador", "Taxista", "Transportistas", "Masajista", "Abogados", "Administradores", "Antropólogo", "Archivólogo", "Arquitecto", 
                               "Bibliotecólogo", "Biólogo", "Botánico", "Científicos", "Computista", "Contador", "Ecólogo", "Economista", "Editor", "Filólogos", "Físico", "Geógrafo", 
                               "Impresor", "Jornalero", "Matemático", "Metalúrgico", "Obrero", "Paleontólogo", "Periodista", "Politólogo", "Psicoanalista", "Químico", "Radiólogo", 
                               "Sociólogo", "Técnico de sonido", "Traductores", "Desarrollador de Software", "Diseñador Gráfico", "Analista de Datos", "Programador", "Profesional"
                           ]
                       },
                       { 
                           label: "🩺 Salud y Bienestar", 
                           options: ["Salud", "Médico", "Enfermero", "Farmacólogo", "Paramédico", "Masajista", "Fisioterapeuta", "Nutricionista", "Veterinaria", "Curanderos"]
                       },
                       { 
                           label: "⚽ Deporte y Entretenimiento", 
                           options: ["Deporte", "Entretenimiento", "Cancha Deportiva", "Música", "Animadores", "Entrenadores", "Payasos", "Instructor de Yoga"]
                       },
                       { 
                           label: "🎨 Arte y Fotografía", 
                           options: ["Foto y Video", "Fotógrafo", "Escultor", "Artesano", "Artistas", "Tejedoras", "Diseñador de Moda", "Bordados"]
                       },
                       { 
                           label: "🍽️ Comida y Gastronomía", 
                           options: ["Comida", "Carnicero", "Cocinero", "Frutera", "Panadero", "Repartidor de comida", "Barista", "Chef"]
                       },
                       { 
                           label: "🚗 Movilidad y Transporte", 
                           options: ["Transporte", "Mudanzas", "Transporte de carga", "Taxista", "Chofer de camión", "Expresos", "Colectivos"]
                       },
                       { 
                           label: "🌾 Agricultura y Ganadería", 
                           options: ["Agricultura", "Acuicultura", "Ganadería", "Pastor ganadero", "Peón de campo", "Lechero", "Leñador"]
                       },
                       { 
                           label: "🎭 Eventos y Tradiciones", 
                           options: ["Eventos", "Tradición", "Maestro de Ceremonia", "Locutores", "Organizador de Eventos"]
                       },
                       { 
                           label: "🛠️ Servicios Generales", 
                           options: ["Aseadora", "Barbero", "Barrendero", "Cerrajero", "Electricista", "Electrónico", "Fontanero", "Lavanderas", "Limpiavidrios", "Mecánico", "Mudanzas", 
                                     "Peluquero", "Plomero", "Repartidor", "Sastre", "Secretaria", "Seguridad", "Soldador", "Sonido", "Tornero", "Vigilante", "Jardinero", "Instalador de Paneles Solares", "Peluquería"]
                       },
                       { 
                           label: "💼 Negocios y Finanzas", 
                           options: ["Negocio", "Abastecimiento", "Finanzas"]
                       },
                       { 
                           label: "💻 Tecnología e Informática", 
                           options: ["Desarrollador de Software", "Tecnología", "Programador"]
                       },
                       { 
                           label: "🛐 Otros", 
                           options: ["Necesito", "Busco", "Donaciones", "Espiritualidad", "Turismo", "Otros"]
                       }
                   ].map(group => (
                        <optgroup key={group.label} label={group.label}>
                        {group.options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>

        <div>
            <label className="block text-gray-700">Descripción:</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Pon todo lo que se necesita sobre tu negocio, servicio, negocio o producto, mas ayuda en sugenencias abajo"
                required
            ></textarea>
        </div>
        
        <RenderLocationFields formData={formData} handleChange={handleChange} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700">Costo:</label>
                <div className="flex gap-2">
                    <input
                        type="number"
                        name="cost"
                        value={formData.cost || ""}
                        onChange={handleChange}
                        min="0"
                        placeholder="Ingresa costos"
                        className="w-full border p-2 rounded"
                        
                    />
                    <select
                        name="currency"
                        value={formData.currency || "Soles"}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    >
                        <option value="Soles">Soles</option>
                        <option value="Dollars">Dolares</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="block text-gray-700">Método de pagos:</label>
                <input
                    type="text"
                    name="paymentMethods"
                    value={formData.paymentMethods || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="Ingrese tipos de pagos disponibles"
                    required
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700">Días disponibles:</label>
                <input
                    type="text"
                    name="availableDays"
                    value={formData.availableDays || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="Ejemplo: Lunes a Viernes"
                />
            </div>
            <div>
                <label className="block text-gray-700">Horas disponibles:</label>
                <input
                    type="text"
                    name="availableHours"
                    value={formData.availableHours || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="Ejemplo: 8:00 AM - 6:00 PM"
                />
            </div>
        </div>

        <div>
            <label className="block text-gray-700">Redes sociales / Página web:</label>
            <input
                type="url"
                name="website"
                value={formData.website || ""}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Ingrese su página web o perfil social"
            />
        </div>
        
        <div>
            <label className="block text-gray-700">Subir imágenes:</label>
            <input
                type="file"
                name="pictures"
                onChange={handleFileChange}
                multiple
                className="w-full border p-2 rounded"
            />
        </div>
    </>
);

export default CommonFields;
