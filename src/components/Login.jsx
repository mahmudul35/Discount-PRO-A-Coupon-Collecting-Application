import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center pb-5">
          Don't Have an account?{" "}
          <NavLink to="/auth/register" className="font-bold ">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
