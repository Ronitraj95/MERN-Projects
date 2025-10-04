import React from 'react';

const Parts = ({ parts }) => {
  if (!parts || parts.length === 0) {
    return (
      <div className="w-full py-12 bg-gray-100 text-center text-gray-500">
        No car categories available.
      </div>
    );
  }

  return (
    <div className="w-full py-12 bg-gray-100">
      {/* Heading */}
      <div className="flex justify-between items-center px-5 md:px-16 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-[5px] h-10 bg-[#DC3545]"></div>
          <span className="text-3xl sm:text-4xl font-bold text-black">Explore Our Cars</span>
        </div>
        <span
          className="text-[#DC3545] hover:underline cursor-pointer font-medium hidden sm:inline"
          role="button"
          tabIndex={0}
          onClick={() => console.log('View more clicked')}
        >
          View More
        </span>
      </div>

      {/* Grid for large screens */}
      <div className="hidden lg:grid grid-cols-6 gap-6 px-5 md:px-16">
        {parts.map((part, index) => (
          <Card key={index} img={part.img} />
        ))}
      </div>

      {/* Scrollable row for small/medium screens */}
      <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory space-x-4 px-5 md:px-16 scroll-smooth scrollbar-thin scrollbar-thumb-[#DC3545]/80">
        {parts.map((part, index) => (
          <div key={index} className="flex-shrink-0 w-48 snap-center">
            <Card img={part.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
      <img
        src={img}
        alt="Car"
        className="w-40 h-40 object-contain" // Increased size
      />
    </div>
  );
};

export default Parts;
