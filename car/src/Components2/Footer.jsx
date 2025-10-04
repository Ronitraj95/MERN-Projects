import React, { useState } from 'react';
import {FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube,FaMapMarkerAlt, FaEnvelope, FaPhone} from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import {Link} from 'react-router-dom';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-blue-600 text-white px-6 md:px-20 py-12">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4 md:mb-0">
            Do you have Something <br /> to Sell through Us?
          </h2>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
          >
            Sell your car today
          </button>
        </div>

        {/* Footer Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
          <div className="flex gap-20">
            <div>
              <h3 className="text-lg font-semibold mb-4">Overview</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>About Us</li>
                <li>Features</li>
                <li>Cars</li>
                <li>Testimonials</li>
                <li>FAQ’s</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>Blogs</li>
                <li>Press mentions</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>

          <div className="bg-white text-black rounded-md shadow-md p-6 w-full lg:w-[24rem] space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <p className="text-sm">7th B Main, BTM 1st Stage, Bangalore, Karnataka 560029</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-600" />
              <p className="text-sm">hello@email.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-red-600" />
              <p className="text-sm">+91 8310955920</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <div className="flex gap-8 mb-4 md:mb-0">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
          <div className="flex gap-4 text-red-600 text-lg">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </footer>

    
      {isOpen && <ComparePopup onClose={() => setIsOpen(false)} />}
    </>
  );
};

// Pop-up Modal
const ComparePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-[2rem] p-6 sm:p-10 w-[90%] max-w-md shadow-lg relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-2xl text-gray-600 hover:text-black"
        >
          ×
        </button>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-black">Compare</h2>
          <button className="text-md font-medium text-black hover:underline">Clear</button>
        </div>
        <hr className="mb-6 border-gray-200" />

        <div className="flex flex-col items-center text-center space-y-4">
          <MdHomeWork  size={48} strokeWidth={1.5} className="text-gray-300 border-none" />
          <p className="text-sm sm:text-base  text-gray-500">
            You haven't selected any cars.
            <br />
            Please select minimum 2 Cars to compare
          </p>
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <button className="w-full py-2 rounded-lg bg-[#ece7e4] text-black font-medium">
            Add
          </button>
         <Link to="/comprer" className="block w-full">
            <button className="w-full py-2 rounded-lg bg-[#dc3545] text-white font-medium hover:bg-red-700">
              Compare
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Footer;
