import React from "react";
import { Link } from 'react-router-dom';
import './home.css'
import heroImage from '../../assets/gigpay.jpg'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Left Text Section */}
        <div className="text-section">
          <p className="trust-label">100% Trusted Platform</p>
          <h1 className="main-heading">
            Financial Inclusion for <br /> Africa&apos;s Gig Workers
          </h1>
          <p className="subtext">
            We provide the loans, savings, and accounts that help gig workers get paid,
            plan ahead, and unlock opportunity.
          </p>
          <Link to="/open-account">
            <button className="cta-button">Open Account</button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="image-section">
          <img
            src={heroImage}
            alt="Gig worker on motorbike"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
