import React from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <NavLink to="/auth/register" className="btn btn-primary">
              Register
            </NavLink>
          </div>
        </form>
        <p className="text-center pb-5">
          Already Have an account?{" "}
          <NavLink to="/auth/login" className="font-bold ">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
