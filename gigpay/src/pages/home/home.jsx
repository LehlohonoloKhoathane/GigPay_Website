// import React from "react";
// import { Link } from 'react-router-dom';
// import './home.css'
// import heroImage from '../../assets/gigpay.jpg'

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="home-content">
//         {/* Left Text Section */}
//         <div className="text-section">
//           <p className="trust-label">100% Trusted Platform</p>
//           <h1 className="main-heading">
//             Financial Inclusion for <br /> Africa&apos;s Gig Workers
//           </h1>
//           <p className="subtext">
//             We provide the loans, savings, and accounts that help gig workers get paid,
//             plan ahead, and unlock opportunity.
//           </p>
//           <Link to="/open-account">
//             <button className="cta-button">Open Account</button>
//           </Link>
//         </div>

//         {/* Right Image Section */}
//         <div className="image-section">
//           <img
//             src={heroImage}
//             alt="Gig worker on motorbike"
//             className="hero-image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";
import heroImage from "../../assets/gigpay.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Left Text Section */}
        <motion.div
          className="text-section"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="trust-label">100% Trusted Platform</p>
          <motion.h1
            className="main-heading"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Financial Inclusion for <br /> Africa&apos;s Gig Workers
          </motion.h1>
          <motion.p
            className="subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We provide the loans, savings, and accounts that help gig workers get paid,
            plan ahead, and unlock opportunity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/open-account">
              <button className="cta-button">Open Account</button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="image-section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="Gig worker on motorbike"
            className="hero-image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
