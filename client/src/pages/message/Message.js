import React, { useEffect, useRef, useState } from "react";
import { Picker } from "emoji-mart";
// import "emoji-mart/css/emoji-mart.css";
import "../../styles/Message.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Messages from "../../components/UI/Messages";

const Message = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const { values, handleChange, handleBlur, errors, handleSubmit } = useFormik({
    initialValues: { message: "" },
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="username-info">
        <div className="dp">
          <img
            src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
            alt="nothing"
          />
        </div>
        <h2>Asif Imam</h2>
        <Link to="../" className="back-btn">
          <i class="fa-solid fa-chevron-left center"></i>
        </Link>
      </div>
      <Messages />
      <form className="message-input" onSubmit={handleSubmit}>
        <input
          placeholder="Type your message here..."
          onChange={handleChange}
          onBlur={handleBlur}
          name="message"
          value={values.message}
        />
        <button type="submit">
          <i class="fa-solid fa-paper-plane"></i>
        </button>

        {/* <button onClick={handleClick}>Emoji</button> */}
      </form>
      {/* {showEmojiPicker && (
        <Picker
          onSelect={(emoji) => {
            console.log(emoji);
          }}
        />
      )} */}
    </>
  );
};

export default Message;

const contactData = [
  {
    name: "Asif Imam",
    dp: "./images/temp/slider.jpg",
    message: "Hello how are you?",
  },
  {
    name: "Faiz Alam",
    dp: "./images/temp/slider2.jpg",
    message: "Assalamu Alaikum",
  },
  {
    name: "Ishaaq Alam",
    dp: "./images/temp/slider3.jpg",
    message: "Looking good! ❤️",
  },
  {
    name: "Maleeha Imam",
    dp: "./images/temp/slider4.jpg",
    message: "Please, Get me ear ring...",
  },
  {
    name: "Pankaj Kumar",
    dp: "./images/temp/slider5.jpg",
    message: "Kaisa hai bhai?",
  },
  {
    name: "Parwez Alam",
    dp: "./images/temp/slider6.jpg",
    message: "Ye isssues hai inhein fix kr de.",
  },
  {
    name: "Saurabh Kainth",
    dp: "./images/temp/slider7.jpg",
    message: "Here is your template of social site.",
  },
];
