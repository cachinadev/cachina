import React from "react";

const CommonFields = ({ formData, handleChange, handleFileChange }) => (
    <>
        <div>
            <label className="block text-gray-700">Título:</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
            />
        </div>
        <div>
            <label className="block text-gray-700">Descripción:</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
            ></textarea>
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
                    { label: "Bienes Raíces y Alquiler", options: ["Alquilo", "Bienes Raíces", "Lugares", "Garajes", "Local de eventos"] },
                    { label: "Compra y Venta", options: ["Compro", "Venta", "Remates", "Venta de abono"] },
                    { label: "Trabajo y Profesiones", options: ["Empleo", "Negocio", "Servicios", "Profesores", "Ingenieros", "Médico Cirujano", "Psicólogo", "Electricista", "Plomero", "Mecánico", "Carpintero", "Pintores", "Soldador", "Taxista", "Transportistas", "Masajista"] },
                    { label: "Educación y Cultura", options: ["Educación", "Escritor", "Filósofo", "Lingüista", "Traductores"] },
                    { label: "Deporte y Entretenimiento", options: ["Deporte", "Entretenimiento", "Cancha Deportivas", "Música", "Animadores", "Payasos"] },
                    { label: "Salud y Bienestar", options: ["Salud", "Enfermero", "Farmacólogo", "Paramédico"] },
                    { label: "Comida y Gastronomía", options: ["Comida", "Carnicero", "Cocinero", "Frutera", "Panadero", "Repartidor de comida"] },
                    { label: "Movilidad y Transporte", options: ["Movilidad", "Transporte", "Mudanzas", "Transporte de carga"] },
                    { label: "Agricultura y Ganadería", options: ["Agricultura", "Acuicultura", "Ganadería", "Pastor ganadero", "Peón de campo"] },
                    { label: "Arte y Fotografía", options: ["Foto y Video", "Fotógrafo", "Escultor", "Artesano", "Artistas"] },
                    { label: "Eventos y Tradiciones", options: ["Eventos", "Tradición", "Maestro de Ceremonia", "Locutores"] },
                    { label: "Otros", options: ["Necesito", "Busco", "Donaciones", "Finanzas", "Espiritualidad", "Turismo", "Otros"] }
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
