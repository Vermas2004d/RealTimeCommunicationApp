import Navbar from "../components/navbar";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { useState } from "react";
import "../styles/buttonStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

async function handleSubmit(e) {
    e.preventDefault();

    try{
          const result = await axios.post("http://localhost:3000/register" , {
            email , password
          }); 
          if(result.status === 201){
              navigate("/secret");
          }
          else{
            setEmail("");
            setPassword("");      
          }
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gray-950 min-h-screen flex justify-center items-center ">
        <div className="text-white bg-gray-700 p-8  max-w-sm w-full shadow-2xl rounded-lg">
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-center mb-2">
              Create an account
            </h2>
            <p className="text-sm text-center">
              Join our community and start connecting.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className=" mb-4">
              <input
                className="p-3 border-2 border-gray-500 rounded-sm w-full focus:outline-none"
                type="email"
                id=""
                placeholder="Email address"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className=" mb-6">
              <input
                className="p-3 border-2 border-gray-500 rounded-sm w-full focus:outline-none"
                type="password"
                id=""
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="glow-button  w-full py-2 rounded-lg bg-sky-500  font-semibold hover:cursor-pointer
               text-white hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="border-2 px-9 py-2 rounded-sm  cursor-pointer">
              <FaGoogle className="text-white" size={25} />
            </div>
            <div className="border-2 px-9 py-2 rounded-sm cursor-pointer">
              <FaFacebook className="text-white" size={25} />
            </div>
            <div className="border-2 px-9 py-2 rounded-sm cursor-pointer">
              <FaGithub className="text-white" size={25} />
            </div>
          </div>

          <div>
            <p className="text-blue-400 text-center">
              Already have an account? Sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
