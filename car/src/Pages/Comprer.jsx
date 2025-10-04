import React from 'react';
import Hero2 from '../Components2/Hero2';
import { Link } from 'react-router-dom';
import box2 from '../assets/Parts/box2.jpg';
import box3 from '../assets/Parts/box3.jpg';
import Footer from '../Components2/Footer';

const carData = [
  {
    image: box2,
    name: 'Car name',
    location: 'Bangalore',
    owner: 'Rustomjee',
    budget: '$48L - $90L',
    year: 2023,
    engineSize: '4.8 L',
    mileage: '28,000 Mileage',
    driverType: '2WD',
    cylinders: 6,
    fuel: 'Petrol',
    doors: 4,
    color: 'Black',
    seats: 5,
    cityMPG: 5,
    highwayMPG: 5,
  },
  {
    image: box3,
    name: 'Car name',
    location: 'Bangalore',
    owner: 'Rustomjee',
    budget: '$48L - $90L',
    year: 2023,
    engineSize: '4.8 L',
    mileage: '28,000 Mileage',
    driverType: '2WD',
    cylinders: 6,
    fuel: 'Petrol',
    doors: 4,
    color: 'Black',
    seats: 5,
    cityMPG: 5,
    highwayMPG: 5,
  }
];

const Comprer = () => {
  return (
    <div>
      <Hero2 />

      {/* Compare Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10 mx-4 sm:mx-10 p-6 bg-white rounded-lg shadow-2xl gap-6">
        {/* Left side */}
        <div className="flex gap-4 items-start w-full md:w-3/4">
          <div className="h-10 w-2 bg-red-600 mt-1"></div>
          <div>
            <h2 className="text-3xl font-semibold mb-2">Compare Cars</h2>
            <p className="text-gray-600">
              Effortlessly compare multiple properties side-by-side to make informed decisions.
              Our intuitive interface lets you evaluate key aspects such as price, location,
              amenities, and more, helping you find your perfect home with ease.
            </p>
          </div>
        </div>

        {/* Right side - Button */}
        <div className="w-full md:w-auto">
          <Link to="/compare" className="block w-full">
            <button className="w-full md:w-40 py-2 px-4 rounded-lg bg-[#dc3545] text-white font-medium hover:bg-red-700 transition">
              Add Car
            </button>
          </Link>
        </div>
      </div>

      <CompareCars />
      <div className='mt-10'><Footer /></div>
    </div>
  );
};

const CompareCars = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-10 overflow-x-auto">
      <div className="flex gap-6 justify-center min-w-[720px] sm:min-w-full">
        {carData.map((car, index) => (
          <div
            key={index}
            className="bg-white shadow-sm p-3 rounded-md min-h-[580px] w-[400px] flex-shrink-0 flex flex-col"
          >
            <img src={car.image} alt="Car" className="w-full h-48 object-cover rounded mb-3" />

            {/* Car name and location same line */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <span className="text-xl bg-red-100 text-red-600 px-2 py-0.5 rounded">
                {car.location}
              </span>
            </div>

            {/* Half-width buttons side by side */}
            <div className="flex gap-2 mb-3">
              <button className="w-1/2 bg-red-600 text-white text-[23px] py-1 rounded hover:bg-red-700">
                Test Drive
              </button>
              <button className="w-1/2 bg-blue-600 text-white text-[23px] py-1 rounded hover:bg-blue-700">
                Call
              </button>
            </div>

            <ul className="text-[20px] text-gray-700 space-y-1 flex-1">
              <li><b>Owner:</b> {car.owner}</li>
              <li><b>Budget:</b> {car.budget}</li>
              <li><b>Year:</b> {car.year}</li>
              <li><b>Engine:</b> {car.engineSize}</li>
              <li><b>Mileage:</b> {car.mileage}</li>
              <li><b>Driver:</b> {car.driverType}</li>
              <li><b>Cylinders:</b> {car.cylinders}</li>
              <li><b>Fuel:</b> {car.fuel}</li>
              <li><b>Doors:</b> {car.doors}</li>
              <li><b>Color:</b> {car.color}</li>
              <li><b>Seats:</b> {car.seats}</li>
              <li><b>City MPG:</b> {car.cityMPG}</li>
              <li><b>Highway MPG:</b> {car.highwayMPG}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comprer;
