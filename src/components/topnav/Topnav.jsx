import React from "react";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import logo from '../../../public/Frame.svg'

import "./style.css";

const Topnav = () => {
  return (
    <div className="top">
      <div className="leftx">
        <img src={logo} alt="" />
      </div>
      <div className="mid">
        <ul className="ul">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="rightx">
        <div className="icon">
          <CiUser />
        </div>
        <div className="icon">
          <CiSearch />
        </div>
        <div className="icon">
          <CiHeart />
        </div>
        <div className="icon">
          <CiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
