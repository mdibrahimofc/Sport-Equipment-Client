import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import swal from 'sweetalert';

const Login = () => {
  const {googleLogin, login} = useContext(AuthContext)
  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then(res=> {
        console.log(res.user);
        swal("You have logged successfully")
    })
    .catch(err=> {
        swal("Email or password didn't match")
    }
    )
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center justify-between max-w-7xl">
        {/* Left Image Section */}
        <div className="flex-1 flex items-center justify-center mr-8 mb-6 md:mb-0">
          <div className="bg-gray-100 flex items-center justify-center shadow-md">
            <img
              src="data:image/webp;base64,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"
              alt="Login Icon"
              className="w-full"
            />
          </div>
        </div>

        {/* Right Login Form Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Member Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-purple-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-purple-300"
                placeholder="Enter your password"
              />
            </div>
            <p>don't have any account? <Link to='/Register'><span className="text-red-400">Register</span></Link> here</p>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md font-medium shadow-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
          <button onClick={googleLogin} className="btn flex justify-center items-center text-purple-500 mt-8">Log in with Google <FaGoogle/> </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
