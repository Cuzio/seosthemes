import React from "react";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaPhone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "../css/head.css";

const Head = () => {
  return (
    <div>
      <div className=" contain bg-drak d-md-flex justify-content-between align-items-center ">
        <div className="d-flex justify-content-evenly align-items-center first">
          <div className="d-flex justify-evenly align-items-center mx-1 px-1 text-center">
            <FiMail className="mt-2 mx-2" />
            <p className="mt-4">malin@seosthemes.com</p>
            <h1 className="mt-3 line"></h1>
          </div>
          <div className="d-flex justify-evenly align-items-center mx-1 px-1 text-center">
            <GoLocation className="mt-2 mx-2" />
            <p className="mt-4">Str.386 Germany</p>
            <h1 className="mt-3 line"></h1>
          </div>
          <div className="d-flex justify-evenly align-items-center mx-1 px-1 text-center">
            <FaPhone className="mt-2 mx-2" />
            <p className="mt-4">+2345595</p>
            <h1 className="mt-3 line"></h1>
          </div>
          <div className="d-flex justify-evenly align-items-center mx-1 px-1 text-center">
            <FaSearch className="mt-2 mx-2" />
            <input type="text" placeholder="Search ..." />
            <h1 className="mt-3 line"></h1>
          </div>
          <div className="d-flex justify-evenly align-items-center mx-1 px-1 text-center">
            <button type="button" className="btn position-relative">
              <BsFillCartFill className="cart" />
              <span className="num position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0<span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <BsFillPersonFill className="mt-2" />
          <p className="mt-4">Login/Register</p>
        </div>
      </div>
    </div>
  );
};

export default Head;
