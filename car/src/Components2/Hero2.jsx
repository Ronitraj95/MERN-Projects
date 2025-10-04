import React from 'react';
import cars from '../assets/cars.png';
import Navbar from './Navbar';

const Hero2 = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src={cars}
        alt="cars"
        className="w-full h-[40vh] sm:h-[70vh] md:h-[70vh] lg:h-[50vh] xl:h-[70vh] object-cover"
      />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero2;
