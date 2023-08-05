import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

const MobileTopHeader = () => {
  return (
    <div className="mobile-top-header">
      <Link to="/" className="left">
        <div className="logo">
          <span>blog</span>
        </div>
        <h2 className="title">blog</h2>
      </Link>

      <div className="right">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default MobileTopHeader;
