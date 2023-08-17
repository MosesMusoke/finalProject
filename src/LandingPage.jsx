import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('');
  const [areaOfResidence, setAreaOfResidence] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:1337/requests', {
        name,
        serviceNeeded,
        areaOfResidence,
      });

      console.log('Request submitted:', response.data);
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <div className="main bg-gray-100 min-h-screen flex items-center justify-center">
      <div className='trans'>
        <div className="minor text-white mx-auto p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold mb-4">Service Request Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="serviceNeeded" className="block font-medium mb-1">
                Service Needed
              </label>
              <input
                type="text"
                id="serviceNeeded"
                className="w-full p-2 border rounded-md"
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="areaOfResidence" className="block font-medium mb-1">
                Area of Residence
              </label>
              <input
                type="text"
                id="areaOfResidence"
                className="w-full p-2 border rounded-md"
                value={areaOfResidence}
                onChange={(e) => setAreaOfResidence(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;