import React from "react";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";
import Parrallex from "../components/Parrallex";
import Product from "../components/Product";
import Model from "../components/Model";
import "../css/home.css";
import SecondCarousel from "../components/SecondCarousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Testimonial />
      <Parrallex />
      <div className="come">
        <Product className="side-left" />
        <Model className="side-right" />
      </div>
      <SecondCarousel />
    </div>
  );
};

export default Home;
