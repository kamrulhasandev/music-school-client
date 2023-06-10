import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const {user} = useContext(AuthContext)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div>
      <div className="flex">
        <input
          type="checkbox"
          id="drawer-toggle"
          className="relative sr-only peer"
          checked={drawerOpen}
          onChange={toggleDrawer}
        />
        <label
          htmlFor="drawer-toggle"
          className="absolute md:hidden top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64"
        >
          <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
          <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
        </label>

        <div className="md:ml-72  w-full h-auto ">
          <div className="md:mt-20 pb-5 border-b-2 border-[#F65209]">
          <h1 className="text-center font-bold text-3xl">Hello <span className="text-[#F65209]">{user.displayName}</span> Welcome TO Dashboard</h1>
          </div>
          <div className="">
            <Outlet />
          </div>
          
        </div>

        <div
          className={`fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white shadow-lg`}
        >
          <div className="px-6 py-4 border-2 border-[#F65209] h-screen">
            <img src={logo} className="py-5" alt="" />
            <hr />
            <div className="flex flex-col items-center gap-3">
              <img src={user.photoURL} className="border-4 border-[#F65209] rounded-full h-32 w-32" alt="" />
              <h5>Name: {user.displayName}</h5>
              <p>{user.email}</p>
            </div>
            <div className="border-2 my-8"></div>
            
            <ul>
              {isAdmin ? (
                <>
                  <li>
                    <Link to={"manageClasses"}>Manage Class</Link>
                  </li>
                  <li>
                    <Link to={"manageUsers"}>Manage Users</Link>
                  </li>
                </>
              ) : isInstructor ? (
                <>
                  <li>
                    <Link to={"addAClass"}>Add a Class</Link>
                  </li>
                  <li>
                    <Link to={"myClasses"}>My Class</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"mySelectionClasses"}>My Selection Class</Link>
                  </li>
                  <li>
                    <Link to={"myEnrolledClasses"}>My Enrolled Class</Link>
                  </li>
                  <li>
                    <Link to={"myPaymentHistory"}>Payment History</Link>
                  </li>
                </>
              )}

              <br />
              <li>
                <Link to={"/"}>Home</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
