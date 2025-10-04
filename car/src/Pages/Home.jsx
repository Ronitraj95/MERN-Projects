import React from 'react';
import Hero from '../Components2/Hero';
import Parts from '../Components2/Parts';
import Carbox from '../Components2/Carbox';
import Doubleimg from '../Components2/Doubleimg';
import Testimonial from '../Components2/Testimonial';
import ContactSection from '../Components2/ContactSection';
import CarspaceFAQ from '../Components2/CarspaceFAQ';
import BlogSection from '../Components2/BlogSection';
import Footer from '../Components2/Footer';

import p1 from '../assets/Parts/p1.png';
import p2 from '../assets/Parts/p2.png';
import p3 from '../assets/Parts/p3.png';
import p4 from '../assets/Parts/p4.png';
import p5 from '../assets/Parts/p5.png';
import p6 from '../assets/Parts/p6.png';

import box1 from '../assets/Parts/box1.jpg';
import box2 from '../assets/Parts/box2.jpg';
import box3 from '../assets/Parts/box3.jpg';
import box4 from '../assets/Parts/box4.jpg';
import box5 from '../assets/Parts/box5.jpg';
import box6 from '../assets/Parts/box6.jpg';

const Home = () => {
  const parts = [
    { img: p1, name: 'Sedan' },
    { img: p2, name: 'Campers' },
    { img: p3, name: 'Cabriolet' },
    { img: p4, name: 'Pickup' },
    { img: p5, name: 'Super Car' },
    { img: p6, name: 'Minivan' },
  ];

  const cars = [
    {
      img: box1,
      title: "Chevrolet Suburban 2021",
      model: "Mini Cooper 3",
      price: "27,000",
      fuel: "Petrol",
      mileage: "90 km",
      transmission: "Auto",
      feature: "New Car"
    },
    {
      img: box2,
      title: "Hyundai Creta 2022",
      model: "Mini Cooper 5",
      price: "18,000",
      fuel: "Diesel",
      mileage: "80 km",
      transmission: "Manual",
      feature: "Used Car"
    },
    {
      img: box3,
      title: "Toyota Fortuner",
      model: "Mini SUV",
      price: "35,000",
      fuel: "Diesel",
      mileage: "95 km",
      transmission: "Auto",
      feature: "New Car"
    },
    {
      img: box4,
      title: "Maruti Swift 2020",
      model: "Hatchback",
      price: "9,000",
      fuel: "Petrol",
      mileage: "70 km",
      transmission: "Manual",
      feature: "Used Car"
    },
    {
      img: box5,
      title: "Mahindra Thar 2023",
      model: "Offroader",
      price: "25,000",
      fuel: "Diesel",
      mileage: "85 km",
      transmission: "Manual",
      feature: "New Car"
    },
    {
      img: box6,
      title: "Honda City 2021",
      model: "Sedan",
      price: "15,000",
      fuel: "Petrol",
      mileage: "88 km",
      transmission: "Auto",
      feature: "Used Car"
    }
  ];

  return (
    <div className="flex flex-col">
      <Hero />

      <div className="h-8 sm:h-12 md:h-16" />

      <Parts parts={parts} />

      <div className="px-4 sm:px-8 md:px-20 mt-8 md:mt-10">
        <Carbox cars={cars} />
      </div>

      <div className="px-4 sm:px-8 md:px-20 mt-8 md:mt-10">
        <Doubleimg />
      </div>

      <div className="px-4 sm:px-8 md:px-20 mt-8 md:mt-10">
        <Testimonial />
      </div>

      <div className="px-4 sm:px-8 md:px-20 mt-8 md:mt-10">
        <ContactSection />
      </div>

      <div className="px-4 sm:px-8 md:px-20 mt-8 md:mt-10">
        <CarspaceFAQ />
      </div>

      <div className="px-4 sm:px-8 md:px-20 mt-8 md:mt-10 mb-16">
        <BlogSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
