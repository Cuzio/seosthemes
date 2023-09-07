import React, { useEffect } from "react";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.jpg";
import person5 from "../images/person5.jpg";
import person6 from "../images/person6.jpg";
import person7 from "../images/person7.jpg";
import person8 from "../images/person8.jpg";
import "../css/testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div>
      <div className="testimon text-center my-5">
        <h1>Testimonials</h1>
        <p>Some text about testimonials</p>
      </div>
      <div className="test">
        <div
          type="button"
          className="boo"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-classname="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables."
        >
          <div className="more">
            <div data-aos="fade-down">
              <img src={person1} alt="" className="person" />
            </div>
          </div>
        </div>
        <div
          type="button"
          className="boo"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-classname="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables."
        >
          <div className="more">
            <div data-aos="fade-down">
              <img src={person2} alt="" className="person" />
            </div>
          </div>
        </div>
        <div
          type="button"
          className="boo"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-classname="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables."
        >
          <div className="more">
            <div data-aos="fade-down">
              <img src={person3} alt="" className="person" />
            </div>
          </div>
        </div>
        <div
          type="button"
          className="boo"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-classname="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables."
        >
          <div className="more">
            <div data-aos="fade-down">
              <img src={person4} alt="" className="person" />
            </div>
          </div>
        </div>
        <div
          type="button"
          className="boo"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-classname="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables."
        >
          <div className="more">
            <div data-aos="fade-down">
              <img src={person5} alt="" className="person" />
            </div>
          </div>
        </div>
        <div
          type="button"
          className="boo"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-classname="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables."
        >
          <div className="more">
            <div data-aos="fade-down">
              <img src={person6} alt="" className="person" />
            </div>
          </div>
        </div>
        <div
          type="button"
          className="boo"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-classname="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables."
        >
          <div className="more">
            <div data-aos="fade-down">
              <img src={person7} alt="" className="person" />
            </div>
          </div>
        </div>
        <div
          type="button"
          className="boo"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-classname="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables."
        >
          <div className="more">
            <div data-aos="fade-down">
              <img src={person8} alt="" className="person" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
