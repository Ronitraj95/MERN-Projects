import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import fitnessVideo from '../assets/Home.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const scrollToContent = () => {
    const content = document.getElementById('about');
    content?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <div className="freakfit-home-root">
      <div className="freakfit-home" id="home">
        <video className="freakfit-bg-video" autoPlay loop muted playsInline>
          <source src={fitnessVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="freakfit-dark-overlay"></div>

        {/* Navbar */}
        <nav className="freakfit-navbar">
  <div className="freakfit-logo">FREAK-FIT 💪</div>
  <div className="freakfit-nav-buttons">
    <button className="nav-btn" onClick={() => scrollToSection('home')}>Home</button>
    <button className="nav-btn" onClick={() => scrollToSection('about')}>About</button>
    <button className="nav-btn" onClick={() => scrollToSection('contact')}>Contact Us</button>
    <button className="nav-btn login-btn" onClick={() => navigate('/login')}>Login</button>
    <button className="nav-btn signup-btn" onClick={() => navigate('/register')}>Signup</button>
  </div>
</nav>


        {/* Hero Section */}
        <motion.div
          className="freakfit-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="freakfit-title">Welcome to FREAK-FIT 💪</h1>
          <p className="freakfit-subtitle">
            Your ultimate fitness companion — set goals, track workouts, get trainer plans & transform your health journey!
          </p>
          <button className="scroll-btn" onClick={scrollToContent}>↓ Learn More</button>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="freakfit-content"
          id="about"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2>Why Freak-Fit?</h2>
          <p>
            Freak-Fit helps you personalize your workouts, receive expert trainer plans, visualize your goals,
            and stay motivated with real-time charts and progress tracking.
          </p>
          <ul>
            <li>📈 Dashboard with progress stats</li>
            <li>🍎 Personalized workout + diet plans</li>
            <li>🧑‍🏫 Trainer & Admin interfaces</li>
            <li>🔒 Secure Login & User Roles</li>
          </ul>
        </motion.div>

        <motion.div
  className="freakfit-contact-section"
  id="contact" style={{ marginTop: '30rem' }}
  initial={{ y: 60, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  <h2 className="freakfit-contact-title">Contact Us</h2>
  <p className="freakfit-contact-subtext">Have a question or feedback? We’d love to hear from you!</p>

  <form className="freakfit-contact-form" onSubmit={(e) => e.preventDefault()}>
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</motion.div>

        

        {/* Footer */}
        <footer className="freakfit-footer" style={{ marginTop: '5rem' }} >
          <div className="freakfit-footer-bottom">
    &copy; {new Date().getFullYear()} Freak-Fit. All rights reserved.
  </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
