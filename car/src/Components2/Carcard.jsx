import React from 'react';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { IoMdSpeedometer } from 'react-icons/io';
import { GiGearStickPattern } from 'react-icons/gi';
import { FiChevronDown as ChevronDown, FiHeart as Heart } from 'react-icons/fi';

const Carcard = ({ image, model, title, price, fuel, mileage, transmission }) => {
  return (
    <div className="max-w-sm rounded-xl border border-gray-300 shadow-md overflow-hidden hover:shadow-lg transition-all bg-white">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
          Featured
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-red-500">{model}</p>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="text-lg font-bold text-red-600">₹{price}</div>

        {/* Features */}
        <div className="flex justify-between text-sm text-gray-600 mt-3 gap-4">
          <div className="flex items-center gap-2">
            <BsFillFuelPumpFill className="text-red-500 size-[20px]" />
            <div>
              <p className="font-medium">Fuel</p>
              <p>{fuel}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <IoMdSpeedometer className="text-red-500 size-[20px]" />
            <div>
              <p className="font-medium">Mileage</p>
              <p>{mileage}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <GiGearStickPattern className="text-red-500 size-[20px]" />
            <div>
              <p className="font-medium">Transmission</p>
              <p>{transmission}</p>
            </div>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <button className="text-sm font-semibold text-gray-800 hover:text-gray-900 inline-flex items-center gap-1">
            View details
            <ChevronDown size={16} />
          </button>
          <button
            aria-label="Favorite"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carcard;
