import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateClassInfo = () => {
    // const id = useParams()
    // console.log(id);
    // // const defaultData = useLoaderData()
    // // console.log(defaultData);
    // useEffect(()=>{
    //   fetch(`http://localhost:5000/updateOne/${id}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    // },[])


    // const handleUpdate = (event) => {
    //   event.preventDefault();
    //   const form = event.target
    //   const className = form.className.value;
    //   const instructorName = form.instructorName.value;
    //   const instructorEmail = form.instructorEmail.value;
    //   const availableSeats = form.availableSeats.value;
    //   const price = form.price.value;
    //   console.log(className,instructorName,instructorEmail,availableSeats,price);
    // }
    


    return (
        <div>
            <div>
      <div className="w-1/2  mx-auto">
        <h2 className="text-center text-3xl font-bold py-5">Update A Class</h2>
        <form onClick={handleUpdate} className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div>
              <label htmlFor="className" className="block mb-2 text-sm">
                Class Name
              </label>
              <input
                type="text"
                // defaultValue={defaultData?.className}
                name="name"
                id="className"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            
            <div>
              <div className="flex justify-between">
                <label htmlFor="instructorName" className="text-sm mb-2">
                  InstructorName
                </label>
              </div>
              <input
                type="text"
                // defaultValue={defaultData?.instructorName}
                name="instructorName"
                id="instructorName"
                disabled
                placeholder="Instructor Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="instructorEmail" className="text-sm mb-2">
                  Instructor Email
                </label>
              </div>
              <input
                type="email"
                // defaultValue={defaultData?.instructorEmail}
                name="instructorEmail"
                id="instructorEmail"
                disabled
                placeholder="Instructor Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="availableSeats" className="text-sm mb-2">
                  Available Seats
                </label>
              </div>
              <input
                type="number"
                // defaultValue={defaultData?.availableSeats}
                name="availableSeats"
                id="availableSeats"
                required
                placeholder="Available Seats"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="price" className="text-sm mb-2">
                  Price
                </label>
              </div>
              <input
                type="number"
                // defaultValue={defaultData?.price}
                name="price"
                id="price"
                required
                placeholder="Price"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#f65209] w-full rounded-md py-3 text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <Toaster/>
    </div>
        </div>
    );
};

export default UpdateClassInfo;