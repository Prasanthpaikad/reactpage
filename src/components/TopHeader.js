import React from "react";
import logo from "../assets/real-estate-house.png";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <div className="topHeader">
      <div className="imgLogo">
        <Link to={"/"}>
        <img src={logo} alt="" />
        </Link>

      </div>
      <div className="headerText">
        <h1>XYZ SYSTEMS LLP</h1>
      </div>
    </div>
  );
}

export default TopHeader;
