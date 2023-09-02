import React from "react";
import model1 from "../images/model1.jpg";
import model2 from "../images/model2.jpg";
import model3 from "../images/model3.jpg";
import model4 from "../images/model4.jpg";
import model5 from "../images/model5.jpg";
import {
  BsCalendar3,
  BsFillPersonFill,
  BsFillFolderFill,
} from "react-icons/bs";
import "../css/model.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";

const Model = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="container">
      <div data-aos="fade-left">
        <div className="cont">
          <h2>Model</h2>
          <div className="state d-flex ">
            <img src={model1} alt="" className="model" />
            <div className="text">
              <p>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
              </p>
              <button className="bot">READ MORE</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <BsCalendar3 /> <p className="nov mx-2 mt-3">November 16, 2020</p>{" "}
          <BsFillPersonFill />
          <p className="nov mx-2 mt-3"> administrator</p>
          <BsFillFolderFill /> <p className="nov mx-2 mt-3">Other</p>
        </div>
        <hr />
      </div>
      <div data-aos="fade-left">
        <div className="cont">
          <h2>Woman</h2>
          <div className="state d-flex ">
            <img src={model2} alt="" className="model" />
            <div className="text">
              <p>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
              </p>
              <button className="bot">READ MORE</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <BsCalendar3 /> <p className="nov mx-2 mt-3">November 16, 2020</p>{" "}
          <BsFillPersonFill />
          <p className="nov mx-2 mt-3"> administrator</p>
          <BsFillFolderFill /> <p className="nov mx-2 mt-3">Other</p>
        </div>
        <hr />
      </div>
      <div data-aos="fade-left">
        <div className="cont">
          <h2>Fashion</h2>
          <div className="state d-flex ">
            <img src={model3} alt="" className="model" />
            <div className="text">
              <p>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
              </p>
              <button className="bot">READ MORE</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <BsCalendar3 /> <p className="nov mx-2 mt-3">November 16, 2020</p>{" "}
          <BsFillPersonFill />
          <p className="nov mx-2 mt-3"> administrator</p>
          <BsFillFolderFill /> <p className="nov mx-2 mt-3">Other</p>
        </div>
        <hr />
      </div>
      <div data-aos="fade-left">
        <div className="cont">
          <h2>Elephants</h2>
          <div className="state d-flex ">
            <img src={model4} alt="" className="model" />
            <div className="text">
              <p>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
              </p>
              <button className="bot">READ MORE</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <BsCalendar3 /> <p className="nov mx-2 mt-3">November 16, 2020</p>{" "}
          <BsFillPersonFill />
          <p className="nov mx-2 mt-3"> administrator</p>
          <BsFillFolderFill /> <p className="nov mx-2 mt-3">Other</p>
        </div>
        <hr />
      </div>
      <div data-aos="fade-left">
        <div className="cont">
          <h2>Mountains</h2>
          <div className="state d-flex ">
            <img src={model5} alt="" className="model" />
            <div className="text">
              <p>
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney
              </p>
              <button className="bot">READ MORE</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center">
          <BsCalendar3 /> <p className="nov mx-2 mt-3">November 16, 2020</p>{" "}
          <BsFillPersonFill />
          <p className="nov mx-2 mt-3"> administrator</p>
          <BsFillFolderFill /> <p className="nov mx-2 mt-3">Other</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Model;
