import React, { useState } from 'react';
import axios from 'axios';

function CropForm({ onCropAdded }) {
  const [form, setForm] = useState({
    name: '',
    type: '',
    datePlanted: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/crops`, form);
      setMessage('Crop added successfully!');
      onCropAdded(res.data); // Optional callback to update UI
      setForm({ name: '', type: '', datePlanted: '' });
    } catch (err) {
      setMessage('Failed to add crop.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded-md">
      <h2 className="text-xl font-bold mb-3">Add New Crop</h2>

      {message && <p className="text-sm mb-2 text-blue-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Crop name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Crop type (e.g., cereal)"
          value={form.type}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="date"
          name="datePlanted"
          value={form.datePlanted}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? 'Submitting...' : 'Add Crop'}
        </button>
      </form>
    </div>
  );
}

export default CropForm;
