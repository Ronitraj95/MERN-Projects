import React, { useState } from 'react';
import Hero2 from '../Components2/Hero2';
import Footer from '../Components2/Footer';
import { IoMdHeart, IoMdSpeedometer } from "react-icons/io";
import { MdCompareArrows, MdCurrencyRupee } from "react-icons/md";
import { FaShareAlt, FaMapMarkerAlt } from "react-icons/fa";
import { RiPrinterLine } from "react-icons/ri";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { ChevronDown, Heart } from "lucide-react";

import box1 from '../assets/Parts/box1.jpg';
import box2 from '../assets/Parts/box2.jpg';
import box3 from '../assets/Parts/box3.jpg';
import box4 from '../assets/Parts/box4.jpg';
import s1 from '../assets/subcar/subcar1.png';
import s2 from '../assets/subcar/subcae2.png';
import s3 from '../assets/subcar/subcar3.png';
import s4 from '../assets/subcar/subcar4.png';
import s5 from '../assets/subcar/subcar5.png';

import Cars from '../Components2/PartsLarge';

const cars = [
  { img: box2, title: "Chevrolet Suburban 2021", model: "Mini Cooper 3", price: "27,000", fuel: "Petrol", mileage: "90 km", transmission: "Auto", feature: "New Car" },
  { img: box3, title: "Hyundai Creta 2022", model: "Mini Cooper 5", price: "18,000", fuel: "Diesel", mileage: "80 km", transmission: "Manual", feature: "Used Car" },
  { img: box4, title: "Toyota Fortuner", model: "Mini SUV", price: "35,000", fuel: "Diesel", mileage: "95 km", transmission: "Auto", feature: "New Car" }
];

const parts = [{ img: s1 }, { img: s2 }, { img: s3 }, { img: s4 }, { img: s5 }];

const SingleCar = () => {
  const carinfo = [2023, "Mercedes-Benz", "C Class", "Convertible"];
  const Icon = [
    <IoMdHeart className='text-white' />, <MdCompareArrows className='text-white' />, <FaShareAlt className='text-white' />, <RiPrinterLine className='text-white' />
  ];

  return (
    <div className="bg-gray-50 px-2 sm:px-4">
      <Hero2 />

      <div className='flex flex-col mt-10 mx-2 sm:mx-6 md:mx-10 shadow-lg p-4 sm:p-6 rounded-lg bg-white'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4'>
          <div className='flex items-start gap-2'>
            <div className='w-[6px] h-10 bg-[#DC3545]'></div>
            <h1 className='text-2xl sm:text-4xl font-bold text-black'>{carinfo[1]} - {carinfo[2]}</h1>
          </div>
          <div className='flex flex-wrap gap-2'>
            {Icon.map((icon, index) => (
              <div key={index} className='w-10 h-10 bg-gray-400 hover:bg-gray-500 text-white flex items-center justify-center rounded-lg cursor-pointer'>
                {icon}
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <div className='flex gap-2 flex-wrap text-xs sm:text-sm'>
            {carinfo.map((info, index) => (
              <div key={index} className='px-3 py-1 bg-gray-200 text-red-600 rounded-2xl'>{info}</div>
            ))}
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
            <div className='flex items-center'>
              <MdCurrencyRupee className='text-2xl' />
              <span className='text-xl font-bold text-green-600'>659999</span>
            </div>
            <div className='flex items-center text-gray-500 line-through'>
              <MdCurrencyRupee className='text-xl' />
              <span className='text-lg'>749999</span>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-[15rem] sm:h-[20rem] md:h-[25rem] mx-auto bg-cover bg-center mt-10 rounded-lg shadow-lg' style={{ backgroundImage: `url(${box1})` }} />

      <Cars parts={parts} />
      <Description />
      <SingleCarDetails />
      <LocationCard />
      <LoanCalculator />

      <div className="mt-10 shadow-2xl rounded-lg bg-white p-4 sm:p-6 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">Related Listings</h2>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, i) => (
            <CarCard key={i} {...car} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Description = () => (
  <div className='mt-16 mb-10 px-2 sm:px-6 md:px-10 shadow-2xl py-8 rounded-lg bg-white'>
    <div className='flex items-center gap-2 mb-4'>
      <div className='h-10 w-[6px] bg-[#DC3545]'></div>
      <h1 className='text-2xl sm:text-3xl font-bold text-black'>Description</h1>
    </div>
    <p className='text-gray-700 leading-relaxed text-base sm:text-lg'>
      There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passa There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form look even by injected humour, or randomised There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passa There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised many variations of passages of Lorem Ipsum available, but majority There are many variations of passages of
    </p>
  </div>
);




const SingleCarDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, phone, description } = formData;

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) newErrors.email = 'Enter a valid email';

    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone must be 10 digits';

    if (description.length > 250) newErrors.description = 'Description should be under 250 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Reset or send data...
    }
  };

  return (
    <div className='px-2 sm:px-6 md:px-10 py-10 bg-white grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 shadow-2xl rounded-lg'>
      <div className='md:col-span-2 space-y-12'>
        <Section title="Car Overview" items={{
          Condition: "New", Cylinders: "6", "Stock Number": "N8990", "Fuel Type": "Petrol",
          "VIN Number": "84HKI92KJDC", Doors: "4", Year: "2023", Colour: "Black",
          Mileage: "28,000", Seats: "5", Transmission: "Automatic", "City MPG": "18",
          "Engine Size": "4.8 L", "Highway MPG": "28", "Driver type": "2WD"
        }} />
        <Section title="Features" list={[
          "A/C: Front", "Front fog light", "Power steering", "Central locking", "Rain sensing wipe",
          "Vanity mirror", "Leather", "Rear Spoilers", "Trunk Light", "Sports package", "Sun roof", "Navigation system"
        ]} />
      </div>

      <div className='space-y-4'>
        <div className='space-y-2 sm:space-y-3'>
          <button className='w-full bg-[#DC3545] text-white font-medium py-2 rounded-md hover:bg-red-600 transition'>Schedule Test Drive</button>
          <button className='w-full border border-[#DC3545] text-[#DC3545] font-medium py-2 rounded-md hover:bg-red-50 transition'>Make An Offer Price</button>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4 border border-gray-200 p-6 rounded-lg'>
          <div className='text-center text-gray-700 font-medium'>
            <div className='h-16 w-16 rounded-full bg-gray-100 mx-auto mb-2' />
            <p>Owner of Car</p>
          </div>

          {/* Name */}
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-400`}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-400`}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-400`}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

          {/* Description */}
          <div>
            <textarea
              name="description"
              rows="3"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-400`}
            />
            {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
          </div>

          <button type="submit" className='w-full bg-[#DC3545] text-white font-medium py-2 rounded-md hover:bg-red-600 transition'>Send message</button>
        </form>
      </div>
    </div>
  );
};



