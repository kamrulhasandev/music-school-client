import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isAdmin = true;
  const isInstructor = false;

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
            <h2 className="text-lg font-semibold">Drawer</h2>
            <p className="text-gray-500">This is a drawer.</p>
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
