import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./products.css";

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productData = [
    {
      title: "1. Personal Loans",
      description:
        "Fast, Fair Loans When You Need Them. Access short-term loans with flexible repayment options. No paperwork, no long waits – just instant decisions and fair rates.",
      button: "Apply Now",
    },
    {
      title: "2. Smart Savings",
      description:
        "Save Automatically, Stress Less. Set saving goals and stash money away with automated tools – even from irregular income.",
      button: "Start Saving",
    },
    {
      title: "3. Flexible Insurance",
      description:
        "Affordable Cover for Real-Life Risks. Health, accident, life, or phone insurance – designed for gig workers with flexible premiums and easy claims.",
      button: "Get Covered",
    },
    {
      title: "4. Credit Solutions",
      description:
        "Build Your Credit While You Earn. We offer credit-building tools and access to revolving credit lines – designed to help you improve your credit profile over time.",
      button: "Explore Credit Options",
    },
    {
      title: "5. Mobile Wallet",
      description:
        "One App for All Your Money Moves. Manage earnings, send or receive payments, and track expenses from anywhere.",
      button: "Download the App",
    },
    {
      title: "6. Gig Worker Debit Card",
      description:
        "Spend Smart, Get Paid Instantly. Use your earnings with ease – withdraw cash, shop online, and receive payments directly.",
      button: "Get a Card",
    },
  ];

  return (
    <section className="products-section" id="products">
      <div className="products-wrapper">
        <h2 className="products-heading">What we offer</h2>
        <div className="products-divider"></div>

        <Slider {...settings}>
          {productData.map((product, index) => (
            <motion.div
              className="product-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button>{product.button}</button>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Products;