const Section = ({ title, items = {}, list = [] }) => (
  <div>
    <div className='flex items-center gap-2 mb-4'>
      <div className='h-10 w-[6px] bg-[#DC3545]'></div>
      <h1 className='text-2xl sm:text-3xl font-bold text-black'>{title}</h1>
    </div>
    {Object.keys(items).length > 0 ? (
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-gray-800 text-sm sm:text-base'>
        {Object.entries(items).map(([k, v], i) => <p key={i}><strong>{k}:</strong> {v}</p>)}
      </div>
    ) : (
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-800 text-sm sm:text-base'>
        {list.map((feature, i) => (
          <div key={i} className='flex items-center gap-2'>
            <span className='text-blue-600'>✔</span> {feature}
          </div>
        ))}
      </div>
    )}
  </div>
);

const LocationCard = () => (
  <div className="px-2 sm:px-6 md:px-10 mt-10 shadow-2xl py-10 rounded-lg bg-white">
    <div className="border rounded-lg shadow-md p-6 bg-white space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-black border-l-4 border-red-600 pl-3">Location</h2>
      <div className="flex items-center text-gray-700 gap-3">
        <FaMapMarkerAlt className="text-red-500" />
        <span className="text-base">4517 Washington Ave. Manchester, Kentucky 39495</span>
      </div>
      <div className="w-full h-64 rounded-md overflow-hidden">
        <iframe
          title="Location Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          className="rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.9603898747555!2d-83.76447562468007!3d37.15364134769742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1sen!2sin!4v1754315912466!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);


