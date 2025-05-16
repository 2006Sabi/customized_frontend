import React from "react";
import "./HomePage.css";

// Import only the images used in the JSX
import heroBanner from "./images/hero-banner.jpg";
import featureDesign from "./images/feature-design.jpg";
import featureQuality from "./images/feature-quality.jpg";
import featureSupport from "./images/feature-support.jpg";
import categoryClothing from "./images/category-clothing.jpg";
import categoryMugs from "./images/category-mugs.jpg";
import categoryGifts from "./images/category-gifts.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Designify</h1>
          <p>
            Your one-stop shop for unique, personalized products. Design your
            own clothing, mugs, accessories, and more!
          </p>
          <a href="/category/customize" className="cta-button">
            Start Customizing
          </a>
        </div>
        <img src={heroBanner} alt="Custom products" className="hero-img" />
      </section>

      <section className="features">
        <h2>Why Choose Designify?</h2>
        <div className="feature-cards">
          <div className="card">
            <img src={featureDesign} alt="Custom Design" />
            <h3>Full Customization</h3>
            <p>
              Personalize every detail of your product – colors, text, images,
              and materials.
            </p>
          </div>
          <div className="card">
            <img src={featureQuality} alt="Quality Products" />
            <h3>Premium Quality</h3>
            <p>
              We use top-tier materials and printing methods for long-lasting,
              high-quality products.
            </p>
          </div>
          <div className="card">
            <img src={featureSupport} alt="Customer Support" />
            <h3>24/7 Support</h3>
            <p>
              Our friendly team is always ready to help with your orders or
              custom requests.
            </p>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Explore Popular Categories</h2>
        <div className="category-grid">
          <a href="/products">
            <img src={categoryClothing} alt="Clothing" />
            <span>Custom Clothing</span>
          </a>
          <a href="/products">
            <img src={categoryMugs} alt="Mugs" />
            <span>Personalized Mugs</span>
          </a>
          <a href="/products">
            <img src={categoryGifts} alt="Gifts" />
            <span>Gifts & More</span>
          </a>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>
            "Designify helped me create the perfect birthday gift! Highly
            recommend for thoughtful presents."
          </p>
          <span>- Ayesha R.</span>
        </div>
        <div className="testimonial">
          <p>
            "Loved the quality and the ease of customizing. My custom hoodie is
            now my favorite piece of clothing!"
          </p>
          <span>- Rohit S.</span>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
