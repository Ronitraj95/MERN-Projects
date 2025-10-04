import React from 'react';
import Hero2 from '../Components2/Hero2';
import FilterSidebar from '../Components2/FilterSidebar';
import Carcard from '../Components2/Carcard';
import Footer from '../Components2/Footer';
import { Link } from 'react-router-dom';         

import box1 from '../assets/Parts/box1.jpg';
import box2 from '../assets/Parts/box2.jpg';
import box3 from '../assets/Parts/box3.jpg';
import box4 from '../assets/Parts/box4.jpg';
import box5 from '../assets/Parts/box5.jpg';
import box6 from '../assets/Parts/box6.jpg';

const Listing = () => {
  const cars = [
    {
      image: box1,
      title: "Chevrolet Suburban 2021",
      model: "Mini Cooper 3",
      price: "27,000",
      fuel: "Petrol",
      mileage: "90 km",
      transmission: "Auto"
    },
    {
      image: box2,
      title: "Hyundai Creta 2022",
      model: "Mini Cooper 5",
      price: "18,000",
      fuel: "Diesel",
      mileage: "80 km",
      transmission: "Manual"
    },
    {
      image: box3,
      title: "Toyota Fortuner",
      model: "Mini SUV",
      price: "35,000",
      fuel: "Diesel",
      mileage: "95 km",
      transmission: "Auto"
    },
    {
      image: box4,
      title: "Maruti Swift 2020",
      model: "Hatchback",
      price: "9,000",
      fuel: "Petrol",
      mileage: "70 km",
      transmission: "Manual"
    },
    {
      image: box5,
      title: "Mahindra Thar 2023",
      model: "Offroader",
      price: "25,000",
      fuel: "Diesel",
      mileage: "85 km",
      transmission: "Manual"
    },
    {
      image: box6,
      title: "Honda City 2021",
      model: "Sedan",
      price: "15,000",
      fuel: "Petrol",
      mileage: "88 km",
      transmission: "Auto"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero2 />

      {/* Heading Section */}
      <div className="w-[95%] max-w-[95rem] mx-auto mt-6 p-4 shadow-2xl rounded-lg bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-[5px] h-10 bg-red-600"></div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Used cars for sale nationwide
          </h1>
        </div>
        <Link to={"/singlecar"} >
        <button className="border border-red-600 text-red-600 font-semibold px-4 py-2 rounded-full hover:bg-red-100 transition">
          Save search
        </button></Link>
      </div>

      
      <div className="flex flex-col md:flex-row gap-6 p-4 bg-[#f9f9f9]">
       
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>

        {/* Car Listings */}
        <section className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <Carcard
              key={index}
              image={car.image}
              title={car.title}
              model={car.model}
              price={car.price}
              fuel={car.fuel}
              mileage={car.mileage}
              transmission={car.transmission}
            />
          ))}
        </section>
      </div>

      
      <Footer />
    </div>
  );
};



export default Listing;
