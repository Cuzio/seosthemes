import React from "react";
import Comos from "../components/Comos";
import Product from "../components/Product";

const Categories = () => {
  return (
    <div>
      <div className="come">
        <Product className="side-left" />
        <Comos className="side-right" />
      </div>
    </div>
  );
};

export default Categories;
