import React from 'react';

const Dashboard = ({ testDrivesData }) => {
  const { completed = [], upcoming = [], booking = [] } = testDrivesData;

  const cardStyles =
    'bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 border border-gray-100';

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Dashboard Overview</h2>

      {/* Summary Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className={cardStyles}>
          <h3 className="text-xl font-semibold text-gray-700">Watched Cars</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">{completed.length}</p>
          {completed[0] && (
            <p className="text-sm text-gray-500 mt-2">Latest: {completed[0].title}</p>
          )}
        </div>

        <div className={cardStyles}>
          <h3 className="text-xl font-semibold text-gray-700">Favourited Cars</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">{upcoming.length}</p>
          {upcoming[0] && (
            <p className="text-sm text-gray-500 mt-2">Latest: {upcoming[0].title}</p>
          )}
        </div>

        <div className={cardStyles}>
          <h3 className="text-xl font-semibold text-gray-700">Bookings</h3>
          <p className="text-4xl font-bold text-red-600 mt-2">{booking.length}</p>
          {booking[0] && (
            <p className="text-sm text-gray-500 mt-2">Latest: {booking[0].title}</p>
          )}
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[['Watched', completed], ['Favourited', upcoming], ['Booking', booking]].map(
          ([label, items]) => (
            <div key={label} className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-semibold mb-2 text-gray-700">{label}</h4>
              {items.length > 0 ? (
                <ul className="text-sm text-gray-600 space-y-1">
                  {items.slice(0, 3).map((car) => (
                    <li key={car.id}> {car.title}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">No cars in this section.</p>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