const LoanCalculator = () => {
  const [formValues, setFormValues] = useState({
    totalAmount: '',
    downPayment: '',
    amortizationPeriod: '',
    interest: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    const { totalAmount, downPayment, amortizationPeriod, interest } = formValues;

    if (!totalAmount || totalAmount <= 0) newErrors.totalAmount = 'Enter a valid total amount';
    if (!downPayment || downPayment < 0) newErrors.downPayment = 'Enter a valid down payment';
    if (!amortizationPeriod || amortizationPeriod <= 0) newErrors.amortizationPeriod = 'Enter valid period in years';
    if (!interest || interest <= 0 || interest > 100) newErrors.interest = 'Enter interest rate (0-100%)';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform calculation logic here
      console.log('Form is valid, proceed with calculation:', formValues);
    }
  };

  const handleReset = () => {
    setFormValues({
      totalAmount: '',
      downPayment: '',
      amortizationPeriod: '',
      interest: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-white py-10 w-full px-2 sm:px-6 mt-10 shadow-2xl rounded-lg">
      <div className="max-w-5xl mx-auto p-6 rounded-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 border-l-4 border-red-600 pl-2">
          Loan Calculator
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Total Amount */}
            <div>
              <label className="block mb-1 text-gray-700">Total Amount</label>
              <input
                name="totalAmount"
                type="number"
                value={formValues.totalAmount}
                onChange={handleChange}
                placeholder="Enter total amount"
                className={`w-full border ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2`}
              />
              {errors.totalAmount && <p className="text-red-500 text-sm">{errors.totalAmount}</p>}
            </div>

            {/* Down Payment */}
            <div>
              <label className="block mb-1 text-gray-700">Down Payment</label>
              <input
                name="downPayment"
                type="number"
                value={formValues.downPayment}
                onChange={handleChange}
                placeholder="Enter down payment"
                className={`w-full border ${errors.downPayment ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2`}
              />
              {errors.downPayment && <p className="text-red-500 text-sm">{errors.downPayment}</p>}
            </div>

            {/* Amortization Period */}
            <div>
              <label className="block mb-1 text-gray-700">Amortization Period (years)</label>
              <input
                name="amortizationPeriod"
                type="number"
                value={formValues.amortizationPeriod}
                onChange={handleChange}
                placeholder="Enter period in years"
                className={`w-full border ${errors.amortizationPeriod ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2`}
              />
              {errors.amortizationPeriod && <p className="text-red-500 text-sm">{errors.amortizationPeriod}</p>}
            </div>

            {/* Interest */}
            <div>
              <label className="block mb-1 text-gray-700">Interest (%)</label>
              <input
                name="interest"
                type="number"
                value={formValues.interest}
                onChange={handleChange}
                placeholder="Enter interest rate"
                className={`w-full border ${errors.interest ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2`}
              />
              {errors.interest && <p className="text-red-500 text-sm">{errors.interest}</p>}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md"
            >
              Calculate
            </button>
            <button
              type="reset"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



const CarCard = ({ img, title, model, price, fuel, mileage, transmission, feature }) => (
  <article className="max-w-sm rounded-xl border border-gray-300 shadow-md overflow-hidden hover:shadow-lg transition-all bg-white">
    <div className="relative">
      <img src={img || 'https://via.placeholder.com/300x200.png?text=No+Image'} alt="Car" className="w-full h-40 sm:h-48 md:h-52 object-cover" />
      {feature && <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">{feature}</span>}
    </div>
    <div className="p-4 space-y-2">
      <p className="text-sm text-red-500">{model}</p>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="text-lg font-bold text-red-600">₹{price}</div>
      <div className="flex justify-between text-sm text-gray-600 mt-3 gap-4">
        <div className="flex items-center gap-2"><BsFillFuelPumpFill className="text-red-500 size-[24px]" /><div><p className="font-medium">Fuel</p><p>{fuel}</p></div></div>
        <div className="flex items-center gap-2"><IoMdSpeedometer className="text-red-500 size-[24px]" /><div><p className="font-medium">Mileage</p><p>{mileage}</p></div></div>
        <div className="flex items-center gap-2"><GiGearStickPattern className="text-red-500 size-[24px]" /><div><p className="font-medium">Transmission</p><p>{transmission}</p></div></div>
      </div>
      <hr className="my-4 border-gray-200" />
      <div className="flex items-center justify-between">
        <button className="text-sm font-semibold text-gray-800 hover:text-gray-900 inline-flex items-center gap-1">View details <ChevronDown size={16} /></button>
        <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"><Heart size={18} /></button>
      </div>
    </div>
  </article>
);

export default SingleCar;
