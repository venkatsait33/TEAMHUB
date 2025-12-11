import React from "react";

const Login = () => {
  return (
    <div className=" max-w-full h-screen flex justify-center items-center ">
      <div>
        <div className="card border-2 border-gray-300 rounded-lg shadow-lg w-96">
          <div className=" card-body shadow-lg rounded-lg w-96">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
