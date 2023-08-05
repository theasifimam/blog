import React from "react";
import "../../styles/pages/post/Feed.css";
import RecentBlogs from "../../components/UI/RecentBlogs";

const Feed = () => {
  return (
    <div className="feed-container">
      <form className="add-form">
        <div className="content">
          <div className="dp">
            <img
              src={process.env.PUBLIC_URL + "/images/temp/slider.jpg"}
              alt="nothing"
            />
          </div>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="5"
            placeholder="Share something now..."
          ></textarea>
        </div>
        <div className="bottom">
          <button className="write-blog">Write Blog</button>
          {/* <input type="file" /> */}
          <button type="submit">Post</button>
        </div>
      </form>

      <RecentBlogs />
    </div>
  );
};

export default Feed;
