import React from "react";
import RenderLocationFields from "../RenderLocationFields";

const CommonFields = ({ formData, handleChange, handleFileChange }) => (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block font-bold text-gray-700">Título:</label>
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
                <label className="block font-bold text-gray-700">Número de contacto:</label>
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
            <label className="block font-bold text-gray-700">Categoría:</label>
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
            options: ["Inmobiliaria", "Constructora", "Alquilo", "Bienes Raíces", "Garajes", "Local de Eventos", "Local Comercial", "Local Industrial", "Oficina", "Tienda", "Almacén", "Restaurante"]
        },
        { 
            label: "🛍️ Compra y Venta", 
            options: ["Compro", "Venta", "Remates", "Ofertas", "Bodegas", "Minimarket", "Mercados"]
        },
        { 
            label: "👷‍♂️ Trabajo y Profesiones", 
            options: ["Empleo", "Servicios", "Técnicos", "Profesores", "Ingenieros", "Electricista", "Plomero", "Mecánico", "Carpintero", "Pintor", "Soldador", "Taxista", "Transportistas", "Masajista", "Abogados", "Administradores", "Contador", "Economista", "Periodista", "Psicoanalista", "Químico", "Radiólogo", "Técnico de sonido", "Traductores", "Desarrollador de Software", "Diseñador Gráfico", "Analista de Datos", "Programador"]
        },
        { 
            label: "🩺 Salud y Bienestar", 
            options: ["Salud", "Médico", "Enfermero", "Farmacólogo", "Paramédico", "Masajista", "Fisioterapeuta", "Nutricionista", "Veterinaria", "Curanderos", "Psicólogo", "Psiquiatra", "Terapeuta", "Entrenador Personal", "Cosmetólogo", "Estilista", "Maquillador", "Peluquero", "Manicurista", "Podólogo", "Esteticista"]
        },
        { 
            label: "⚽ Deporte y Entretenimiento", 
            options: ["Deporte", "Cancha Deportiva", "Instructor de Yoga", "Entrenadores", "Animadores", "Payasos", "Música", "Otros"]
        },
        { 
            label: "🎨 Arte y Fotografía", 
            options: ["Foto y Video", "Fotógrafo", "Escultor", "Artesano", "Artistas", "Tejedoras", "Diseñador de Moda", "Bordados"]
        },
        { 
            label: "🍽️ Comida y Gastronomía", 
            options: ["Comida", "Carnicero", "Cocinero", "Frutera", "Panadero", "Repartidor de comida", "Barista", "Chef", "Catering", "Cafetería", "Restaurante", "Pizzería", "Pollería", "Chifa", "Comida Rápida", "Comida Saludable", "Comida Gourmet", "Comida Casera", "Comida Criolla", "Comida Internacional", "Comida Vegetariana", "Comida Vegana"]
        },
        { 
            label: "🚗 Movilidad y Transporte", 
            options: ["Transporte", "Mudanzas", "Maquinaria Pesada", "Transporte de carga", "Taxista", "Chofer de camión", "Expresos", "Colectivos", "Taxis", "Motos", "Bicicletas", "Repuestos"]
        },
        { 
            label: "🌾 Agricultura y Ganadería", 
            options: ["Agricultura", "Ganadería", "Acuicultura", "Leñador", "Agricultor", "Ganadero", "Pescador", "Apicultor", "Horticultor", "Viverista", "Floricultor", "Fruticultor", "Cafetalero", "Cacaotero"]
        },
        { 
            label: "🎭 Eventos y Tradiciones", 
            options: ["Eventos", "Tradiciones", "Maestro de Ceremonia", "Locutores", "Organizador de Eventos", "Decorador de Eventos", "Animador de Eventos", "Alquiler de Equipos de Sonido", "Alquiler de Equipos de Iluminación", "Catering"]
        },
        { 
            label: "🛠️ Servicios Generales", 
            options: ["Aseadora", "Barbero", "Cerrajero", "Electricista", "Fontanero", "Lavandería", "Limpiavidrios", "Mecánico", "Mudanzas", "Pintor", "Planchador", "Peluquero", "Plomero", "Repartidor", "Sastre", "Secretaria", "Seguridad", "Soldador", "Jardinero"]
        },
        { 
            label: "💼 Negocios y Finanzas", 
            options: ["Negocio", "Abastecimiento", "Inversiones", "Finanzas"]
        },
        { 
            label: "💻 Tecnología e Informática", 
            options: ["Desarrollador de Software", "Programador", "Tecnología"]
        },
        { 
            label: "👗 Ropa y Moda", 
            options: ["Alquiler de Ropa de Baile", "Costuras", "Ternos", "Vestidos", "Alquiler de Ternos/Vestidos", "Alquiler de Disfraces", "Trajes de Novia", "Novio", "Quinceañera", "Graduación", "Trajes de Fiesta", "Carnaval", "Halloween", "Navidad", "Papá Noel", "Santa Claus"]
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
    <label className="block font-bold text-gray-700">Descripción:</label>
    <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        onInput={(e) => {
            e.target.style.height = "auto"; // Reset height first
            e.target.style.height = e.target.scrollHeight + "px"; // Set to fit content
        }}
        className="w-full border p-2 rounded resize-none overflow-hidden"
        placeholder="Encuentra y pon todo lo que se necesita sobre tu negocio, servicio, negocio o producto, más ayuda en sugerencias abajo."
        required
        rows="3" // Default minimal height
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
    </>
);

export default CommonFields;
