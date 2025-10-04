import React from 'react';

const PartsLarge = ({ parts }) => {
  if (!parts || parts.length === 0) {
    return (
      <div className="w-full py-12 bg-gray-100 text-center text-gray-500">
        No car categories available.
      </div>
    );
  }

  return (
    <div className="w-full py-12 bg-gray-100">
     

      {/* Scrollable row with hidden scrollbar */}
      <div className="overflow-hidden px-5 md:px-16">
        <div className="flex space-x-6 snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar">
          {parts.map((part, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-72"
            >
              <Card img={part.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      className="w-full h-60 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    />
  );
};

export default PartsLarge;
