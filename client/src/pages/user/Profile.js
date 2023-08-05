import React from "react";
import "../../styles/Profile.css";
import { NavLink, Outlet } from "react-router-dom";
import { getLoggedInUser } from "../../utils/utils";

const Profile = () => {
  const username = getLoggedInUser()?.username;
  const user = getLoggedInUser();
  return (
    <div className="profile-container center">
      <div className="top">
        <div
          className="cover"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://images.unsplash.com/photo-1586195831465-e769c717f1e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
          }}
        ></div>
        <div className="name-n-all">
          <div className="profile-picture">
            <img
              src="https://images.unsplash.com/photo-1586195831465-e769c717f1e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="dp "
            />
          </div>
          <div className="names">
            <h1 className="name">
              {user?.fname} {user?.lname || "Unknown"}
            </h1>
            <p className="username">@{user?.username || "unknown"}</p>
            <div className="count">
              <span className="followers">
                {user?.followers?.length || "0"}
              </span>
              Followers
              <span className="followings">
                {user?.followings?.length || "0"}
              </span>
              Followings
            </div>

            {/* <p className="short-desc">
              I am a full stack developer with 5+ years of experience in web
              development and mobile app development.
            </p> */}
          </div>

          <div className="option-btn">
            <button className="secondary-btn">Update Profile</button>
            <button className="primary-btn">Write Now</button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left about">
          <div className="header">
            <h2>Intro</h2> <button>Edit</button>
          </div>
          <p className="about-para">I am Asif Imam, a developer by passion!</p>
          <hr />
          <p>
            Lives in <span>Darbhanga</span>
          </p>
          <p>
            Skills <span>JavaScript, ReactJS, NodeJS, HTML, CSS</span>
          </p>

          <hr />
          <p>Social Media Handles</p>
          <div className="social-link center">
            <a href="https://www.facebook.com/theasifimam" className="social">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://wa.me/919911471995" className="social">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://twitter.com/theasifimam" className="social">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="mailto:asifimam999@gmail.com" className="social">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="profile-navbar">
            <NavLink to={`/${username}/posts`}>Posts</NavLink>
            <NavLink to={`/${username}/followings`}>Following</NavLink>
            <NavLink to={`/${username}/followers`}>Followers</NavLink>
            <NavLink to={`/${username}/saved`}>Saved</NavLink>
            <NavLink to={`/${username}/about`}>About</NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
