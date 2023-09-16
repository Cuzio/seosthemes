import React, { useEffect } from "react";
import wooninja from "../images/wooninja.jpg";
import woologo from "../images/woologo.jpg";
import premium from "../images/premium.jpg";
import patient from "../images/patient.jpg";
import { BsEyeFill, BsFillStarFill } from "react-icons/bs";
import "../css/related.css";
import "../css/description.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

const Related = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const wooNinja = document.querySelector(".woo-ninja");
  const wooLogo = document.querySelector(".woo-logo");
  const premium = document.querySelector(".premium");
  const patient = document.querySelector(".patient");
  const sale = document.querySelector(".sale");

  const woo = () => {
    wooNinja.style.display = "block";
  };

  const woos = () => {
    wooNinja.style.display = "none";
  };

  const woo1 = () => {
    wooLogo.style.display = "block";
    sale.style.display = "none";
  };

  const woos1 = () => {
    wooLogo.style.display = "none";
    sale.style.display = "block";
  };

  const woo2 = () => {
    premium.style.display = "block";
  };

  const woos2 = () => {
    premium.style.display = "none";
  };

  const woo3 = () => {
    patient.style.display = "block";
  };

  const woos3 = () => {
    patient.style.display = "none";
  };
  return (
    <div className="container related-cont">
      <h1>Related Products</h1>
      <div className="related">
        <div className="new-products">
          <div className="woo-ninja" data-aos="flip-left">
            <h4>WOO NINJA</h4>
          </div>
          <img
            src={wooninja}
            alt=""
            className="new-products-image"
            onMouseEnter={woo}
            onMouseLeave={woos}
          />
          <div className="new-products-price">
            <p className="dollar">$20.00</p>
            <p>BUY ON WORDPRESS SWAG STORE</p>
            <div className="eye">
              <p>
                <BsEyeFill />
                VIEW PRODUCT
              </p>
            </div>
          </div>
        </div>

        <div className="new-products">
          <div className="woo-logo" data-aos="flip-left">
            <h4>WOO LOGO</h4>
          </div>
          <div className="sale">
            <p>Sale!</p>
          </div>
          <img
            src={woologo}
            alt=""
            className="new-products-image"
            onMouseEnter={woo1}
            onMouseLeave={woos1}
          />
          <div className="new-products-price">
            <p className="dollar">
              {" "}
              <del>$20.00</del> $18.00
            </p>
            <p>BUY ON WORDPRESS SWAG STORE</p>
            <div className="eye">
              <p>
                <BsEyeFill />
                VIEW PRODUCT
              </p>
            </div>
          </div>
        </div>

        <div className="new-products">
          <div className="premium" data-aos="flip-left">
            <h4>PREMIUN QUALITY</h4>
          </div>
          <img
            src={wooninja}
            alt=""
            className="new-products-image"
            onMouseEnter={woo2}
            onMouseLeave={woos2}
          />
          <div className="new-products-price">
            <p className="dollar">$20.00</p>
            <p>BUY ON WORDPRESS SWAG STORE</p>
            <div className="eye">
              <p>
                <BsEyeFill />
                VIEW PRODUCT
              </p>
            </div>
          </div>
        </div>

        <div className="new-products">
          <div className="patient" data-aos="flip-left">
            <h4>PATIENT NINJA</h4>
          </div>
          <img
            src={woologo}
            alt=""
            className="new-products-image"
            onMouseEnter={woo3}
            onMouseLeave={woos3}
          />
          <div className="new-products-price">
            <p className="dollar">$35.00</p>
            <p>BUY ON WORDPRESS SWAG STORE</p>
            <div className="eye">
              <p>
                <BsEyeFill />
                VIEW PRODUCT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
