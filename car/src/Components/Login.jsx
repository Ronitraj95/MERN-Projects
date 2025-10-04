import React, { useState } from 'react';
import bg from '../assets/image.png';
import car from '../assets/image copy.png';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [error, setError] = useState('');

  const validateMobile = () => {
    if (!mobile.trim()) {
      setError('Mobile number is required');
      return false;
    }
    if (!/^\d{10}$/.test(mobile)) {
      setError('Mobile number must be 10 digits');
      return false;
    }
    setError('');
    return true;
  };

  //phone number traspere to otp page
  const handleContinue = (e) => {
    e.preventDefault();
    if (validateMobile()) {
      const fullPhone = `${countryCode}${mobile}`;
      navigate('/Otp', { state: { phone: fullPhone } }); 
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* Background image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
      />

      {/* Card */}
      <div className="relative z-10 bg-white rounded-xl shadow-2xl w-[90%] max-w-4xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Car Image */}
        <div className="md:w-1/2 hidden md:block">
          <img src={car} alt="Car" className="w-full h-full object-cover" />
        </div>

        {/* Right: Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center relative">
          {/* Close Icon */}
          <button className="absolute top-4 right-4 text-red-500 text-xl font-bold">×</button>

          {/* Logo */}
          <h1 className="text-3xl font-bold mb-6 text-center">
            <span className="text-blue-600">Car</span>
            <span className="text-red-500">space</span>
          </h1>

          {/* Login / Sign-up Toggle */}
          <div className="flex justify-center mb-6 w-full">
            <div className="w-1/2">
              <button className="w-full py-2 border border-gray-300 rounded-l-md text-gray-600">
                Login
              </button>
            </div>

            <Link to="/" className="w-1/2">
              <button className="w-full py-2 bg-red-500 text-white rounded-r-md">
                Sign up
              </button>
            </Link>
          </div>

          {/* Form */}
          <form onSubmit={handleContinue} className="flex flex-col gap-4">
            <label className="text-sm text-gray-700">Enter your Mobile Number</label>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border border-gray-300 rounded-md h-10 px-2 w-[70px] bg-white text-gray-700"
              >
                <option>+91</option>
                <option>+92</option>
                <option>+93</option>
              </select>
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="border border-gray-300 rounded-md h-10 px-3 flex-1 placeholder-gray-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-red-500 text-white h-10 rounded-md font-semibold mt-2"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


// data transfer
// CREATE TABLE otp_verifications (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   phone VARCHAR(15) NOT NULL,
//   otp_code VARCHAR(6) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );