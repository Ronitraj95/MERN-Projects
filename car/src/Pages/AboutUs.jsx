import React from 'react';
import Hero2 from '../Components2/Hero2';
import Image from '../assets/Parts/speed.png';
import { FaStar, FaHandsHelping, FaBullseye, FaRegCheckCircle } from 'react-icons/fa';
import Footer from '../Components2/Footer';

//images
import vishwa from '../assets/team/vishwa.jpg'
import omkar from '../assets/team/omkar.jpg'
import viresh from '../assets/team/viresh.jpg'
import shiv from '../assets/team/shiv.jpg'

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Vishwa',
      position: 'Founder',
      image: vishwa
    },
    {
      name: 'Viresh',
      position: 'Chief Real Estate Officer',
      image: viresh
    },
    {
      name: 'Omkar',
      position: 'Head of Property Management',
      image: omkar
    },
    {
      name: 'Shiv',
      position: 'Legal Counsel',
      image: shiv
    },
  ];

  return (
    <div>
      <Hero2 />

      {/* Our Journey Section */}
      <div className="bg-white px-4 sm:px-10 lg:px-20 pt-16 shadow-2xl rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          <span className="border-l-4 border-red-500 pl-2">Our Journey</span>
        </h2>
        <OurJourney />
      </div>

      {/* Our Values Section */}
      <OurValues />

      {/* Meet Our Team Section */}
      <div className="bg-white px-4 sm:px-10 lg:px-20 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          <span className="border-l-4 border-red-500 pl-2">Meet Our Team</span>
        </h2>
        <p className="text-gray-600 mb-10">
          At Homyfyd, our success is driven by the dedication and expertise of our team.
          Get to know the people behind our mission to make your real estate dreams a reality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const OurJourney = () => {
  return (
    <section className="bg-white pb-16 px-4 sm:px-10 lg:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <p className="text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">200+</h3>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
            <div className="border rounded-lg p-4 text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">10k+</h3>
              <p className="text-sm text-gray-500">Properties For Clients</p>
            </div>
            <div className="border rounded-lg p-4 text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">16+</h3>
              <p className="text-sm text-gray-500">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={Image} alt="Dashboard speedometer" className="rounded-lg max-w-md w-full object-contain"/>
        </div>
      </div>
    </section>
  );
};

const OurValues = () => {
  const values = [
    {
      icon: <FaStar className="text-blue-500 text-2xl" />,
      title: 'Trust',
      description: 'Trust is the cornerstone of every successful real estate transaction.',
    },
    {
      icon: <FaBullseye className="text-blue-500 text-2xl" />,
      title: 'Excellence',
      description: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
    },
    {
      icon: <FaHandsHelping className="text-blue-500 text-2xl" />,
      title: 'Client-Centric',
      description: 'Your dreams and needs are at the center of our universe. We listen, understand.',
    },
    {
      icon: <FaRegCheckCircle className="text-blue-500 text-2xl" />,
      title: 'Our Commitment',
      description: 'We are dedicated to providing you with the highest level of service, professionalism.',
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-10 lg:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="border-l-4 border-red-500 pl-2">Our Values</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Right Column - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div key={index} className="flex items-start gap-4 border-l border-gray-200 pl-4">
              <div className="shrink-0 bg-blue-100 p-2 rounded-full">
                {value.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ name, position, image }) => (
  <div className="border rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
    <img
      src={image}
      alt={name}
      className="mx-auto h-40 w-40 object-cover rounded"
    />
    <h3 className="mt-4 text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-600">{position}</p>
  </div>
);

export default AboutUs;
