import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const TopClasses = () => {
  const [classes, setClasses] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/approvedClasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

    const {user} = useContext(AuthContext);

  const handleSelect = (id) => {
    if(!user){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in before selecting the course.",
          });
          return;
    }
  }
  const sliceClasses = classes?.slice(0, 6);

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10">
      <div className="flex flex-col items-center py-10">
        <h3 className="text-4xl font-bold">Popular Classes</h3>
        <p className="text-2xl text-[#F65209] pb-3">Our Popular Classes Here</p>
        <div className="h-1 bg-[#F65209] w-3/12"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {sliceClasses?.map((item) => (
          <div key={item._id}>
            <div className="relative  flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <a
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  className="object-cover transition duration-300 ease-in-out hover:scale-110"
                  src={item.image}
                  alt="product image"
                />
                
              </a>
              <div className="mt-4 px-5 pb-5">
                  <h5 className="text-xl tracking-tight text-slate-900">
                    {item.className}
                  </h5>
                  <p>Instructor: {item.instructorName}</p>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">Price: ${item.price}</span>
                    
                  </p>
                  
                </div>
                <button className="bg-[#F65209] w-full text-white px-4 py-2 rounded-md hover:bg-[#d84f14]"
                disabled={parseInt(item.availableSeats) === 0}
                onClick={() => handleSelect(item)}>Select Class</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClasses;
