import React, { useState } from "react";
import celb from "../assets/celeb.png";

function Membership() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="exclusive-benefits-container">
      <div className="form-container">
        <div className="c">
          <h2>Unlock Exclusive Benefits</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="phone-number-container">
                <label htmlFor="phone-number" className="phone-number-label">
                  PHONE NUMBER
                </label>
                <div className="phone-number-input">
                  <select
                    className="country-code-selector"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+91">+91 India</option>
                    <option value="+1">+1 USA/Canada</option>
                    <option value="+44">+44 UK</option>
                    <option value="+49">+49 Germany</option>
                    <option value="+81">+81 Japan</option>
                    <option value="+1">+1 USA/Canada</option>
                    <option value="+44">+44 UK</option>
                    <option value="+49">+49 Germany</option>
                    <option value="+81">+81 Japan</option>
                  </select>
                  <input
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="9456789210"
                  />
                </div>
              </div>
            </div>

            <div className="form-group ">
              <label htmlFor="name">NAME</label>
              <input
                id="name"
                type="text"
                value={name}
                className="input-name-name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL [OPTIONAL]</label>
              <input
                id="email"
                type="email"
                className="input-name-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="continue-button">
              CONTINUE
            </button>
          </form>
          <p>Get ready to receive a secret code (OTP) on your phone.</p>
        </div>
      </div>

      <div className="celebrity-container">
        <img src={celb} alt="" />
      </div>
    </div>
  );
}

export default Membership;
