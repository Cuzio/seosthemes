import React from "react";
import satellite from "../images/satellite.jpg";
import moon from "../images/moon.jpg";
import stars from "../images/stars.jpg";
import landscape from "../images/landscape.jpg";
import astronaut from "../images/astronaut.jpg";
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

const Comos = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="container">
      <h1 className="comos">Category: Cosmos</h1>
      <div data-aos="fade-left">
        <div className="cont">
          <h2>Satellite</h2>
          <div className="state d-flex ">
            <img src={satellite} alt="" className="model" />
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
          <h2>Moon</h2>
          <div className="state d-flex ">
            <img src={moon} alt="" className="model" />
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
          <h2>Landscape</h2>
          <div className="state d-flex ">
            <img src={landscape} alt="" className="model" />
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
          <h2>Stars</h2>
          <div className="state d-flex ">
            <img src={stars} alt="" className="model" />
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
          <h2>Astronaut</h2>
          <div className="state d-flex ">
            <img src={astronaut} alt="" className="model" />
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

export default Comos;
