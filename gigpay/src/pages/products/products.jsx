import React from "react";
import "./products.css";

const Products = () => {
  return (
    <section className="products-section" id="products">
      <div className="products-wrapper">
        <h2 className="products-heading">What we offer</h2>
        <div className="products-divider"></div>

        <div className="products-grid">
          <div className="product-card">
            <h3>1. Personal Loans</h3>
            <p>
              Fast, Fair Loans When You Need Them. Access short-term loans with flexible repayment options.
              No paperwork, no long waits – just instant decisions and fair rates.
            </p>
            <button>Apply Now</button>
          </div>

          <div className="product-card">
            <h3>2. Smart Savings</h3>
            <p>
              Save Automatically, Stress Less. Set saving goals and stash money away with automated tools –
              even from irregular income.
            </p>
            <button>Start Saving</button>
          </div>

          <div className="product-card">
            <h3>3. Flexible Insurance</h3>
            <p>
              Affordable Cover for Real-Life Risks. Health, accident, life, or phone insurance – designed for gig workers
              with flexible premiums and easy claims.
            </p>
            <button>Get Covered</button>
          </div>

          <div className="product-card">
            <h3>4. Credit Solutions</h3>
            <p>
              Build Your Credit While You Earn. We offer credit-building tools and access to revolving credit lines –
              designed to help you improve your credit profile over time.
            </p>
            <button>Explore Credit Options</button>
          </div>

          <div className="product-card">
            <h3>5. Mobile Wallet</h3>
            <p>
              One App for All Your Money Moves. Manage earnings, send or receive payments, and track expenses from anywhere.
            </p>
            <button>Download the App</button>
          </div>

          <div className="product-card">
            <h3>6. Gig Worker Debit Card</h3>
            <p>
              Spend Smart, Get Paid Instantly. Use your earnings with ease – withdraw cash, shop online, and receive payments directly.
            </p>
            <button>Get a Card</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
