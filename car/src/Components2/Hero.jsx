import React from 'react';
import cars from '../assets/cars.png';
import Navbar from './Navbar';
import { FaStar } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const minDistance = 10;

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img src={cars} alt="cars" className="w-full lg:h-full h-[110vh] object-cover md:h-full " />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      {/* Content: Text & Form */}
      <div className="absolute top-[35rem] lg:top-[20rem] left-4 md:left-16 right-4 transform -translate-y-1/2 flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        <Text />
        <Formcon />
      </div>
    </div>
  );
};

const Text = () => {
  return (
    <div className="flex flex-col items-start text-white space-y-4 max-w-xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Find Quality-Assured<br />
        Cars Tailored to Your <br />
        Budget and Preferences
      </h1>

      <p className="text-base md:text-lg max-w-md">
        Browse a wide range of certified used cars from trusted dealers and private sellers.
      </p>

      <button className="bg-red-500 px-5 py-2 md:px-6 md:py-3 rounded-md text-white font-semibold hover:bg-red-600 transition">
        Book My Car
      </button>

      {/* Stars and Caption */}
      <div className="flex flex-col lg:mt-[-90px] lg:ml-[150px] md:flex-row items-start md:items-center gap-2 md:gap-4 mt-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="text-yellow-400 text-lg md:text-xl" />
          ))}
        </div>
        <h3 className="text-white text-sm font-light lg:mt-[45px] lg:ml-[-110px]">
          Working with 50+ Happy members
        </h3>
      </div>
    </div>
  );
};

const Formcon = () => {
  const [carType, setCarType] = React.useState('new');
  const [priceRange, setPriceRange] = React.useState([2000, 8000]);

  const [formData, setFormData] = React.useState({
    make: '',
    model: '',
    bodyType: '',
  });

  const [errors, setErrors] = React.useState({
    make: '',
    model: '',
    bodyType: '',
  });

  const handlePriceChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 10000 - minDistance);
        setPriceRange([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPriceRange([clamped - minDistance, clamped]);
      }
    } else {
      setPriceRange(newValue);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.make.trim()) {
      newErrors.make = 'Make is required';
      isValid = false;
    }
    if (!formData.model.trim()) {
      newErrors.model = 'Model is required';
      isValid = false;
    }
    if (!formData.bodyType.trim()) {
      newErrors.bodyType = 'Body type is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log({
        carType,
        ...formData,
        priceRange,
      });
      // Reset form or send data to API here if needed
    }
  };

  return (
    <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

        {/* Toggle Button */}
        <div className="relative w-full h-12 bg-gray-200 rounded-full flex items-center px-1">
          <div
            className={`absolute h-10 w-1/2 rounded-full bg-white shadow transition-transform duration-300 ${
              carType === 'used' ? 'translate-x-full' : ''
            }`}
          />
          <div className="flex w-full justify-between text-sm font-semibold z-10 relative">
            <button
              type="button"
              onClick={() => setCarType('new')}
              className={`w-1/2 text-center py-2 rounded-full z-10 ${
                carType === 'new' ? 'text-black' : 'text-gray-500'
              }`}
            >
              New Cars
            </button>
            <button
              type="button"
              onClick={() => setCarType('used')}
              className={`w-1/2 text-center py-2 rounded-full z-10 ${
                carType === 'used' ? 'text-black' : 'text-gray-500'
              }`}
            >
              Used Cars
            </button>
          </div>
        </div>

        {/* Input: Make */}
        <div>
          <input
            type="text"
            name="make"
            placeholder="Make"
            value={formData.make}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.make && <p className="text-red-500 text-sm mt-1">{errors.make}</p>}
        </div>

        {/* Input: Model */}
        <div>
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={formData.model}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
        </div>

        {/* Slider: Price */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Price Range</label>
          <Box sx={{ width: '100%' }}>
            <Slider
              getAriaLabel={() => 'Minimum distance'}
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `₹${value}`}
              disableSwap
              min={1000}
              max={10000}
              step={100}
              sx={{
                color: '#dc2626',
                '& .MuiSlider-thumb': { borderRadius: '50%' },
                '& .MuiSlider-track': { border: 'none' },
                '& .MuiSlider-rail': { opacity: 0.3 },
              }}
            />
          </Box>
          <p className="text-sm mt-1 text-gray-600">
            Selected Range: ₹{priceRange[0]} - ₹{priceRange[1]}
          </p>
        </div>

        {/* Input: Body Type */}
        <div>
          <input
            type="text"
            name="bodyType"
            placeholder="Body Type"
            value={formData.bodyType}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.bodyType && <p className="text-red-500 text-sm mt-1">{errors.bodyType}</p>}
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Hero;
