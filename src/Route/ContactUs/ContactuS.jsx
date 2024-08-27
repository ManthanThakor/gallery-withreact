import React, { useState } from 'react';
import "../../styles/contact/ContactUs.css"
import "../../styles/contact/ContactResponsive.css"
const ContactuS = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const mailtoLink = `mailto:thakormanthan849@gmail.com?subject=Quote Request&body=First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    
        window.location.href = mailtoLink;
      };
    
      return (
        <div className="enhanced-landing-page">
          <div className="container-cont">
            
            <div className="content-container-cont">
              <div className="text-section">
                <div className="content-box">
                  <p className="section-header">Lorem ipsum amet dolor</p>
                  <p className="section-subheader">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis volupta
                  </p>
                  <div className="social-icons">
                    <a className="social-icon">
                      <img
                        className="icon"
                        src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                        alt="Twitter"
                      />
                    </a>
                    <a className="social-icon">
                      <img
                        className="icon"
                        src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                        alt="Facebook"
                      />
                    </a>
                    <a className="social-icon">
                      <img
                        className="icon"
                        src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                        alt="Google"
                      />
                    </a>
                    <a className="social-icon">
                      <img
                        className="icon"
                        src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                        alt="Instagram"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="form-section">
                <form className="form-box" onSubmit={handleSubmit}>
                  <div className="form-container">
                    <p className="form-header">Get a quote</p>
                    <p className="form-subheader">We will get back to you in 24 hours</p>
                    <div className="input-container">
                      <div className="input-block">
                        <input
                          className="input-field"
                          name="firstName"
                          placeholder="First Name"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-block">
                        <input
                          className="input-field"
                          name="lastName"
                          placeholder="Last Name"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-block">
                        <input
                          className="input-field"
                          name="email"
                          placeholder="Email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-block">
                        <input
                          className="input-field"
                          name="phone"
                          placeholder="Phone Number"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-block">
                        <textarea
                          className="textarea-field"
                          name="message"
                          placeholder="Type message here"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="submit-button">
                      Get quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default ContactuS;
