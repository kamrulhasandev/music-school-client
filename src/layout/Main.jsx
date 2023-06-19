import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/NavBar";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />

      <div className="bg-[#f65209] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
