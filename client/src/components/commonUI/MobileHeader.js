import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/UI/MobileHeader.css";

const MobileHeader = () => {
  return (
    <nav className="mobile-header">
      <NavLink to="/">
        <i className="fa-solid fa-house-chimney"></i>
      </NavLink>

      <NavLink to="/search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </NavLink>

      <NavLink to="/blogs">
        <i className="fa-solid fa-fire"></i>
      </NavLink>

      <NavLink to="/profile">
        <i className="fa-solid fa-user"></i>
      </NavLink>

      <NavLink to="/abouts">
        <i className="fa-solid fa-bars"></i>
      </NavLink>
    </nav>
  );
};

export default MobileHeader;
