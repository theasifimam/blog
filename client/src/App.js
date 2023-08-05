import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/UI/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/Layouts/HomeLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Post from "./pages/Post/Post";
import NoPageFound from "./pages/NoPageFound";
import Blogs from "./pages/Home/Blogs";
import Contact from "./pages/Home/Contact";
import About from "./pages/Home/About";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
