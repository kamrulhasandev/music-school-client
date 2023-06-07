import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { AuthContext } from "../../../providers/AuthProvider";
const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);


  const handleLogout = () => {
    logOut()
    .then(()=>{})
    .catch(error => {
      console.log(error);
    })
  }

    const navOptions  = 
    <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/instructor'}>Instructors</Link></li>
        <li><Link to={'/classes'}>Classes</Link></li>
        {
          user && <li><Link to={'/'}>Dashboard</Link></li>
        }
    </>

  return (
    <div>
      <div className="navbar bg-base-100 border-b">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user && <div className="avatar">
            <div className="w-10 h-10 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} data-toggle="tooltip"
                title={user.displayName}  />
            </div>
          </div>
          }
        { user ? <Link to={'/login'}>
        <button onClick={handleLogout}
              className="bg-[#f65209] rounded-md px-3 py-2 text-white"
            >
              LogOut
            </button></Link>:
          <Link to={'/login'}>
        <button
              className="bg-[#f65209] rounded-md px-3 py-2 text-white"
            >
              Sign In
            </button></Link>
            }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
