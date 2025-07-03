import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CropList() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/crops`);
        setCrops(response.data);
      } catch (err) {
        setError('Failed to fetch crops.');
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  if (loading) return <p className="text-center mt-6">Loading crops...</p>;
  if (error) return <p className="text-center mt-6 text-red-600">{error}</p>;

  if (crops.length === 0) return <p className="text-center mt-6">No crops logged yet.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Logged Crops</h2>
      <ul className="space-y-3">
        {crops.map((crop) => (
          <li
            key={crop.id}
            className="border border-gray-300 rounded p-3 shadow-sm bg-white"
          >
            <p><strong>Name:</strong> {crop.name}</p>
            <p><strong>Type:</strong> {crop.type}</p>
            <p><strong>Date Planted:</strong> {new Date(crop.datePlanted).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CropList;
