import React from 'react';
import { FaGasPump, FaTachometerAlt, FaCogs } from 'react-icons/fa';

const MyCars = ({ data, tab, setTab }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-red-600 mb-6">My Cars</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setTab('completed')}
          className={`px-6 py-2 rounded-md font-medium ${
            tab === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
          }`}
        >
          Watched (1)
        </button>
        <button
          onClick={() => setTab('upcoming')}
          className={`px-6 py-2 rounded-md font-medium ${
            tab === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
          }`}
        >
          Favourited (1)
        </button>
        <button
          onClick={() => setTab('booking')}
          className={`px-6 py-2 rounded-md font-medium ${
            tab === 'booking' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
          }`}
        >
          Bookings (0)
        </button>
      </div>

      {/* Cards */}
      {Array.isArray(data) && data.length > 0 ? (
        data.map((car) => (
          car && (
            <div
              key={car.id}
              className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden mb-6"
            >
              <img
                src={car.image}
                alt={car.title}
                className="w-full sm:w-64 h-48 sm:h-auto object-cover"
              />
              <div className="flex flex-col justify-between p-4 flex-1">
                <div>
                  <h3 className="text-xl font-bold">{car.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{car.description}</p>

                  <div className="flex items-center space-x-6 text-sm mt-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <FaGasPump />
                      <span className="font-medium">Fuel</span>
                      <span className="text-red-500 ml-1">{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <FaTachometerAlt />
                      <span className="font-medium">Mileage</span>
                      <span className="text-red-500 ml-1">{car.mileage}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <FaCogs />
                      <span className="font-medium">Transmission</span>
                      <span className="text-red-500 ml-1">{car.transmission}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-gray-600 text-sm">Price</span>
                    <p className="text-xl font-semibold">{car.price}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          )
        ))
      ) : (
        <p className="text-gray-500 text-sm">No {tab} test drives available.</p>
      )}
    </div>
  );
};

export default MyCars;
