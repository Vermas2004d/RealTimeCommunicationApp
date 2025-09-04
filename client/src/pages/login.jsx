import { MdEmail } from "react-icons/md";
import { FaLock, FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import Navbar from "../components/navbar";
import HeaderForLogin from "../components/headerForLogin";
import { useState } from "react";
import React from "react";
import "../styles/buttonStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (result.status === 200) {
        navigate("/secret");
      } else {
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <HeaderForLogin />
      <div className="bg-gray-950 min-h-screen flex justify-center items-center ">
        <div className=" text-white bg-gray-700 p-8 rounded-lg max-w-sm w-full shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4 border-gray-800 border py-2 px-3 rounded-lg">
              <MdEmail className="text-gray-500 mr-2" size={20} />
              <input
                className="focus:outline-none"
                type="email"
                name="email"
                placeholder="Username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-4 border-gray-800 border py-2 px-3 rounded-lg">
              <FaLock className="text-gray-500 mr-2" size={20} />
              <input
                className="focus:outline-none"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input type="checkbox" />
                <label className="ml-2 text-gray-300">Remember me</label>
              </div>

              <div className="text-sky-400 text-right  cursor-pointer hover:underline">
                Forgot password?
              </div>
            </div>

            <button
              className="glow-button w-full py-2 rounded-lg bg-sky-500  font-semibold text-white hover:bg-sky-400 focus:outline-none
               focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950 hover:cursor-pointer " 
              type="submit"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div>
            {/* here i am going to create a map for the array to sign in the user
                with the different social media platforms like google and microsoft*/}

            <div className="flex flex-col gap-3 max-w-sm mx-auto mt-10">
              <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-600">
                <FaGoogle className="text-green-500" size={20} />
                <span>Continue with Google</span>
              </button>

              <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-600">
                <FaFacebook className="text-blue-600" size={20} />
                <span>Continue with Facebook</span>
              </button>

              <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-600">
                <FaGithub className="text-gray-800" size={20} />
                <span>Continue with GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
