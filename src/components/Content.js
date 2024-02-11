import React from "react";
import Carosel from "../components/Carosel";
import membership from "../assets/membership.jpg";
import icon from "../assets/icon.png";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate=useNavigate()
  return (
    <div className="content">
      <div className="content-row ">
        <section className="new-arrival">
          <div className="msg">
            <h1>New Arrival</h1>
            <h6>
              <span className="join-today">JOIN </span>TODAY
            </h6>
          </div>

          <div className="sub">
            <img src={membership} alt="New Arrival" />
            <button className="btn-join-now">JOIN NOW</button>
          </div>
        </section>

        <section className="premium-features">
          <h2>Unlock Premium Features Now</h2>
          <div className="container">
            <div className="line left-line"></div>
            <img src={icon} alt="Logo" className="center-logo" />
            <div className="line right-line"></div>
          </div>
          <div className="carosel">
            <Carosel />
          </div>

          <button className="buttons1" onClick={(e)=>{
            navigate("/member")
          }}>UNLOCK NOW</button>
          <button className="buttons2">DETAILS</button>
        </section>
      </div>
    </div>
  );
}

export default Content;
