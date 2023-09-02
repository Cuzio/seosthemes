import React, { useEffect } from "react";
import movie1 from "../images/movie1.jpg";
import movie2 from "../images/movie2.jpg";
import movie3 from "../images/movie3.jpg";
import movie4 from "../images/movie4.jpg";
import movie5 from "../images/movie5.jpg";
import movie6 from "../images/movie6.jpg";
import movie7 from "../images/movie7.jpg";
import movie8 from "../images/movie8.jpg";
import movie9 from "../images/movie9.jpg";
import movie10 from "../images/movie10.jpg";
import movie11 from "../images/movie11.jpg";
import movie12 from "../images/movie12.jpg";
import {
  BsPinAngle,
  BsFillFolderFill,
  BsFacebook,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { TfiYoutube, TfiVimeoAlt } from "react-icons/tfi";
import { FaLinkedinIn, FaWifi } from "react-icons/fa";
import clothe1 from "../images/clothe1.jpg";
import clothe2 from "../images/clothe2.jpg";
import clothe3 from "../images/clothe3.jpg";
import clothe4 from "../images/clothe4.jpg";
import clothe5 from "../images/clothe5.jpg";
import "../css/footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div>
      <div className="bg-dark text-secondary">
        <div className="container">
          <div className="row">
            <div className="col-sm-2" data-aos="zoom-in">
              <h1 className="album foot">Album Footer</h1>
              <div className="movies">
                <img src={movie1} alt="" className="movie" />
                <img src={movie2} alt="" className="movie" />
                <img src={movie3} alt="" className="movie" />
                <img src={movie4} alt="" className="movie" />
                <img src={movie5} alt="" className="movie" />
                <img src={movie6} alt="" className="movie" />
                <img src={movie7} alt="" className="movie" />
                <img src={movie8} alt="" className="movie" />
                <img src={movie9} alt="" className="movie" />
                <img src={movie10} alt="" className="movie" />
                <img src={movie11} alt="" className="movie" />
                <img src={movie12} alt="" className="movie" />
              </div>
            </div>
            <div className="col-sm-4" data-aos="zoom-in">
              <h1 className="album">Recent Post</h1>
              <div>
                <div className="folder d-flex">
                  <BsPinAngle className="mt-1" /> <p className="mx-1">Model</p>
                </div>
                <div className="folder d-flex">
                  <BsPinAngle className="mt-1" /> <p className="mx-1">Woman</p>
                </div>
                <div className="folder d-flex">
                  <BsPinAngle className="mt-1" />{" "}
                  <p className="mx-1">Fashion</p>
                </div>
                <div className="folder d-flex">
                  <BsPinAngle className="mt-1" />{" "}
                  <p className="mx-1">Elephants</p>
                </div>
                <div className="folder d-flex">
                  <BsPinAngle className="mt-1" />{" "}
                  <p className="mx-1">Mountains</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3" data-aos="zoom-in">
              <h1 className="album">Categories</h1>
              <div>
                <div className="folder d-flex">
                  <BsFillFolderFill className="mt-1" />{" "}
                  <p className="mx-1">Animals</p>
                </div>
                <div className="folder d-flex">
                  <BsFillFolderFill className="mt-1" />{" "}
                  <p className="mx-1">Cosmos</p>
                </div>
                <div className="folder d-flex">
                  <BsFillFolderFill className="mt-1" />{" "}
                  <p className="mx-1">Nature</p>
                </div>
                <div className="folder d-flex">
                  <BsFillFolderFill className="mt-1" />{" "}
                  <p className="mx-1">Other</p>
                </div>
                <div className="folder d-flex">
                  <BsFillFolderFill className="mt-1" />{" "}
                  <p className="mx-1">People</p>
                </div>
              </div>
            </div>
            <div className="col-sm-2" data-aos="zoom-in">
              <h1 className="album">Products</h1>
              <div>
                <div className="product row">
                  <div className="col-8">
                    <h4>Patient Ninja</h4>
                    <p>$35.00</p>
                  </div>
                  <img src={clothe1} alt="" className="clothe col-4" />
                </div>
                <div className="product row">
                  <div className="col-8">
                    <h4>Ship Your Idea</h4>
                    <p>$15.00</p>
                  </div>
                  <img src={clothe2} alt="" className="clothe col-4" />
                </div>
                <div className="product row">
                  <div className="col-8">
                    <h4>Flying Ninja</h4>
                    <p>
                      <del>$15.00</del> $12.00
                    </p>
                  </div>
                  <img src={clothe3} alt="" className="clothe col-4" />
                </div>
                <div className="product row">
                  <div className="col-8">
                    <h4>Premiun Quality</h4>
                    <p>
                      <del>$15.00</del> $12.00
                    </p>
                  </div>
                  <img src={clothe4} alt="" className="clothe col-4" />
                </div>
                <div className="product row">
                  <div className="col-8">
                    <h4>Woo Ninja</h4>
                    <p>$15.00</p>
                  </div>
                  <img src={clothe5} alt="" className="clothe col-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <hr />
          <div className="container">
            <div className="social d-flex">
              <div className="face">
                <BsFacebook />
              </div>
              <div className="face">
                <BsTwitter />
              </div>
              <div className="face">
                <TfiYoutube />
              </div>
              <div className="face">
                <TfiVimeoAlt />
              </div>
              <div className="face">
                <BsInstagram />
              </div>
              <div className="face">
                <FaLinkedinIn />
              </div>
              <div className="face">
                <FaWifi />
              </div>
            </div>
            <div className="custom text-center">
              <p>
                Your Custom © Copyright <span> SEOS THEMES </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
