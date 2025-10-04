import { assets } from "../assets/assets";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-about">
          <img src={assets.logo} className="footer-logo" alt="Logo" />
          <p className="footer-description">
            © 2025 <b>RajFits.</b> All rights reserved. Your ultimate destination
             for stylish apparel, This is committed to bringing you the 
             best in fashion and quality. This e-commerce platform was meticulously
              designed and developed by <b>YUVARAJ R KUBASAD</b> to provide a seamless shopping 
              experience. For any inquiries.
          </p>
        </div>
        <div className="footer-links">
          <p className="footer-heading">COMPANY</p>
          <ul className="footer-list">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-contact">
          <p className="footer-heading">GET IN TOUCH</p>
          <ul className="footer-list">
            <li>+91 02025 02003</li>
            <li>contactus@rajfits.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p className="footer-copy">
          Copyright 2025 @ rajfits.com - All Right Reserved 
        </p>
      </div>
    </div>
  );
};

export default Footer;
