import React from "react";

const CommonFields = ({ formData, handleChange, handleFileChange }) => (
    <>
        <div>
            <label className="block text-gray-700">Title:</label>
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
            <label className="block text-gray-700">Description:</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
            ></textarea>
        </div>
        <div>
            <label className="block text-gray-700">Category:</label>
            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
            >
                <option value="">Select Category</option>
                <option value="Acuicultura">Acuicultura</option>
                <option value="Agricultura">Agricultura</option>
                <option value="Alquilo">Alquilo</option>
                <option value="Bienes Raíces">Bienes Raíces</option>
                <option value="Busco">Busco</option>
                <option value="Campo">Campo</option>
                <option value="Comida">Comida</option>
                <option value="Compro">Compro</option>
                <option value="Costura y moda">Costura y moda</option>
                <option value="Deporte">Deporte</option>
                <option value="Donaciones">Donaciones</option>
                <option value="Educación">Educación</option>
                <option value="Empleo">Empleo</option>
                <option value="Entretenimiento">Entretenimiento</option>
                <option value="Espiritualidad">Espiritualidad</option>
                <option value="Eventos">Eventos</option>
                <option value="Finanzas">Finanzas</option>
                <option value="Foto y Video">Foto y Video</option>
                <option value="Ganadería">Ganadería</option>
                <option value="Lugares">Lugares</option>
                <option value="Maquinaria">Maquinaria</option>
                <option value="Movilidad">Movilidad</option>
                <option value="Música">Música</option>
                <option value="Necesito">Necesito</option>
                <option value="Negocio">Negocio</option>
                <option value="Remates">Remates</option>
                <option value="Salud">Salud</option>
                <option value="Servicios">Servicios</option>
                <option value="Tradición">Tradición</option>
                <option value="Transporte">Transporte</option>
                <option value="Turismo">Turismo</option>
                <option value="Venta">Venta</option>
                <option value="Otros">Otros</option>
            </select>
        </div>
        <div>
            <label className="block text-gray-700">Upload Pictures:</label>
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
