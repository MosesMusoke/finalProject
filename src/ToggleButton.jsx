import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-blue-500 font-semibold">OFF</span>
      <label className="switch relative inline-block w-10 h-6 bg-gray-300 rounded-full cursor-pointer">
        <input
          type="checkbox"
          className="absolute top-0 left-0 opacity-0 w-0 h-0"
          checked={isOn}
          onChange={handleToggle}
        />
        <span className="slider absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-transform transform">
          {isOn ? 'ON' : ''}
        </span>
      </label>
      <span className="text-blue-500 font-semibold">ON</span>
    </div>
  );
};

export default ToggleButton;