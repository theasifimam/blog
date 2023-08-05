import React from "react";
import { Link } from "react-router-dom";

const PostPreview = ({
  postImage,
  dp,
  title,
  description,
  author,
  date,
  index,
  width,
}) => {
  return (
    <Link
      to={`/post/${index}`}
      className="post-preview"
      key={index}
      style={{ width }}
    >
      <div className="top">
        <img src={postImage} alt="nothing" />
      </div>
      <div className="mid">
        <h4 className="heading">{title}</h4>
        <p className="description">{description}</p>
      </div>
      <div className="bottom">
        <div className="dp">
          <img src={dp} alt="display pic" />
        </div>
        <span className="name">{author} </span>
        <div className="date"> - {date}</div>
      </div>
    </Link>
  );
};

export default PostPreview;
