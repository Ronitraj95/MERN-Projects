import React, { useState } from 'react';
import ContactForm from './ContactForm';
import TestDriveCar from './TestDriveCar';
import MyCars from './MyCars';
import Dashboard from './DashBord'

import box2 from '../assets/Parts/box2.jpg';
import box3 from '../assets/Parts/box3.jpg';
import box4 from '../assets/Parts/box4.jpg';

const SidebarWithToggle = () => {
  const testDrivesData = {
    completed: [
      {
        id: 1,
        title: 'Chevrolet Suburban 2021',
        description:
          'Effortlessly compare multiple properties side-by-side to make informed decisions...',
        fuel: 'Petrol',
        mileage: '90 km',
        transmission: 'Auto',
        price: '₹550,000',
        image: box2,
        status: 'completed',
      },
    ],
    upcoming: [
      {
        id: 2,
        title: 'Ford Explorer 2022',
        description:
          'Experience unmatched comfort and performance in your upcoming test drive...',
        fuel: 'Diesel',
        mileage: '85 km',
        transmission: 'Manual',
        price: '₹450,000',
        image: box3,
        status: 'upcoming',
      },
    ],
    booking: [
      {
        id: 3,
        title: 'Honda CR-V 2023',
        description:
          'An advanced drive experience with modern features and high efficiency...',
        fuel: 'Hybrid',
        mileage: '95 km',
        transmission: 'Auto',
        price: '₹600,000',
        image: box4,
        status: 'booking',
      },
    ],
  };

  const [tab, setTab] = useState('completed');
  const data = testDrivesData[tab] || [];
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = ['Dashboard', 'My Cars', 'My test drives', 'Contact Details'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard testDrivesData={testDrivesData} />;
      case 'My Cars':
        return (
          <MyCars
            data={[
              ...testDrivesData.completed,
              ...testDrivesData.upcoming,
              ...testDrivesData.booking,
            ]}
            tab={tab}
            setTab={setTab}
          />
        );
      case 'My test drives':
        return <TestDriveCar data={data} tab={tab} setTab={setTab} />;
      case 'Contact Details':
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      
      <div className="w-64 bg-white shadow-xl p-4">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`block w-full text-left px-4 py-2 my-1 rounded ${
              activeTab === item ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      
      <div className="flex-1 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default SidebarWithToggle;
