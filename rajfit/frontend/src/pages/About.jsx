import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";
import "../style/about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="about-section">
        <img
          src={assets.about_img}
          alt="About"
          className="about-image"
        />
        <div className="about-content">
          <p>
            👔 Welcome to RajFits, your ultimate destination for stylish apparel. We are dedicated to bringing you the best in fashion and quality. Our e-commerce platform is meticulously designed to provide a seamless shopping experience, ensuring you find the perfect pieces to elevate your wardrobe.
          </p>
          <p>
            👗 At RajFits, we believe in the power of fashion to express individuality and confidence. Our curated collections feature a wide range of clothing that combines contemporary trends with timeless elegance. Whether you're looking for casual wear, formal attire, or something in between, we have something for everyone.
          </p>
          <strong className="about-subheading">Our Mission</strong>
          <p>
            || Our mission is to empower you with clothing that not only looks great but also feels comfortable. We strive to offer high-quality products that cater to diverse styles and preferences. With a commitment    to exceptional customer service, we aim to make your shopping experience enjoyable and hassle-free.
          </p>
        </div>
      </div>

      <div className="about-why-header">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="about-why-section">
        <div className="why-card">
          <strong>Quality Assurance:</strong>
          <p>
            Quality is at the heart of everything we do. We source our materials from trusted suppliers to ensure that every piece meets our high standards.
          </p>
        </div>
        <div className="why-card">
          <strong>Convenience:</strong>
          <p>
            Our user-friendly website makes shopping easy and convenient. Browse our collections, filter by size or style, and find exactly what you need in just a few clicks.
          </p>
        </div>
        <div className="why-card">
          <strong>Exceptional Customer Service:</strong>
          <p>
            Our dedicated customer service team is here to assist you with any inquiries or concerns. We value your feedback to improve shopping experience.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
