import React from 'react';
import Lottie from 'lottie-react';
import carLoader from '../assets/Red Car.json'

const CarLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Lottie
        animationData={carLoader}
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default CarLoading;
