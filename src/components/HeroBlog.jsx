import React, { useEffect } from "react";
import "../css/heroBlog.css";
import AOS from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";

const HeroBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="heroBlog-cover">
      <div className="heroBlog">
        <h1>Blog Page - Right Sidebar</h1>
        <p>Shops is a Multipurpose and HTML5 WordPress Theme</p>
      </div>
    </div>
  );
};

export default HeroBlog;
