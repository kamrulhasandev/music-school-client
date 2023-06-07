import React from "react";
import dramerImg from "../../../assets/drammer.png";
import { Link } from "react-router-dom";
import { MovingComponent } from "react-moving-text";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white ">
      {/* Left side - Text */}

      <div className="flex flex-col justify-center p-10 md:w-1/2">
        <MovingComponent
          type="glowing"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="2"
          fillMode="none"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#F65209]">Welcome to the </span> Music School
          </h1>
        </MovingComponent>

        <p className="text-xl mb-6">
          Unlock your musical potential with our expert instructors.
        </p>
        <Link className="bg-[#F65209] w-1/3 text-center py-3 rounded text-white font-bold">
          Get Started
        </Link>
      </div>

      {/* Right side - Image */}
      <div className="md:w-1/2">
        <img
          className="w-full h-auto object-cover"
          src={dramerImg}
          alt="Music School"
        />
      </div>
    </div>
  );
};

export default Banner;
