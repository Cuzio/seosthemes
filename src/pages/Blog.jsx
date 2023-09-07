import React from "react";
import Product from "../components/Product";
import Model from "../components/Model";
import SecondCarousel from "../components/SecondCarousel";
import "../css/home.css";
import HeroBlog from "../components/HeroBlog";

const Blog = () => {
  return (
    <div>
      <HeroBlog />
      <div className="come">
        <Model className="side-right" />
        <Product className="side-left" />
      </div>
      <SecondCarousel />
    </div>
  );
};

export default Blog;
