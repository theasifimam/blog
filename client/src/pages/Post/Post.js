import React from "react";
import "../../styles/Post.css";
import { Link } from "react-router-dom";
import RecentBlogs from "../../components/UI/RecentBlogs";

const Post = () => {
  return (
    <>
      <div className="post-container">
        <div className="top heading">
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            corporis.
          </h1>
        </div>
        <div className="blog-image">
          <img
            src="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="blog img"
          />
        </div>
        <div className="info">
          <div className="left">
            <div className="dp">
              <img
                src="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="dp"
              />
            </div>
            <div className="name-date">
              <span className="name">Asif Imam</span>
              <span className="date">23rd April, 2023</span>
            </div>
          </div>
          <div className="social-link flex-end ">
            <Link>
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-whatsapp"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link>
              <i className="fa-regular fa-envelope"></i>
            </Link>
          </div>
        </div>

        <div className="short-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          similique laborum dolorum suscipit, quos quod soluta impedit
          repellendus iste cupiditate, reprehenderit eius perferendis recusandae
          expedita.
        </div>
        <div className="content description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            ipsam, repudiandae dolorum fuga velit inventore optio voluptas! Non
            tempora accusantium odio mollitia, vero dolorem accusamus magnam,
            ipsum explicabo ad illum qui placeat ipsa minima voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptatem esse minima fuga? Minus assumenda unde,
            nemo quia consectetur exercitationem officiis sit nulla delectus, ab
            doloremque earum commodi. Nam dolores eveniet laboriosam voluptas
            perspiciatis aperiam aspernatur sit sunt deserunt quaerat.
            Laudantium illum dolorum similique autem facere voluptates. Fugiat
            qui harum adipisci illum, nobis mollitia vel maxime corrupti officia
            unde quam non nulla! Magnam, nam quia.
          </p>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            omnis commodi nemo.
          </h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            repellat commodi labore asperiores error inventore deserunt,
            repudiandae amet, dolore necessitatibus ratione sed, nulla unde?
            Neque tempora, debitis necessitatibus, temporibus provident libero
            odio ullam a, ex velit harum voluptatibus. Dolorum aperiam dolor eos
            voluptatum eaque repudiandae beatae itaque quisquam repellendus
            enim, iusto delectus natus aliquid ipsa tempore.
          </p>
        </div>
      </div>
      <RecentBlogs />
    </>
  );
};

export default Post;
