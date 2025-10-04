import React, { useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Carbox = ({ cars = [], onAddToTestDrive }) => {
  const [active, setActive] = useState('All');
  const buttons = ['All', 'New Car', 'Used Car'];

  // Filter cars based on active filter
  const filteredCars = active === 'All' ? cars : cars.filter(car => car.type === active);

  return (
    <div className='w-full min-h-screen p-6'>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-[5px] h-10 bg-[#DC3545]"></div>
          <span className="text-3xl sm:text-4xl font-bold text-black">Feature listing</span>
        </div>

        {/* Filter Buttons */}
        <div className='flex'>
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setActive(btn)}
              className={`w-28 h-9 font-medium transition-all duration-200 ${
                active === btn
                  ? 'bg-[#DC3545] text-white'
                  : 'bg-white text-black border border-[#DC3545]'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Car Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.slice(0, 9).map((car, i) => (
          <CarBox
            key={i}
            {...car}
            onAddToTestDrive={() => onAddToTestDrive(car)}
          />
        ))}
      </div>

      {/* Load More */}
      <div className='flex justify-center'>
        <Link to='/listing'>
          <button className='bg-[#DC3545] h-[40px] w-[120px] mx-auto my-6 text-white rounded'>
            Load More
          </button>
        </Link>
      </div>
    </div>
  );
};

const CarBox = ({ img, title, model, price, fuel, mileage, transmission, feature, onAddToTestDrive }) => {
  return (
    <div className="max-w-sm rounded-xl border border-gray-300 shadow-md overflow-hidden hover:shadow-lg transition-all bg-white">
      
      {/* Image */}
      <div className="relative">
        <img
          src={img || 'https://via.placeholder.com/300x200.png?text=No+Image'}
          alt="Car"
          className="w-full h-48 object-cover"
        />
        {feature && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {feature}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-red-500">{model || 'Unknown Model'}</p>
        <h3 className="text-lg font-semibold text-gray-800">{title || 'Untitled Car'}</h3>
        <div className="text-lg font-bold text-red-600">₹{price || '0'}</div>

        <div className="flex justify-between text-sm text-gray-600 mt-3 gap-4">
          <div className="flex items-center gap-2">
            <BsFillFuelPumpFill className="text-red-500 size-[24px]" />
            <div>
              <p className="font-medium">Fuel</p>
              <p>{fuel || 'N/A'}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <IoMdSpeedometer className="text-red-500 size-[24px]" />
            <div>
              <p className="font-medium">Mileage</p>
              <p>{mileage || 'N/A'}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <GiGearStickPattern className="text-red-500 size-[24px]" />
            <div>
              <p className="font-medium">Transmission</p>
              <p>{transmission || 'N/A'}</p>
            </div>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />
        <div className="flex items-center justify-between">
          <button className="text-sm font-semibold text-gray-800 hover:text-gray-900 inline-flex items-center gap-1">
            View details
            <ChevronDown size={16} />
          </button>

          <button
            aria-label="Favorite"
            onClick={onAddToTestDrive}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carbox;
