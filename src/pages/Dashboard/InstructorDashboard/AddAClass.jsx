import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { imageUpload } from "../../../utility/utility";
import { Toaster, toast } from "react-hot-toast";

const AddAClass = () => {
    const {user} = useContext(AuthContext);


    const handleAddClass = (event) => {
        event.preventDefault();
        const className = event.target.className.value;
        const instructorName = event.target.instructorName.value;
        const instructorEmail = event.target.instructorEmail.value;
        const availableSeats = parseFloat(event.target.availableSeats.value);
        const price = event.target.price.value;
        const status = 'pending'
        const classImage = event.target.classImage.files[0];

        imageUpload(classImage)
        .then(data => {
            const image = data.data.display_url
            const classData = {className,image,instructorName,instructorEmail,availableSeats,price, status, totalStudent:0}
            
            // post classData in database
            fetch(`https://school-server-gamma.vercel.app/allClasses`, {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(classData)
            })
            .then(data => {
                console.log(data);
                toast.success('Class Added Successfully. Please wait for admin approval')
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        })

        // console.log(className, classImage, instructorName, instructorEmail, availableSeats, price, );
    }




  return (
    <div>
      <div className="w-1/2  mx-auto">
        <h2 className="text-center text-3xl font-bold py-5">Add A Class</h2>
        <form onSubmit={handleAddClass} className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div>
              <label htmlFor="className" className="block mb-2 text-sm">
                Class Name
              </label>
              <input
                type="text"
                name="className"
                id="className"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label htmlFor="classImage" className="block mb-2 text-sm">
                Class Image
              </label>
              <input
                type="file"
                name="classImage"
                id="classImage"
                required
                placeholder="Enter Your Email Here"
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
                value={user.displayName}
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
                value={user.email}
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
              Add a Class
            </button>
          </div>
        </form>
      </div>
      <Toaster/>
    </div>
  );
};

export default AddAClass;
