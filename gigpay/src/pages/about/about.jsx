// import React from "react";
// import "./about.css";
// import uberImage from '../../assets/images_uber.jpeg';

// const About = () => {
//   return (
//     <section className="about-section" id="about">
//       <div className="about-box">
//         {/* Section Heading */}
//         <div className="about-title">
//           <h2 className="about-heading">Who We Are</h2>
//           <div className="about-divider"></div>
//         </div>

//         {/* Image + Text Grid */}
//         <div className="about-content">
//           {/* Left image */}
//           <div className="about-image">
//             <img src={uberImage} alt="Uber driver using app" />
//           </div>

//           {/* Right text */}
//           <div className="about-text">
//             <p>
//               <strong>GigPay</strong> is a fintech company providing tailored financial services for gig economy workers across Africa.
//               We offer Buy Now, Pay Later, savings, insurance, and instant credit solutions.
//               Our embedded financial services help workers in transportation, delivery, and freelancing overcome income instability and access barriers.
//             </p>
//             <p>
//               We understand that traditional banking wasn’t built with gig workers in mind.
//               That’s why we’ve created a smarter, more inclusive platform offering simple, secure, and flexible financial tools – all from your phone.
//               From fast, fair personal loans to effortless savings, low-fee cards, and no-fuss checking accounts — we provide the financial freedom and control you deserve.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import uberImage from '../../assets/images_uber.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Heading */}
        <motion.div
          className="about-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="about-heading">Who We Are</h2>
          <div className="about-divider"></div>
        </motion.div>

        {/* Image + Text Grid */}
        <div className="about-content">
          {/* Left image */}
          <motion.div
            className="about-image"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={uberImage} alt="Uber driver using app" />
          </motion.div>

          {/* Right text */}
          <motion.div
            className="about-text"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
