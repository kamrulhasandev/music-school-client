import React, { useEffect, useState } from "react";
import fb from "../../../assets/facebook.png";
import insta from "../../../assets/instagram.png";
import gmail from "../../../assets/gmail.png";
import { Link } from "react-router-dom";
import './TopInstructor.css'

const TopInstructor = () => {
  const [instructors, setInstructors] = useState();
  useEffect(() => {
    fetch("https://school-server-gamma.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  const slicedInstructors = instructors?.slice(0, 6);
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="flex flex-col items-center py-10">
        <h3 className="text-4xl font-bold">Top Instructor</h3>
        <p className="text-2xl text-[#F65209] pb-3">Our Top Instructor Here</p>
        <div className="h-1 bg-[#F65209] w-3/12"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {slicedInstructors?.map((item) => (
          <div key={item._id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#F65209] hover:rotate-3 transform transition-all duration-300">
              <img className="w-full" src={item.photo} alt={"name"} />
              <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-700 text-base">{item.email}</p>
                <div className="flex justify-evenly mt-3">
                  <img src={fb} className="h-6 w-6" alt="" />
                  <img src={insta} className="h-6 w-6" alt="" />
                  <img src={gmail} className="h-6 w-6" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-5">
        <Link to={'instructor'}>
            <a className="cbtn">Our All Instructor </a>
        </Link>
      </div>
    </div>
  );
};

export default TopInstructor;
