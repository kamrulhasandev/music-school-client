import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const {loading, setLoading, signIn, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result => {
      console.log(result.user);
      navigate(from, { replace: true })
    })
    .catch(error => {
      setLoading(false)
      console.log(error);
    })
  }

  const googleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user
        const saveUser = {name:loggedInUser.displayName, email:loggedInUser.email, photo:loggedInUser.photoURL}
        fetch('http://localhost:5000/users', {
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
                <title>Educame | Login</title>
            </Helmet>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  border border-[#f65209] text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign In</h1>
        </div>
        <form
        onSubmit={handleLogin}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
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
            <button
              type="submit"
              className="bg-[#f65209] w-full rounded-md py-3 text-white"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm ">Signup with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div onClick={googleLogin} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center ">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-[#f65209] text-gray-600"
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
