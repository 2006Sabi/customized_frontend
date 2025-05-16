import React from "react";
import "./AboutUs.css";

import missionImg from "./images/mission.jpg";
import customizationImg from "./images/customization.jpg";
import teamImg from "./images/team.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Designify</h1>
      <p className="about-intro">
        Welcome to <strong>Designify</strong>, your one-stop shop for fully
        customizable fashion and accessories. We empower our customers to
        express their unique personalities by creating products that truly
        reflect their style.
      </p>

      <div className="about-section">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize online shopping by offering a
            platform where creativity meets convenience. We aim to provide
            high-quality, customizable items that allow users to design products
            that are uniquely theirs — whether it’s apparel, accessories, or
            personalized gifts.
          </p>
        </div>
        <img src={missionImg} alt="Our Mission" />
      </div>

      <div className="about-section reverse">
        <img src={customizationImg} alt="Customization Features" />
        <div className="about-text">
          <h2>What Makes Us Different?</h2>
          <ul>
            <li>🎨 Easy-to-use product customization tools</li>
            <li>🛍 Wide range of items across clothing and accessories</li>
            <li>⚡ Fast and secure checkout process</li>
            <li>🌍 Sustainable and quality materials</li>
            <li>🤝 Exceptional customer support</li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>Meet the Team</h2>
          <p>
            We are a passionate team of developers, designers, and entrepreneurs
            dedicated to providing a seamless shopping experience. At
            Designify, we believe in the power of individuality, and our team
            works tirelessly to make sure every customer finds exactly what
            they're looking for.
          </p>
        </div>
        <img src={teamImg} alt="Our Team" />
      </div>
    </div>
  );
};

export default AboutUs;
