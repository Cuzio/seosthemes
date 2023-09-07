import React, { useEffect } from "react";
import "../css/contactUs.css";
import { GiSpaceship } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className="contact-cover">
      <div className="contactUs">
        <h1 data-aos="zoom-in">Click on button shooting!</h1>
        <form action="" className="contact-form">
          <input
            type="text"
            placeholder="Name"
            className="contact-name"
            data-aos="fade-left"
            // data-aos-duration="10000"
            data-aos-delay="1300"
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-email"
            data-aos="fade-left"
            // data-aos-duration="9000"
            data-aos-delay="1100"
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact-subject"
            data-aos="fade-left"
            // data-aos-duration="7000"
            data-aos-delay="900"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="3"
            placeholder="Message"
            className="contact-message"
            data-aos="fade-left"
            // data-aos-duration="5000"
            data-aos-delay="700"
          ></textarea>
          <button
            className="contact-button"
            data-aos="fade-left"
            // data-aos-duration="3000"
            data-aos-delay="500"
          >
            SHOOTING
          </button>
          <GiSpaceship
            className="spaceShip"
            data-aos="fade-left"
            // data-aos-duration="1000"
            data-aos-delay="300"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
