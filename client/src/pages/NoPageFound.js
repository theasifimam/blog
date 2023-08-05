import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
  return (
    <div className="no-page-found">
      <h1>it seems, you got lost!</h1>
      <span>error page 😥</span>
      <div className="btn-group">
        <Link to="/" className="primary-btn">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NoPageFound;
