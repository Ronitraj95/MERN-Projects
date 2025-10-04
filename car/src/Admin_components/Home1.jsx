import React, { useState } from 'react';
import { RiBankLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import omkar from '../assets/team/omkar.jpg';
import vishwa from '../assets/team/vishwa.jpg';
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart
} from 'recharts';

// Progress bar with label
function LinearProgressWithLabel({ value, message }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Box display="flex" alignItems="center">
        <Box sx={{ flex: 1, mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{
              height: 10,
              borderRadius: 13,
              backgroundColor: 'rgba(255,255,255,0.3)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#fff',
                borderRadius: 13
              }
            }}
          />
        </Box>
        <Typography
          variant="body2"
          sx={{ color: '#fff', minWidth: 35, fontWeight: 'bold', fontSize: '18px' }}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{ color: '#fff', mt: 0.5, fontSize: '12px' }}
      >
        {message}
      </Typography>
    </Box>
  );
}


const Chart = () => {
  const data = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 60 },
    { name: 'Mar', value: 55 },
    { name: 'Apr', value: 80 },
    { name: 'May', value: 50 },
    { name: 'Jun', value: 95 },
    { name: 'Jul', value: 70 },
    { name: 'Aug', value: 85 },
    { name: 'Sep', value: 60 },
    { name: 'Oct', value: 75 }
  ];

  return (
    <div className="rounded-xl bg-white shadow-md p-5 w-[500px] h-[300px]">
      <h1 className="text-lg sm:text-xl font-bold text-black mb-5">
        Total Bookings
      </h1>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#85F4FA" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


const OverviewChart = () => {
  const data = [
    { name: "Jan", value: 60 },
    { name: "Feb", value: 58 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 36 },
    { name: "May", value: 50 },
    { name: "Jun", value: 34 },
    { name: "Jul", value: 33 },
    { name: "Aug", value: 68 },
    { name: "Sept", value: 67 },
    { name: "Oct", value: 34 }
  ];

  return (
    <div className="rounded-xl bg-white shadow-md p-5 w-[500px]">
      <h2 className="text-lg font-semibold mb-4">
        Overview <span className="text-gray-500">(Responses)</span>
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="value"
            barSize={10}
            fill="rgba(124, 58, 237, 0.3)"
            radius={[10, 10, 0, 0]}
          />
       
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// Recent Bookings
const Bookings = () => {
  const details = [
    { img: omkar, name: "Omkar", time: "10:00 AM" },
    { img: vishwa, name: "Vishwa", time: "01:00 PM" }
  ];

  return (
    <div className="w-[30rem] h-[16rem] flex flex-col bg-white rounded-xl shadow-md p-4">
      <h1 className="text-lg sm:text-xl font-bold text-black mb-4">Recent Bookings</h1>
      {details.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between gap-4 px-2 py-3 border-b last:border-b-0 hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <img src={item.img} alt={`${item.name} profile`} className="w-16 h-16 rounded-lg object-cover" />
            <p className="text-lg font-semibold">{item.name}</p>
          </div>
          <p className="text-gray-500">{item.time}</p>
        </div>
      ))}
    </div>
  );
};

const Home1 = () => {
  const [progress] = useState(60);
  const [progress2] = useState(70);

  return (
    <div className="flex flex-row gap-5 justify-center items-start min-h-screen bg-gray-100 p-5">
      <div className='flex flex-col gap-5'>
        <div
          className="rounded-xl text-white flex overflow-hidden"
          style={{ backgroundColor: '#3B82F6', width: '420px', height: '140px' }}
        >
          <div className="flex items-center justify-center w-1/5">
            <RiBankLine size={50} />
          </div>
          <div className="flex flex-col justify-center gap-2 p-4 w-4/5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Total Cars</h2>
              <h2 className="text-2xl font-bold">4,098</h2>
            </div>
            <LinearProgressWithLabel
              value={progress}
              message="43 more to break last month record"
            />
          </div>
        </div>

        <div
          className="rounded-xl text-white flex overflow-hidden"
          style={{ backgroundColor: '#3B82F6', width: '420px', height: '140px' }}
        >
          <div className="flex items-center justify-center w-1/5">
            <FaUserAlt size={50} />
          </div>
          <div className="flex flex-col justify-center gap-2 p-4 w-4/5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Total Users</h2>
              <h2 className="text-2xl font-bold">1,098</h2>
            </div>
            <LinearProgressWithLabel
              value={progress2}
              message="43 more to break last month record"
            />
          </div>
        </div>

        <OverviewChart />
      </div>

      <div className='flex flex-col gap-5'>
        <Chart />
        <Bookings />
      </div>
    </div>
  );
};

export default Home1;
