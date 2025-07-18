import React from "react";
import "./about.css";
import uberImage from '../../assets/images_uber.jpeg';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={uberImage} alt="Uber driver" />
        </div>
        <div className="about-text">
          <h2 className="about-heading">Who We Are</h2>
          <div className="about-divider"></div>
          <p>
            <strong>GigPay</strong> is a fintech company providing tailored financial services for gig economy workers across Africa.
            We offer Buy Now, Pay Later, savings, insurance, and instant credit solutions.
            Our embedded financial services help workers in transportation, delivery, and freelancing overcome income instability and access barriers.
          </p>
          <p>
            We understand that traditional banking wasn’t built with gig workers in mind.
            That’s why we’ve created a smarter, more inclusive platform offering simple, secure, and flexible financial tools – all from your phone.
            From fast, fair personal loans to effortless savings, low-fee cards, and no-fuss checking accounts — we provide the financial freedom and control you deserve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
