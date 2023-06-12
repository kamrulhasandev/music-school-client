import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, signInWithGoogle, setLoading, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photoUrl = event.target.photoUrl.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    console.log(name, email, photoUrl, password, confirmPassword);

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photoUrl)
          .then(() => {
            const saveUser = {name:name, email:email, photo:photoUrl}
            fetch('https://school-server-gamma.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId){

                navigate(from, { replace: true });
              }
            })

          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const googleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user
        const saveUser = {name:loggedInUser.displayName, email:loggedInUser.email, photo:loggedInUser.photoURL}
        fetch('https://school-server-gamma.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {
                navigate(from, { replace: true });
            })

        // navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center py-20">
      <Helmet>
        <title>Educame | Create an account</title>
      </Helmet>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  border border-[#f65209] text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Create an Account</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="md:flex gap-5">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
            </div>
            <div className="md:flex gap-5">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Photo URL
                </label>
                <input
                  type="photoUrl"
                  name="photoUrl"
                  id="photoUrl"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Confirm Password
                </label>
              </div>
              <input
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#f65209] bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#f65209] w-full rounded-md py-3 text-white"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm ">Signup with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={googleLogin}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center ">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#f65209] text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
