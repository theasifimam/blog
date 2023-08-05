import React, { Fragment } from "react";
import Slider from "../../components/UI/Slider";
import "../../styles/UI/PostPreview.css";
import "../../styles/pages/Home.css";
import RecentBlogs from "../../components/UI/RecentBlogs";
import MultipleCardsSlider from "../../components/commonUI/MultipleCardsSlider";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <MultipleCardsSlider />
      <RecentBlogs />
    </Fragment>
  );
};

export default Home;
