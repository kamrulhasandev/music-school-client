import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });

const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
      <h1>Manage User {users.length}</h1>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user,index) => <tr key={user._id}>
                    <th>{index + 1}</th>
                    <th><img src={user.photo} className="h-14 w-14 rounded-full" alt="" /></th>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                    <th><button onClick={()=>handleMakeInstructor(user)} disabled={user.role === 'instructor' ? true : false} className="mr-5">Make Instructor</button><button onClick={()=>handleMakeAdmin(user)} disabled={user.role === 'admin' ? true : false}>Make Admin</button></th>
                </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default ManageUser;
