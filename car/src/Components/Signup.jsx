import React, { useState } from 'react';
import bg from '../assets/image.png';
import car from '../assets/image copy.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    mobile: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
      isValid = false;
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Signup successful!');
      console.log(formData);
      // You can redirect or send data to backend here
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={car}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />

      {/* Signup Card */}
      <div className="relative z-10 bg-white rounded-xl shadow-lg w-[90%] max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Left - Car Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src={bg}
            alt="Car"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 relative flex flex-col justify-center">
          {/* Close Icon */}
          <button className="absolute top-4 right-4 text-red-500 text-xl font-bold">×</button>

          {/* Logo */}
          <h1 className="text-3xl font-bold mb-6 text-center">
            <span className="text-blue-600">Car</span>
            <span className="text-red-500">space</span>
          </h1>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-6 w-full">
            <Link to="/login" className="w-1/2">
              <button className="w-full py-2 border border-gray-300 rounded-l-md text-gray-600">
                Login
              </button>
            </Link>

            <button className="w-1/2 py-2 bg-red-500 text-white rounded-r-md">
              Sign up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="border border-gray-300 rounded-md h-10 px-3 w-full placeholder-gray-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email ID"
                className="border border-gray-300 rounded-md h-10 px-3 w-full placeholder-gray-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Country code + Mobile */}
            <div>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md h-10 px-2 text-gray-700 bg-white w-20"
                >
                  <option>+91</option>
                  <option>+92</option>
                  <option>+93</option>
                </select>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your Mobile Number"
                  className="border border-gray-300 rounded-md h-10 px-3 flex-1 placeholder-gray-500"
                />
              </div>
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white h-10 rounded-md font-semibold mt-2"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
