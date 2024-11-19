import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        console.log("result", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
        alert("Please signup");
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("result", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
        alert("Please signup");
      });
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
              name="password"
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
        <div className="divider px-8">OR</div>
        <div className="form-control mt-1 px-8">
          <button onClick={handleGoogleLogin} className="btn  bg-base-100">
            <FaGoogle /> Login with Google
          </button>
        </div>
        <p className="text-center py-5">
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
