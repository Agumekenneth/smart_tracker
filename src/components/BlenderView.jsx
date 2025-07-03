import React from 'react';

function BlenderView() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">3D Models Preview</h2>
      <div className="flex flex-col md:flex-row justify-around gap-8">
        <div className="flex flex-col items-center">
          <img
            src="/blender/farm_model.png"
            alt="Farm Model"
            className="w-64 h-auto rounded shadow-lg"
          />
          <p className="mt-2 font-medium">Farm Model</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/blender/rfid_model.png"
            alt="RFID Tag Model"
            className="w-64 h-auto rounded shadow-lg"
          />
          <p className="mt-2 font-medium">RFID Tag Model</p>
        </div>
      </div>
    </div>
  );
}

export default BlenderView;
