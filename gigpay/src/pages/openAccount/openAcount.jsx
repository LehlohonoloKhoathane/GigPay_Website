import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './openAccount.css';

const OpenAccount = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');

  return (
    <div className="open-account-container">
      <div className="form-wrapper">
        <h2>Create Your GigPay Account</h2>
        <p>Get started in minutes. All you need is your ID and your gig platform details.</p>

        <form className="open-account-form">
          <label>
            Full Name
            <input type="text" placeholder="Lehlohonolo Khoathane" required />
          </label>

          <label>
            Email Address
            <input type="email" placeholder="khoathane@gigpay.co.za" required />
          </label>

          <label>
            Mobile Number
            <input type="tel" placeholder="e.g. +27 600 000 000" required />
          </label>

          <label>
            National ID / Passport Number
            <input type="text" placeholder="Enter your ID or passport number" required />
          </label>

          <label>
            Upload ID or Passport (PDF, PNG, or JPG)
            <input type="file" accept=".pdf,.png,.jpg,.jpeg" required />
          </label>

          <label>
            Upload Selfie Holding ID or Passport
            <input type="file" accept=".jpg,.jpeg,.png" required />
          </label>

          <label>
            Gig Platform
            <select
              required
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="">Select your platform</option>
              <option value="uber">Uber</option>
              <option value="bolt">Bolt</option>
              <option value="mrd">Mr D</option>
              <option value="sixty60">Checkers Sixty60</option>
              <option value="sweepsouth">SweepSouth</option>
              <option value="freelancer">Other</option>
            </select>
          </label>

          {selectedPlatform === 'freelancer' && (
            <label>
              Please specify
              <input type="text" placeholder="e.g. Tutor, websites freelance, etc." required />
            </label>
          )}

          <label>
            Proof of Address (optional)
            <input type="file" accept=".pdf,.png,.jpg,.jpeg" />
          </label>

          <div className="form-buttons">
            <button type="submit" className="submit-button">Create Account</button>
            <Link to="/" className="cancel-button">Cancel</Link>
          </div>
        </form>

        <p className="disclaimer">
          🔐 Your information is secure and encrypted. We never share your data without your consent.
        </p>
      </div>
    </div>
  );
};

export default OpenAccount;
