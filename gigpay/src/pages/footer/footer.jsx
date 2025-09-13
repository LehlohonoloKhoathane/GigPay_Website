import React from "react";
import "./footer.css";
import googlePlay from '../../assets/googleplay.png'
import appStore from '../../assets/istore.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="brand">GIGPAY</h3>

        <div className="store-buttons">
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>

        <div className="footer-links">
          <span>Personal Loans</span>
          <span>Savings</span>
          <span>Mobile Wallet</span>
          <span>Contacts</span>
        </div>

        <div className="footer-socials">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        <div className="footer-policies">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Copy Right Policy</span>
          <span>Data Policy</span>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; 2025. All rights reserved | Designed & Developed by Lehlohonolo Khoathane</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
