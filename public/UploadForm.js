import React, { useState } from 'react';

const departments = [
  "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho",
  "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco",
  "Ica", "Junín", "La Libertad", "Lambayeque", "Lima",
  "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura",
  "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"
];

const categories = {
  Empleo: ["Job Position", "Salary"],
  Venta: ["Product Name", "Price"],
  Servicio: ["Service Name", "Rate"],
  Mercado: ["Market Name", "Hours"],
  Deporte: ["Sport Name", "Schedule"],
  Evento: ["Event Name", "Date"]
};

const paymentOptions = ["Yape", "Plin", "Tarjeta", "Efectivo", "Todos"];

const UploadForm = () => {
  const [formFields, setFormFields] = useState({});
  const [category, setCategory] = useState('');
  const [selectedPayments, setSelectedPayments] = useState([]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setFormFields(categories[selectedCategory] || {});
  };

  const handlePaymentChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedPayments([...selectedPayments, value]);
    } else {
      setSelectedPayments(selectedPayments.filter(payment => payment !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('payment', selectedPayments);
    
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <div>
      <h1>Sube tu Negocio</h1>
      <form id="uploadForm" onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="businessName">Nombre de negocio:</label>
        <input type="text" id="businessName" name="businessName" maxLength="150" required /><br /><br />

        <label htmlFor="category">Categoria:</label>
        <select id="category" name="category" onChange={handleCategoryChange} required>
          <option value="">Seleccione una categoría</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select><br /><br />

        {category && categories[category].map((field) => (
          <div key={field}>
            <label htmlFor={field}>{field}:</label>
            <input type="text" id={field} name={field} required /><br /><br />
          </div>
        ))}

        <label htmlFor="contactNumber">Numero de contacto:</label>
        <input type="number" id="contactNumber" name="contactNumber" required /><br /><br />

        <label htmlFor="location">Ubicación:</label>
        <select id="location" name="location" required>
          <option value="">Seleccione una ubicación</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select><br /><br />

        <label htmlFor="mapLink">Link de mapa:</label>
        <input type="url" id="mapLink" name="mapLink" required /><br /><br />

        <label>Pago:</label><br />
        {paymentOptions.map(option => (
          <div key={option}>
            <input
              type="checkbox"
              id={option}
              name="payment"
              value={option}
              onChange={handlePaymentChange}
            />
            <label htmlFor={option}>{option}</label><br />
          </div>
        ))}<br />

        <label htmlFor="photos">Fotos:</label>
        <input type="file" id="photos" name="photos" multiple accept="image/*" /><br /><br />

        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" maxLength="500"></textarea><br /><br />

        <button type="submit">Subir</button>
      </form>
    </div>
  );
};

export default UploadForm;