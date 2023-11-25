import "./style.css";

import furn from "../../../public/furn.svg";
import furn1 from "../../../public/furn1.svg";
import furn2 from "../../../public/furn2.svg";
import star from "../../../public/star.svg";
import React from "react";

const Body = () => {
  return (
    <div className="body">
      <div className="left">
        <div className="imglist">
          <img src={furn1} alt="ddfvd" />
          <img src={furn2} alt="ddfvd" />
        </div>
        <div className="furnimg">
          <img src={furn} alt="ddfvd" />
        </div>
      </div>

      <div className="right">
        <div className="content">
          <div className="heading">Asgaard Sofa</div>
          <div className="price">Rs. 250,000.00</div>
          <div className="review">
            <img src={star} alt="ddfvd" />
            <img src={star} alt="ddfvd" />
            <img src={star} alt="ddfvd" />
            <img src={star} alt="ddfvd" />
            <img src={star} alt="ddfvd" />
            <span className="rev">5 customer review</span>
          </div>
          <div className="p">
            <p>
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>
          <div className="size">
            <span>size</span>
            <div className="box">
              <div className="b1">L</div>
              <div className="b1">XL</div>
              <div className="b1">XS</div>
            </div>
          </div>
          <div className="color">
            <span>color</span>
            <div className="box">
              <div className="b2"> </div>
              <div className="b3"> </div>
              <div className="b4"> </div>
            </div>
          </div>

          <div className="addtocart">
            <div className="rect1">
              <span>-</span>1 <span>+</span>
            </div>
            <div className="rect2">Add To Cart</div>
            <div className="rect3">+ compare</div>
          </div>
        </div>

        <hr />
        <div className="btm">
          <div className="label">
            <div className="lf">SKU </div>
            <span>:</span>
            <div className="rt">SS001</div>
          </div>
          <div className="label">
            <div className="lf">Category </div>
            <span>:</span>
            <div className="rt">sofas</div>
          </div>
          <div className="label">
            <div className="lf">Tags </div>
            <span>:</span>
            <div className="rt">Sofa, Chair, Home, Shop</div>
          </div>
          <div className="label">
            <div className="lf">share </div>
            <span>:</span>
            <div className="rt">icons</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
