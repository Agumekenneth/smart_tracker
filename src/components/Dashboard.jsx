// src/components/Dashboard.jsx
import React from 'react';
import { useApi } from '../Hooks/useApi';  // ✅ Corrected path
import SensorChart from './SensorChart';
import BlenderView from './BlenderView';

function Dashboard() {
  const { data, loading, error } = useApi('/sensors'); // Ensure your backend exposes this endpoint
  const lastUpdated = new Date().toLocaleTimeString();

  const getStatusColor = (type, value) => {
    switch (type) {
      case 'temperature':
        return value > 35 ? 'bg-red-500' : 'bg-green-500';
      case 'humidity':
        return value < 30 ? 'bg-yellow-500' : 'bg-green-500';
      case 'soilMoisture':
        return value < 20 ? 'bg-red-400' : 'bg-green-400';
      case 'light':
        return value < 300 ? 'bg-yellow-300' : 'bg-green-300';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

      {loading && <p className="text-blue-500">Loading sensor data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(data).map(([type, value]) => (
            <div
              key={type}
              className={`p-4 rounded text-white shadow ${getStatusColor(type, value)}`}
            >
              <h3 className="capitalize text-lg font-semibold">{type}</h3>
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-xs">Updated: {lastUpdated}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <SensorChart data={data} />
      </div>

      <div className="mt-6">
        <BlenderView />
      </div>
    </div>
  );
}

export default Dashboard;
