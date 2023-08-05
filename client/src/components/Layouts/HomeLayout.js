import React, { Fragment, useState } from "react";
import Header from "../commonUI/Header";
import { Outlet } from "react-router-dom";
import Footer from "../commonUI/Footer";
import MobileHeader from "../commonUI/MobileHeader";
import MobileTopHeader from "../commonUI/MobileTopHeader";

const HomeLayout = () => {
  return (
    <Fragment>
      <Header />
      <MobileTopHeader />
      <MobileHeader />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default HomeLayout;
