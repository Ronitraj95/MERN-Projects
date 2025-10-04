import React from 'react';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TestimonialSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-[#fffdfd] min-h-[60vh] md:min-h-[50vh] shadow-2xl">
      
      <div className="lg:w-1/2 w-full mb-12 lg:mb-0">
        <div className="border-l-8 border-red-500 pl-4">
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#2c3e50] leading-snug">
            Hear From Our <br />Community
          </h2>
        </div>
        <p className="text-gray-500 text-base mt-4 max-w-md">
          Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
        </p>

        <div className="flex gap-6 mt-10">
          <button className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <FaArrowLeft />
          </button>
          <button className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 w-full max-w-xl relative">
        {/* Decorative Bubble */}
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-red-300 to-purple-300 rounded-full opacity-50 z-0"></div>

        <div className="bg-white rounded-xl shadow-xl p-8 relative z-10">
          <FaQuoteLeft className="text-red-500 text-5xl mb-4" />

          <p className="text-gray-700 text-lg leading-relaxed">
            I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly
            to find us the perfect home. We couldn't be happier with our new place!
          </p>

          <div className="flex items-center justify-between mt-8 pt-4 border-t">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-800">Arjan S. Patil</span>
            </div>

            <div className="flex gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <span className="w-4 h-1.5 rounded-full bg-gray-800"></span>
            <span className="w-4 h-1.5 rounded-full bg-gray-300"></span>
            <span className="w-4 h-1.5 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
