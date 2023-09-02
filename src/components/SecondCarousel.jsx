import React from "react";
import model1 from "../images/model1.jpg";
import model2 from "../images/model2.jpg";
import model3 from "../images/model3.jpg";
import model4 from "../images/model4.jpg";
import model5 from "../images/model5.jpg";
import "../css/secondcarousel.css";

const SecondCarousel = () => {
  return (
    <div>
      <div className="gallery">
        <div className="gallery_item">
          <img src={model1} class="gallery_image" alt="Image 1" />
          <img src={model2} class="gallery_image" alt="Image 2" />
          <img src={model3} class="gallery_image" alt="Image 3" />
          <img src={model4} class="gallery_image" alt="Image 4" />
          <img src={model5} class="gallery_image" alt="Image 5" />
        </div>
      </div>
    </div>
  );
};

export default SecondCarousel;
