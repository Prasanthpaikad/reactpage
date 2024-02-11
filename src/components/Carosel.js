import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const data = [
  {
    img: img2,
    title: "Lower Interest Rates",
  },
  {
    img: img3,
    title: "Interest-free Payments",
  },
  {
    img: img1,
    title: "Discount on Materials",
  },
  {
    img: img2,
    title: "Lower Interest Rates",
  },
  {
    img: img3,
    title: "Interest-free Payments",
  },
  {
    img: img1,
    title: "Discount on Materials",
  },
  {
    img: img2,
    title: "Lower Interest Rates",
  },
  {
    img: img3,
    title: "Interest-free Payments",
  },
  {
    img: img1,
    title: "Discount on Materials",
  },
];

function Carosel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <div className="sliderContent">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="card">
              <div className="cardImage">
                <img src={d.img} alt="" />
              </div>
              <div className="cardTitle">
                <p>{d.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carosel;
