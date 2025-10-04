import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import car1 from '../assets/Parts/dimg1.png';
import car2 from '../assets/Parts/dimg2.png';

const Doubleimg = () => {
  const [cardData] = React.useState([
    {
      title: 'Car Inventory',
      text: ['Search Over 18000+', 'Used Vehicles'],
      image: car1
    },
    {
      title: 'Car Inventory',
      text: ['Looking to sell your', 'Used', 'brand car?'],
      image: car2
    },
  ]);

  return (
    <div className='flex flex-col lg:flex-row items-center  justify-center gap-10 w-full px-6 mb-20'>
      {cardData.map((item, index) => (
        <Card key={index} title={item.title} text={item.text} image={item.image} />
      ))}
    </div>
  );
};

function Card({ title, text, image }) {
  return (
    <div className='relative flex flex-col justify-between p-6 
                    lg:w-[40rem] lg:h-[20rem] 
                    md:w-[30rem] md:h-[20rem] 
                    w-[20rem] h-[18rem] 
                    shadow-lg rounded-lg bg-white 
                    hover:shadow-2xl transition-shadow duration-300 ease-in-out 
                    overflow-hidden'>

      {/* Title */}
      <h2 className='text-xl font-bold text-gray-500'>{title}</h2>

      {/* Main Text */}
      <p className='font-bold lg:text-5xl text-[20px] md:text-[30px] my-3 leading-tight'>
        {text.map((line, idx) => (
          <span key={idx} className='block'>{line}</span>
        ))}
      </p>

      {/* CTA */}
      <div className='flex items-center gap-2 mt-auto z-20'>
        <span className='text-black text-base font-semibold'>View Inventory</span>
        <FaLongArrowAltRight className='text-xl' />
      </div>

      {/* Larger Responsive Car Image */}
      <img
        src={image}
        alt=""
        className='absolute 
                   right-4 bottom-[-10px] 
                   w-[14rem] h-[12rem] 
                   sm:w-[16rem] sm:h-[14rem] 
                   md:w-[20rem] md:h-[17rem] 
                   lg:w-[24rem] lg:h-[20rem] 
                   object-contain z-10'
      />
    </div>
  );
}

export default Doubleimg;