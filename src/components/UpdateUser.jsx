import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const UpdateUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    email: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photo, email } = formData;
    const user = auth.currentUser;

    if (!user) {
      setErrorMessage("No user is currently logged in.");
      return;
    }
    try {
      if (name || photo) {
        await updateProfile(user, {
          displayName: name || user.displayName,
          photoURL: photo || user.photoURL,
        });
      }
      setSuccessMessage("User information updated successfully!");
      setErrorMessage("");
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-64px)]">
      <h1 className="text-2xl font-bold mb-4">Update Your Profile</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              value={formData.photo}
              onChange={handleChange}
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn bg-green-500 text-white">
              Update
            </button>
          </div>

          {successMessage && (
            <p className="text-green-500 mt-3 text-center">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 mt-3 text-center">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
