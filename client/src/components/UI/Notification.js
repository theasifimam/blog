import React, { useState, useRef, useEffect } from "react";
import "../../styles/UI/Notification.css";

const Notification = ({ setIsOpen, isOpen }) => {
  const popupRef = useRef();
  useEffect(() => {
    // Function to handle clicks outside the popup
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener to the mousedown event
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return isOpen ? (
    <div className="darkbg">
      <div className="notification-popup" ref={popupRef}>
        {/* Notification content goes here */}
        <h2>Notification</h2>
        <div className="nots-container">
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
          <div className="notice">
            <div className="dp">
              <img
                src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
                alt="nothing"
              />
            </div>
            <div className="info">
              <p>
                This is a sample notification message that can be displayed in
                this
              </p>
              <span>12 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Notification;
