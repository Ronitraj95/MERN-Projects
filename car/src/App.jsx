import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CarLoading from './LodingComponents/CarLoading';
import { delayLazy } from './LodingComponents/delayLazy';

// Lazy-loaded with delay
const Signup = lazy(() => delayLazy(() => import('./Components/Signup')));
const Login = lazy(() => delayLazy(() => import('./Components/Login')));
const OtpPage = lazy(() => delayLazy(() => import('./Components/OtpPage')));
const Home = lazy(() => delayLazy(() => import('./Pages/Home')));
const Listing = lazy(() => delayLazy(() => import('./Pages/Listing')));
const SingleCar = lazy(() => delayLazy(() => import('./Pages/SingleCar')));
const AboutUs = lazy(() => delayLazy(() => import('./Pages/AboutUs')));
const Comprer = lazy(() => delayLazy(() => import('./Pages/Comprer')));
const Contact = lazy(() => delayLazy(() => import('./Pages/Contact')));
const SideBar = lazy(() => delayLazy(() => import('./Admin_components/SideBar')));

const App = () => {
  const [favCars, setFavCars] = useState([]);

  // Function to add/remove favorites
  const toggleFavorite = (car) => {
    setFavCars((prev) => {
      const exists = prev.find((c) => c.id === car.id);
      return exists ? prev.filter((c) => c.id !== car.id) : [...prev, car];
    });
  };

  return (
    <Suspense fallback={<CarLoading />}>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Otp" element={<OtpPage />} />
        <Route path="/home" element={<Home toggleFavorite={toggleFavorite} />} />
        <Route path="/listing" element={<Listing toggleFavorite={toggleFavorite} />} />
        <Route path="/singlecar" element={<SingleCar toggleFavorite={toggleFavorite} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/comprer" element={<Comprer />} />
        <Route path="/contact" element={<Contact favCars={favCars} />} />
        <Route path="/SideBar" element={<SideBar />} />
      </Routes>
    </Suspense>
  );
};

export default App;
