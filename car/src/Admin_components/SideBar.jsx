import React, { useState } from 'react';
import { IoNotifications } from "react-icons/io5";
import { GiRamProfile } from "react-icons/gi";
import { FaHome, FaUsers, FaClipboardList, FaCalendarAlt, FaQuestionCircle, FaBlog, FaCommentDots } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Home1 from './Home1';

// Navbar Component
const AdminNavbar = ({ activeTab, toggleSidebar }) => {
  const [img, setImg] = useState(true);

  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 border-b shadow-sm">
     
      <button 
        className="md:hidden p-2 bg-gray-100 rounded hover:bg-gray-200"
        onClick={toggleSidebar}
      >
        <FiMenu size={20} />
      </button>

      <div>
        <h1 className="text-xl font-bold text-gray-800">{activeTab}</h1>
        <p className="text-sm text-gray-500">Welcome Carspace Admin!</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
          <IoNotifications size={24} />
        </button>

      
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setImg(!img)}
        >
          {img ? (
            <img
              src="https://via.placeholder.com/40" // Replace with real profile image
              alt="Profile"
              className="w-10 h-10 rounded-full"
              onError={() => setImg(false)} // Fallback if image fails
            />
          ) : (
            <GiRamProfile size={28} className="text-gray-600" />
          )}
          <span className="text-gray-700 font-medium">Admin</span>
        </div>
      </div>
    </div>
  );
};

// Main Component
const SidebarWithToggle = () => {
  const [activeTab, setActiveTab] = useState('Admin_Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  

  const menuItems = [
    { name: 'Admin_Home', icon: <FaHome /> },
    { name: 'User', icon: <FaUsers /> },
    { name: 'Responses', icon: <FaCommentDots /> },
    { name: 'Manage listing', icon: <FaClipboardList /> },
    { name: 'Bookings', icon: <FaCalendarAlt /> },
    { name: 'FAQs', icon: <FaQuestionCircle /> },
    { name: 'Blogs', icon: <FaBlog /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Admin_Home':
        return <Home1/>;
      case 'User':
        return <div className="p-4">👤 User Page</div>;
      case 'Responses':
        return <div className="p-4">💬 Responses Page</div>;
      case 'Manage listing':
        return <div className="p-4">📋 Manage Listing Page</div>;
      case 'Bookings':
        return <div className="p-4">📅 Bookings Page</div>;
      case 'FAQs':
        return <div className="p-4">❓ FAQs Page</div>;
      case 'Blogs':
        return <div className="p-4">📰 Blogs Page</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
    
      {isSidebarOpen && (
        <div className="w-64 bg-white shadow-xl p-4 flex flex-col fixed md:relative z-50">
          <div className="mb-6 text-center border-b pb-4">
            <h1 className="text-3xl text-red-600 font-bold">Carspace</h1>
          </div>
          {menuItems.map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center gap-3 w-full text-left px-4 py-2 my-1 rounded transition-all duration-200 ${
                activeTab === name
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              {icon} {name}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-0 ml-64">
        <AdminNavbar 
          activeTab={activeTab} 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        <div className="flex-1 overflow-y-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default SidebarWithToggle;
