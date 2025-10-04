import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FilterSidebar = () => {
  const [selectedType, setSelectedType] = useState('new');
  const [showLogin, setShowLogin] = useState(false);

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState({});

  const handleToggle = (type) => setSelectedType(type);

  const validateForm = () => {
    const newErrors = {};
    if (!make.trim()) newErrors.make = 'Make is required';
    if (!model.trim()) newErrors.model = 'Model is required';
    if (!zip.trim() || !/^\d{5,6}$/.test(zip)) newErrors.zip = 'Valid zip code required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = () => {
    if (validateForm()) {
      setShowLogin(true);
    }
  };

  return (
    <div className="relative">
      <aside className="bg-white p-4 rounded-lg shadow-md w-full space-y-6 z-10 relative">
        {/* Toggle Buttons */}
        <div className="flex bg-gray-100 rounded-full overflow-hidden">
          <button
            onClick={() => handleToggle('new')}
            className={`w-1/2 py-2 text-sm font-semibold transition ${
              selectedType === 'new' ? 'bg-white text-black' : 'text-gray-600'
            }`}
          >
            New cars
          </button>
          <button
            onClick={() => handleToggle('used')}
            className={`w-1/2 py-2 text-sm font-semibold transition ${
              selectedType === 'used' ? 'bg-white text-black' : 'text-gray-600'
            }`}
          >
            Used cars
          </button>
        </div>

        {/* Filter Form */}
        <form className="space-y-3 text-sm" onSubmit={(e) => e.preventDefault()}>
          <select className="w-full border p-2 rounded">
            <option>Car*</option>
          </select>
          <select className="w-full border p-2 rounded">
            <option>Body Style</option>
          </select>
          <select className="w-full border p-2 rounded">
            <option>Price</option>
          </select>

          {/* Make */}
          <input
            type="text"
            placeholder="Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className={`w-full border p-2 rounded ${errors.make ? 'border-red-500' : ''}`}
          />
          {errors.make && <p className="text-red-500 text-xs">{errors.make}</p>}

          {/* Model */}
          <input
            type="text"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className={`w-full border p-2 rounded ${errors.model ? 'border-red-500' : ''}`}
          />
          {errors.model && <p className="text-red-500 text-xs">{errors.model}</p>}

          {/* Zip */}
          <input
            type="text"
            placeholder="Zip code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className={`w-full border p-2 rounded ${errors.zip ? 'border-red-500' : ''}`}
          />
          {errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}

          <button
            type="button"
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-full hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {/* Extra Filters */}
        <div className="space-y-2">
          {[
            'Price & Payment',
            'Mileage',
            'Years',
            'Online shopping options',
            'Exterior color',
            'Interior color',
            'Drive train',
            'Transmission',
          ].map((item, index) => (
            <details key={index} className="border-b-2 border-gray-200 rounded overflow-hidden">
              <summary className="cursor-pointer py-2 px-2 bg-gray-50 hover:bg-gray-100 font-medium text-sm">
                {item}
              </summary>
              <div className="px-3 pb-3 text-sm text-gray-600">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Sample option
                </label>
              </div>
            </details>
          ))}
        </div>
      </aside>

      {/* Login Pop-up */}
      {showLogin && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          <LoginPop onClose={() => setShowLogin(false)} />
        </div>
      )}
    </div>
  );
};

const LoginPop = ({ onClose }) => {
  return (
    <div className="relative bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-xl">
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-2xl text-gray-600 hover:text-black font-bold"
        aria-label="Close"
      >
        ×
      </button>

      <div className="bg-[#d9d9d9] rounded-[2rem] p-10 w-[350px] sm:w-[500px] text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#2b2b2b] mb-4">
          Explore. Drive. <span className="text-[#dc3545]">Buy.</span>
        </h1>
        <p className="text-[#2b2b2b] mb-8 text-lg">
          Get <span className="font-medium">personalized</span> experience
          <br />
          by logging in
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="bg-[#dc3545] text-white px-6 py-3 rounded-xl text-lg hover:bg-red-700">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white border-2 border-[#dcdcdc] text-[#2b2b2b] px-6 py-3 rounded-xl text-lg hover:bg-gray-100">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
