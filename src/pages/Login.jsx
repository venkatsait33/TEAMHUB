import React from "react";
import { useNavigate } from "react-router-dom";
import MotionDiv from "../utils/MotionDiv";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("Login Successful");
    navigate("/dashboard");
  };
  return (
    <MotionDiv delay={0.1}>
      <div className=" max-w-full h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 ">
        <div>
          <div className="card border-2 border-gray-300 rounded-lg shadow-lg w-96">
            <div className=" card-body shadow-lg rounded-lg w-96">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <picture>
                  <img
                    src="/logo.png"
                    alt=""
                    className=" w-30 h-30 object-contain"
                  />
                </picture>
                <div>
                  <h1 className="text-2xl text-center font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    TeamHub
                  </h1>
                  <span>Where your workday begins & ends</span>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                </fieldset>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Login;
