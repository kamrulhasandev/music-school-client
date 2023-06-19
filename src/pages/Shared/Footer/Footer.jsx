import React from "react";
import { FaFacebook,FaTwitterSquare,FaInstagramSquare,FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (

    <div  className="max-w-screen-xl mx-auto px-5 py-10">
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Music <span className="text-black">Universe</span></h1>
            <p>A trusted institution for learning music.</p>
          </div>
          <div>
            <ul>
              <li className="font-bold border-b">COMPANY</li>
              <Link className="hover:text-black" to={'/'}><li>Home</li></Link>
              <Link className="hover:text-black" to={'/instructor'}><li>Instructors</li></Link>
              <Link className="hover:text-black" to={'/classes'}><li>Classes</li></Link>
              <Link className="hover:text-black" to={'/dashboard'}><li>Dashboard</li></Link>
            </ul>
          </div>
          <div>
          <ul>
              <li className="font-bold border-b">ADDRESS</li>
              <li>musicuniverse@gmail.com</li>
              <li>+111 222 333</li>
              <li>Level-4, 34</li>
              <li>Banani, Dhaka</li>
            </ul>
          </div>
          <div>
            <li className="list-none font-bold  uppercase border-b mb-3">Social</li>
          <div className="flex gap-2">
            <FaFacebook/>
            <FaInstagramSquare/>
            <FaTwitterSquare/>
            <FaYoutubeSquare/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
