import React, { useState } from "react";
import ninja1 from "../images/ninja1.jpg";
import ninja2 from "../images/ninja2.jpg";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../css/ninja.css";

const Ninja = () => {
  const [click, setClick] = useState(0);
  const add = () => {
    if (click < 10) {
      setClick(click + 1);
    }
  };

  const subtract = () => {
    if (click > 0) {
      setClick(click - 1);
    }
  };
  return (
    <div className="container my-5">
      <div className="row">
        <img src={ninja1} alt="" className="col-sm-6 pic" />
        <div className="col-sm-6">
          <h1 className="ninja-title">Ninja Silhouette</h1>
          <div className="d-flex align-items-center mt-5">
            <div className="d-flex mx-2">
              <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
              <BsStarFill />{" "}
            </div>
            <Link to="/" className="underline" href="#">
              (<u> 1 customer review </u>)
            </Link>
          </div>
          <p className="price">$20.00</p>
          <p className="aboutit">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <div className="d-flex">
            <div className="d-flex">
              <button className="add" onClick={add}>
                +
              </button>
              <input type="text" className="numb" placeholder={click} />
              <button className="add" onClick={subtract}>
                -
              </button>
            </div>
            <button className="add-cart">ADD TO CART</button>
          </div>
          <h4 className="sku d-flex">
            SKU: T-SHIRT-NINJA-SILHOUETTE{" "}
            <p>
              {" "}
              Categories: <u>Clothing</u>, <u>T-shirts</u>
            </p>{" "}
          </h4>
        </div>
      </div>
      <div className="d-flex">
        <img src={ninja1} alt="" />
        <img src={ninja2} alt="" />
      </div>
    </div>
  );
};

export default Ninja;