import React from "react";
import shirt from "../images/tshirt.png";
import { BsEyeFill, BsFillStarFill } from "react-icons/bs";
import profile from "../images/person1.jpg";
import "../css/description.css";

const Description = () => {
  const review = document.querySelector(".review");
  const reviewPage = document.querySelector(".review-page");
  const description = document.querySelector(".description");
  const descriptionPage = document.querySelector(".description-page");

  const view = () => {
    console.log("view");
    review.style.display = "block";
    reviewPage.style.backgroundColor = "white";
    reviewPage.style.color = "blue";
    description.style.display = "none";
    // descriptionPage.style.backgroundColor = "gray";
  };

  const show = () => {
    console.log("view");
    reviewPage.style.backgroundColor = "gray";
    review.style.display = "none";
    description.style.display = "block";
    descriptionPage.style.backgroundColor = "white";
    reviewPage.style.color = "white";
  };
  return (
    <div className="container">
      <div className="description-review">
        <div className="description-review-nav">
          {/* <hr /> */}
          <h4 className="description-page" onClick={show}>
            Description
          </h4>
          <h4 className="review-page" onClick={view}>
            Reviews (1)
          </h4>
          {/* <hr /> */}
        </div>
        <div className="description">
          <h1>Description</h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </div>
        <div className="review">
          <h1>1 review for Ninja Silhouette</h1>
          <div className="review-results">
            <img src={profile} alt="" className="profile-picture" />
            <div className="review-result-comment">
              <div className="review-result">
                <p>thinhnqc – June 22, 2023</p>
                <div className="stars">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
              </div>
              <h5>Good Product</h5>
            </div>
          </div>
          <h5>Add a review</h5>
          <p>
            You must be <span>logged in</span> to post a review.
          </p>
        </div>
      </div>
      <div className="nice-products">
        <h1>You may also like…</h1>
        <img src={shirt} alt="" className="nice-products-picture" />
        <div className="nice-products-price">
          <p className="dollar">$30.00</p>
          <p>BUY ON WORDPRESS SWAG STORE</p>
          <div>
            <p>
              <BsEyeFill />
              VIEW PRODUCT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
