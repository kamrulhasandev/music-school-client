import React, { useContext, useState } from "react";
import useApprovedClass from "../../hooks/useApprovedClass";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import useSelectClass from "../../hooks/useSelectClass";
import { Helmet } from "react-helmet";

const Classes = () => {
  const [approvedClasses, isLoading] = useApprovedClass();
  const { user } = useContext(AuthContext);
    const [,refetch] = useSelectClass()

  const handleSelect = (item) => {
    const {_id,className, image, instructorName, instructorEmail,price, availableSeats} = item
    if(!user){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in before selecting the course.",
          });
          return;
    }
    const selectedClass = {classId: _id, image, className, instructorName, instructorEmail, availableSeats, price, email:user.email}
    fetch(`https://school-server-gamma.vercel.app/selectedClass`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(selectedClass)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            refetch()
            toast.success('Class Selected!')
        }
    })
    
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 pb-10">
      <Helmet>
        <title>Music Universe | All Classes</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center py-10">All Classes</h1>
      <div className="grid md:grid-cols-4 gap-10">
        {approvedClasses.map((item) => (
          <div key={item._id}>
            <div
              className={`bg-white rounded-lg shadow-sm shadow-[#F65209] transition duration-300 ease-in-out hover:scale-110 ${
                item.availableSeats == 0 ? "hover:bg-red-300" : ""
              } p-6`}
            >
              <img
                src={item.image}
                alt="Course"
                className="w-full  rounded-md mb-4 md:h-40"
              />
              <h2 className="text-xl font-semibold mb-2">{item.className}</h2>
              <p className="text-gray-600 mb-2">
                Instructor: {item.instructorName}
              </p>
              <p className="text-gray-600 mb-2">
                Available Seats: {item.availableSeats}
              </p>
              <p className="text-gray-800 text-lg font-bold mb-4">Price :
                ${item.price}
              </p>
              <button
                className="bg-[#F65209] w-full text-white px-4 py-2 rounded-md hover:bg-[#d84f14]"
                disabled={parseInt(item.availableSeats) === 0}
                onClick={() => handleSelect(item)}
              >
                Select
              </button>
            </div>

            
          </div>
        ))}
      </div>
      <Toaster/>
    </div>
  );
};

export default Classes;
