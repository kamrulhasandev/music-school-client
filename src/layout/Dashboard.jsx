import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()

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

        <div className="md:ml-72 ">
          <Outlet />
        </div>

        <div
          className={`fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white shadow-lg`}
        >
          <div className="px-6 py-4">
            <img src={logo} className="py-5" alt="" />
            <hr />
            
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
                    <Link to={"myEnrolledClasses"}>Payment History</Link>
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
