import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Registration = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    type: 'personal', // Default to personal
    name: '',
    companyName: '',
    taxId: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleType = () => {
    setFormData({ ...formData, type: formData.type === 'personal' ? 'company' : 'personal' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Form Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!formData.name || !formData.phone || !formData.password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    if (formData.phone.length !== 9 || isNaN(formData.phone)) {
      setError('Phone number must be 9 digits');
      setLoading(false);
      return;
    }

    if (formData.type === 'company' && !formData.taxId) {
      setError('Tax ID (RUC) is required for companies');
      setLoading(false);
      return;
    }

    try {
      const payload = {
        type: formData.type,
        name: formData.type === 'personal' ? formData.name : formData.companyName,
        taxId: formData.type === 'company' ? formData.taxId : undefined,
        phoneNumber: formData.phone, // Backend expects phoneNumber
        password: formData.password,
      };

      const response = await axios.post('http://localhost:5000/api/users/register', payload);

      setSuccess(response.data.message);
      setError('');

      // Save token to local storage
      localStorage.setItem('token', response.data.token);

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      console.error('Registration error:', err.response || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Toggle Between Personal and Company */}
        <div className="flex items-center justify-between mb-4">
          <label className="text-gray-700">Are you registering as a company?</label>
          <input
            type="checkbox"
            checked={formData.type === 'company'}
            onChange={handleToggleType}
            className="ml-2"
          />
        </div>

        {/* Name or Company Name */}
        <div>
          <label className="block text-gray-700">
            {formData.type === 'personal' ? 'Name' : 'Company Name'}
          </label>
          <input
            type="text"
            name={formData.type === 'personal' ? 'name' : 'companyName'}
            value={formData.type === 'personal' ? formData.name : formData.companyName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Tax ID (RUC) for Companies */}
        {formData.type === 'company' && (
          <div>
            <label className="block text-gray-700">Tax ID (RUC)</label>
            <input
              type="text"
              name="taxId"
              value={formData.taxId}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2"
            />
          </div>
        )}

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={9}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Registration;
