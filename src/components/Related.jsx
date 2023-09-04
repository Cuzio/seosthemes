import React from "react";
import shirt1 from "../images/tshirt1.png";

const Related = () => {
  return (
    <div>
      <div className="nice-products">
        <h1>You may also like…</h1>
        <img src={shirt1} alt="" />
        <p>$30.00</p>
        <p>BUY ON WORDPRESS SWAG STORE</p>
        <div>
          <p>
            <BsEyeFill />
            VIEW PRODUCT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Related;
