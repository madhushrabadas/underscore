import React from "react";
import "./style.css";
import arrow from "../../../public/sidearrow.svg";

const Subnav = () => {
  return (
    <div className="subnav">
      <span>Home</span>
      <span>
        <img className="imgsub" src={arrow} alt="" />
      </span>
      <span>Shop</span>
      <span>
        <img className="imgsub" src={arrow} alt="" />
      </span>
      <hr  />
      <span>Asgaard Sofa</span>
    </div>
  );
};

export default Subnav;
