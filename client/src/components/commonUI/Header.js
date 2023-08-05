import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Header.css";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="header">
      <nav className="mid">
        <Link to="/" className="left">
          <div className="logo">
            <span>blog</span>
          </div>
          <h2 className="title">blog</h2>
        </Link>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/blogs">Blogs</NavLink> */}
        <Dropdown dropdownMenus={expertise} title="Blogs" />
        <Dropdown dropdownMenus={Courses} title="Courses" />
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </nav>
      <div className="right">
        <Link to="/login" className="secondary-btn">
          Log in
        </Link>
        <Link to="/signup" className="primary-btn">
          Sign Up
        </Link>

        <form className="search">
          <input type="search" placeholder="Search" />
          <button>AI</button>
        </form>
      </div>
    </header>
  );
};

export default Header;

export const expertise = [
  {
    id: "0",
    title: "ReactJS",
    path: "/expertise/language-training",
  },
  {
    id: "1",
    title: "JavaScript",
    path: "/expertise/career-counselling",
  },
  {
    id: "2",
    title: "MongoDB",
    path: "/expertise/admission-process",
  },
  {
    id: "4",
    title: "NodeJS",
    path: "/expertise/immigration-services",
  },
  {
    id: "5",
    title: "MySQL",
    path: "/expertise/interview-preparation",
  },
  {
    id: "6",
    title: "Bootstrap",
    path: "/expertise/travel",
  },
  {
    id: "7",
    title: "CSS",
    path: "/expertise/post-arrival-services",
  },
  {
    id: "8",
    title: "HTML",
    path: "/expertise/ed-finance",
  },
  {
    id: "9",
    title: "Tips & Tricks",
    path: "/expertise/profile-dev",
  },
];

export const Courses = [
  {
    id: "0",
    title: "ReactJS",
    path: "/expertise/language-training",
  },
  {
    id: "1",
    title: "JavaScript",
    path: "/expertise/career-counselling",
  },
  {
    id: "2",
    title: "MongoDB",
    path: "/expertise/admission-process",
  },
  {
    id: "4",
    title: "NodeJS",
    path: "/expertise/immigration-services",
  },
  {
    id: "7",
    title: "CSS",
    path: "/expertise/post-arrival-services",
  },
  {
    id: "8",
    title: "HTML",
    path: "/expertise/ed-finance",
  },
];
