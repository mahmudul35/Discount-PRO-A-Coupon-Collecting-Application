import { sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.config";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const emailFromLogin = location.state?.email || "";
    setEmail(emailFromLogin);
  }, [location]);

  const handlePasswordReset = () => {
    if (!email) {
      alert("Please enter an email!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        window.open("https://mail.google.com", "_blank");
        navigate("/auth/login");
      })
      .catch((error) => {
        alert("Error resetting password. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Forget Password
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button onClick={handlePasswordReset} className="btn btn-primary">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
