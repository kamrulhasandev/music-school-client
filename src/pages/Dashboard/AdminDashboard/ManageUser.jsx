import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });

const handleMakeAdmin = (user) => {
    fetch(`https://school-server-gamma.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        refetch();
        toast.success(`${user.name} is Admin Now!`)
      }
    })
  };
const handleMakeInstructor = (user) => {
    fetch(`https://school-server-gamma.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        refetch();
        toast.success(`${user.name} is Instructor Now!`)
      }
    })
  };
  
  

  return (
    
    <div>
      <Helmet>
        <title>Music Universe | Manage Users</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center py-5">
        Manage All Classes
      </h1>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-[#F65209] border-b border-[#F65209]">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Photo
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-center"
                      >
                        Status
                      </th>
                      
                      
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr
                        className="bg-white border-b border-[#F65209] transition duration-300 ease-in-out hover:bg-gray-100"
                        key={user._id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <img src={user.photo} className="h-14 w-14 rounded-full" alt="" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.role ? user.role : 'Student'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.email}
                        </td>
                       
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap justify-center flex gap-2">
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className={`bg-green-600 text-white p-1 rounded-lg ${
                              user.role === "admin" 
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={user.role === "admin"}
                          >
                            Make Admin
                          </button>
                          <button
                            onClick={() => handleMakeInstructor(user)}
                            className={`bg-green-600 text-white p-1 rounded-lg ${
                              user.role === "instructor" 
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={user.role === "instructor"}
                          >
                            Make Instructor
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

      
    </div>
  );
};

export default ManageUser;
