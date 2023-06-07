import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed w-full top-0 left-0 z-20">
      <div>
        <div className="md:w-[1200px] py-4 mx-auto flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              onMouseDown={() => setToggle(true)}
              className="text-3xl sm:hidden cursor-pointer"
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              EduCame
            </div>
          </div>
          <div className="sm:flex items-center hidden ">
            <li className="list-none cursor-pointer mr-10 font-bold">
              <Link>Home</Link>
            </li>
            <li className="list-none cursor-pointer mr-10 font-bold">
              <Link>Instructors</Link>
            </li>
            <li className="list-none cursor-pointer mr-10 font-bold">
              <Link>Classes</Link>
            </li>
          </div>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray">
            Sign In
          </button>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              <div className=" flex flex-col gap-5">
                <li className="list-none cursor-pointer mr-10 font-bold">
                  <Link>Home</Link>
                </li>
                <li className="list-none cursor-pointer mr-10 font-bold">
                  <Link>Instructors</Link>
                </li>
                <li className="list-none cursor-pointer mr-10 font-bold">
                  <Link>Classes</Link>
                </li>
              </div>
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
