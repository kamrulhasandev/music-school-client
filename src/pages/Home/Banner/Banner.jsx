import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";

import slide1 from '../../../assets/slide1.jpg'
import slide2 from '../../../assets/slide2.jpg'
import slide3 from '../../../assets/slide3.jpg'
const Banner = () => {
  return (
    

    <div className="">
      <Swiper
        pagination={true}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay
        loop={true}
      >
        <SwiperSlide>
          <div
            className="hero h-[70vh]"
            style={{
              backgroundImage: `url(${slide1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div data-aos="fade-right" className="container mx-auto">
              <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
                <div data-aos="fade-right" className="max-w-md px-5  ">
                  <h1 className="mb-5 hero-heading lg:text-5xl text-2xl  font-bold">
                  Learn to Play Your Favorite Instrument.
                  </h1>
                  <p className="text-gray-200 mb-3">
                  No matter what type of music school you choose, you can expect to learn from experienced and qualified teachers.
                  </p>
                  <Link to="/instructor">
                    <button className="bg-[#f65209] rounded-md px-3 py-2 text-white">
                      Our Instructor
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[70vh]"
            style={{
              backgroundImage: `url(${slide2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="container mx-auto">
              <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
                <div data-aos="fade-right" className="max-w-md px-5 ">
                  <h1 className="mb-5 hero-heading lg:text-5xl text-2xl font-bold capitalize">
                  Music Lessons for All Ages and Levels
                  </h1>
                  <p className="text-gray-200 mb-3">
                  Music school is a great way to learn to play an instrument, improve your skills, and make new friends.
                  </p>
                  <Link to="/Classes">
                    <button className="bg-[#f65209] rounded-md px-3 py-2 text-white">
                      Our Classes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[70vh]"
            style={{
              backgroundImage: `url(${slide3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="container mx-auto">
              <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
                <div data-aos="fade-right" className="max-w-md px-5">
                  <h1 className="mb-5 hero-heading lg:text-5xl text-2xl font-bold">
                  Our Music School Has a Winning Tradition
                  </h1>
                  <p className="text-gray-200 mb-3">
                  If you are interested in learning to play an instrument, music school is a great way to get started.
                  </p>
                  <Link to="/login">
                    <button className="bg-[#f65209] rounded-md px-3 py-2 text-white">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
