import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import reactjs from "../../img/icons/reactjs.png";
import redux from "../../img/icons/redux.png";
import nodejs from "../../img/icons/nodejs.png";
import mongodb from "../../img/icons/mongodb.png";
import php from "../../img/icons/php.png";
import javascript from "../../img/icons/javascript.png";
import laravel from "../../img/icons/laravel.png";
import codeigniter from "../../img/icons/codeigniter.png";
import mysql from "../../img/icons/mysql.png";
import redis from "../../img/icons/redis.png";
import "./slider.css";

function SliderSection() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed : 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
    ],
  };
    return (
        <Slider {...settings} className="ms-5 ps-5  items-center">
                <div>
                    <img src={reactjs} alt="" className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center" />
                </div>
                <div>
                    <img src={redux} alt=""   className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center"/>
                </div>
                <div>
                    <img src={nodejs} alt="" className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center" />
                </div>
                <div>
                    <img src={mongodb} alt="" className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center" />
                </div>
                <div>
                    <img src={javascript} alt=""  className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center" />
                </div>
                <div>
                    <img src={php} alt="" className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center" />
                </div>
                <div>
                    <img src={mysql} alt="" className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center" />
                </div>
                <div>
                    <img src={laravel} alt="" className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center" />
                </div>
                <div>
                    <img src={codeigniter} alt="" className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center" />
                </div>
                <div>
                    <img src={redis} alt="" className="p-[10px] sm:p-0 md:p-0 lg:p-[10px] xl:p-[10px] rounded-2xl bg-white w-[70px] sm:w-[70px] md:w-[70px] lg:w-[70px] xl:w-[70px] content-center" />
                </div>
        </Slider>
    )
}

export default SliderSection
