import React from "react";
import "./about.css";
import uberImage from '../../assets/images_uber.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-box">
        {/* Section Heading */}
        <div className="about-title">
          <h2 className="about-heading">Who We Are</h2>
          <div className="about-divider"></div>
        </div>

        {/* Image + Text Grid */}
        <div className="about-content">
          {/* Left image */}
          <div className="about-image">
            <img src={uberImage} alt="Uber driver using app" />
          </div>

          {/* Right text */}
          <div className="about-text">
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
    </section>
  );
};

export default About;
