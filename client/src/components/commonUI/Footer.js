import React from "react";
import { Link } from "react-router-dom";
import "../../styles/UI/Footer.css";
import "../../styles/responsive.css";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <h3>Let's get started on something great!</h3>
          <p>Join over 4,000+ startups already growing with untitled.</p>
          <div className="btn-group">
            <Link to="/contact-us" className="primary-btn">
              Chat to Us
            </Link>
            <Link to="/contact-us" className="primary-btn">
              Get Started
            </Link>
          </div>
        </div>

        <div className="right">
          <h3>Publish your articles on this website!</h3>
          <p>Join us to reach millions with your knowledge.</p>
          <div className="btn-group">
            <Link to="/contact-us" className="primary-btn">
              Chat to Us
            </Link>
            <Link to="/contact-us" className="primary-btn">
              Become Writer
            </Link>
          </div>
        </div>
      </div>

      <div className="footer">
        <Link to="/" className="left logo-box">
          <div className="logo">
            <span>blog</span>
          </div>
          <h2 className="title">blog</h2>
        </Link>

        <div className="social-link center">
          <a href="https://www.facebook.com/theasifimam" className="social">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.facebook.com/theasifimam" className="social">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/theasifimam" className="social">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/theasifimam" className="social">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>

        <span className="footer-text">
          © Copyright {new Date().getFullYear() - 1} -{" "}
          {new Date().getFullYear()} | Imam's blog | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
