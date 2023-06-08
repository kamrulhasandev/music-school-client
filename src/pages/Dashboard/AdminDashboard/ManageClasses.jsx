import React, { useState } from "react";
import useAllClasses from "../../../hooks/useAllClasses";
import { useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";

const ManageClasses = () => {
  const [allClasses, refetch, isLoading] = useAllClasses();
  const [showModal, setShowModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleApproved = (id) => {
    fetch(`http://localhost:5000/updateStatusApproved/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          isLoading(true);
          toast.success("Approved");
        }
      });
  };

  const handleDeny = (id) => {
    fetch(`http://localhost:5000/updateStatusDeny/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          isLoading(true);
          toast.success("Denied");
        }
      });
  };

  const handleFeedback = (id) => {
    setSelectedItemId(id);
    setShowModal(true);
  };

  const handleSubmitFeedback = () => {
    fetch(`http://localhost:5000/updateFeedback/${selectedItemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback: feedbackText }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setShowModal(false);
          setFeedbackText("");
          toast.success("Feedback submitted");
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-5">
        Manage All Classes
      </h1>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-200 border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Class Image
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Class Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Instructor Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Instructor Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Available Seats
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-center"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allClasses.map((item, index) => (
                      <tr
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        key={item._id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img src={item.image} className="h-10 w-10" alt="" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.className}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.instructorName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.instructorEmail}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.availableSeats}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.status}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex gap-2">
                          <button
                            onClick={() => handleApproved(item._id)}
                            className="bg-green-600 text-white p-1 rounded-lg"
                            disabled={item.status === "APPROVE"}
                          >
                            Approved
                          </button>
                          <button
                            onClick={() => handleDeny(item._id)}
                            className="bg-red-600 text-white p-1 rounded-lg"
                            disabled={item.status === "DENY"}
                          >
                            Deny
                          </button>
                          <button
                            onClick={() => handleFeedback(item._id)}
                            className="bg-yellow-600 text-white p-1 rounded-lg"
                          >
                            Feedback
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Toaster />
        </div>
      </div>

      {/* Feedback Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Provide Feedback
                    </h3>
                    <div className="mt-2">
                      <textarea
                        className="resize-none border rounded-md w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        rows="3"
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleSubmitFeedback}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
