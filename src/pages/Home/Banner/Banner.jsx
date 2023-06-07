import React from "react";
import Container from "../../../components/Container/Container";
import studentImg from "../../../assets/student.png";
const Banner = () => {
  return (
    <Container>
      <div className="pt-[68px]">
        <div className="md:flex justify-between py-24 items-center">
          <div className="">
            <p>Start Now !</p>
            <h1 className=" text-6xl md:text-7xl font-bold py-5">
              Learn a New <br /> Language
            </h1>
            <p>
              Educame Language School offers German language courses for
              university preparation combined with strong visa-support and
              university admission services for people who wish to study in
              Germany.
            </p>
            <div className="py-5">
              <button className="bg-Teal text-white  py-3 px-5 font-semibold rounded-md">
                All Classes
              </button>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={studentImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
