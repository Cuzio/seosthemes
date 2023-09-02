import React from "react";
import { BsStarFill, BsCalendar3, BsFillFolderFill } from "react-icons/bs";
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import product5 from "../images/product5.jpg";
import "../css/product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="container align-items-center justify-content-center my-4">
      <div
        className="top archive d-flex align-items-center"
        data-aos="fade-right"
      >
        <input type="text" placeholder="Search..." className="input" />{" "}
        <button className="button btn btn-primary">Search</button>
      </div>
      <div className="archive" data-aos="fade-right">
        <h2>Top rated products</h2>
        <div className="d-flex justify-content-between">
          <div>
            <h5>Ninja Silhouette</h5>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <p>$20.00</p>
          </div>
          <img src={product1} alt="" className="pro-pic" />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h5>Ship Your Idea</h5>
            <p>$20.00</p>
          </div>
          <img src={product2} alt="" className="pro-pic" />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h5>Flying Ninja</h5>
            <p>
              <del>$15.00</del>$12.00
            </p>
          </div>
          <img src={product3} alt="" className="pro-pic" />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h5>Woo Single #1</h5>
            <p>$3.00</p>
          </div>
          <img src={product4} alt="" className="pro-pic" />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h5>Ship Your Idea</h5>
            <p>$30.00-$35.00</p>
          </div>
          <img src={product5} alt="" className="pro-pic" />
        </div>
      </div>
      <div className="archive" data-aos="fade-right">
        <h2>Archives</h2>
        <div className="d-flex align-items-center my-3">
          <BsCalendar3 /> <h5 className="mx-2">November 2020</h5>
        </div>
      </div>
      <div className="archive" data-aos="fade-right">
        <h2>Categories</h2>
        <div className="fill d-flex my-2">
          <BsFillFolderFill className="mt-1" />{" "}
          <h5 className="mx-1">Animals</h5>
        </div>
        <div className="fill d-flex">
          <BsFillFolderFill className="mt-1" /> <h5 className="mx-1">Cosmos</h5>
        </div>
        <div className="fill d-flex my-2">
          <BsFillFolderFill className="mt-1" /> <h5 className="mx-1">Nature</h5>
        </div>
        <div className="fill d-flex">
          <BsFillFolderFill className="mt-1" /> <h5 className="mx-1">Other</h5>
        </div>
        <div className="fill d-flex my-2 mb-4">
          <BsFillFolderFill className="mt-1" /> <h5 className="mx-1">People</h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
