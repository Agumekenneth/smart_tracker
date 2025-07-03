import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function SensorChart({ data }) {
  // ✅ Check if data is available and is an array
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No sensor data available to display.
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Sensor Data Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#f87171" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="humidity" stroke="#3b82f6" />
          <Line type="monotone" dataKey="soilMoisture" stroke="#10b981" />
          <Line type="monotone" dataKey="light" stroke="#fbbf24" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SensorChart;
