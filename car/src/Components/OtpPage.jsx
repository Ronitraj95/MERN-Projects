import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../assets/image.png';
import car from '../assets/image copy.png';
import CarLoading from '../LodingComponents/CarLoading';

const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(5).fill(''));
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Get phone number from route state
  const phone = location.state?.phone || '0000000000';

  // Countdown timer effect
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, '');
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join('');

    if (otp.includes('') || fullOtp.length !== 5) {
      setError('Please enter the complete 5-digit OTP');
      return;
    }

    console.log('Entered OTP:', fullOtp);
    setLoading(true);

    setTimeout(() => {
      if (fullOtp === '00000') {
        navigate('/SideBar'); 
      } else {
        navigate('/home'); 
      }
    }, 200);

    // Backend code (if needed)
    // try {
    //   const res = await fetch('http://localhost:5000/api/save-otp', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ otp: fullOtp, phone }),
    //   });
    //   const data = await res.json();
    //   if (data.success) {
    //     if (fullOtp === '00000') navigate('/admin');
    //     else navigate('/home');
    //   } else {
    //     setError('Failed to verify OTP');
    //   }
    // } catch (err) {
    //   console.error('Error:', err);
    //   setError('Server error. Please try again.');
    // }
  };

  const handleResendOtp = async () => {
    setTimer(60);
    console.log('Resending OTP to', phone);

    // Backend resend logic (if needed)
    // try {
    //   const res = await fetch('http://localhost:5000/api/resend-otp', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ phone }),
    //   });
    //   const data = await res.json();
    //   if (!data.success) {
    //     setError('Failed to resend OTP');
    //   }
    // } catch (err) {
    //   console.error('Resend OTP error:', err);
    //   setError('Server error while resending OTP');
    // }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {loading && <CarLoading />}

      {/* Background image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
      />

      {/* Card */}
      <div className="relative z-10 bg-white rounded-xl shadow-2xl w-[90%] max-w-4xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 hidden md:block">
          <img src={car} alt="Car" className="w-full h-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center relative">
          <Link
            to="/"
            className="absolute top-4 right-4 text-red-500 text-xl font-bold"
          >
            ×
          </Link>

          <h1 className="text-3xl font-bold mb-4 text-center">
            <span className="text-blue-600">Car</span>
            <span className="text-red-500">space</span>
          </h1>

          <p className="text-lg font-semibold text-center">Verify your Mobile</p>
          <p className="text-sm text-gray-600 text-center mb-4">
            We have sent a 5-digit OTP to {phone}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 w-full"
          >
            <div className="grid grid-cols-5 gap-2">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              ))}
            </div>

            {error && (
              <p className="text-sm text-red-500 font-medium">{error}</p>
            )}

            {/* Timer */}
            <p className="text-sm text-gray-600 mt-2">
              Time Remaining:{' '}
              <span className="text-black font-medium">
                00:{timer < 10 ? `0${timer}` : timer}
              </span>
            </p>

            {/* Resend OTP */}
            {timer === 0 && (
              <button
                type="button"
                onClick={handleResendOtp}
                className="text-blue-600 underline text-sm mt-1"
              >
                Resend OTP
              </button>
            )}

            <button
              type="submit"
              className="bg-red-500 text-white w-full h-10 rounded-md font-semibold mt-4"
            >
              Submit OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;



// for data trasformation
// // POST /api/save-otp
// req.body = {
//   otp: "12345",
//   phone: "