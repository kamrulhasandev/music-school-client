import React, { useEffect, useState } from "react";
import Loader from "../Shared/Loader/Loader";
import { Helmet } from "react-helmet";

const Instructors = () => {
  const [instructors, setInstructors] = useState();
  useEffect(() => {
    fetch("https://school-server-gamma.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  

  return (
    <div className="max-w-screen-xl mx-auto pb-10 px-10">
      <Helmet>
        <title>Music Universe | All Instructor</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center py-10">Instructors</h1>
      <div className="grid md:grid-cols-4 gap-10 items-center text-center">
        {instructors?.map((item) => (

          <div className="wrapper transition duration-300 ease-in-out hover:scale-110  antialiased text-gray-900">
            <div>
              <img
                src={item.photo}
                className="w-full object-cover object-center rounded-lg shadow-md shadow-[#F65209]"
              />

              <div className="relative px-4 -mt-10  ">
                <div className="bg-white border-2 border-[#F65209]  p-6 rounded-lg shadow-lg">
                  <div className="flex items-baseline flex-col ">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p>{item.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
