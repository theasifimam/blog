import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <form className="contact-form">
        {/* <Link to="/" className="left logo-container">
          <div className="logo">
            <span>blog</span>
          </div>
          <h2 className="title">blog</h2>
        </Link> */}

        <h3>Get In touch with Us!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          voluptate magni neque possimus accusantium, exercitationem esse iure
          repellendus similique iusto alias voluptas odio.
        </p>

        {/* Name */}
        <div className="input-field full">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            tabIndex="1"
            value=""
          />
        </div>

        {/* Email */}
        <div className="input-field full">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            tabIndex="1"
            value=""
          />
        </div>

        {/* Message */}
        <div className="input-field full">
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            tabIndex="1"
            value=""
            rows="3"
          />
        </div>
      </form>
      <div className="right contact-bg">
        <div className="content">
          <h2 className="title">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </h2>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            quo inventore quisquam illo, saepe quibusdam distinctio sapiente
            sequi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
