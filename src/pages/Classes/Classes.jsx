import React, { useContext, useState } from "react";
import useApprovedClass from "../../hooks/useApprovedClass";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import useSelectClass from "../../hooks/useSelectClass";

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
    fetch(`http://localhost:5000/selectedClass`, {
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
    <div>
      <h1 className="text-4xl font-bold text-center py-5"> All Classes</h1>
      <div className="md:flex gap-5">
        {approvedClasses.map((item) => (
          <div key={item._id}>
            <div
              className={`bg-white rounded-lg shadow-lg p-6 ${
                item.availableSeats === 0 ? "bg-red-100" : ""
              }`}
            >
              <img
                src={item.image}
                alt="Course"
                className="w-full h-auto rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.className}</h2>
              <p className="text-gray-600 mb-2">
                Instructor: {item.instructorName}
              </p>
              <p className="text-gray-600 mb-2">
                Available Seats: {item.availableSeats}
              </p>
              <p className="text-gray-800 text-lg font-bold mb-4">
                ${item.price}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
