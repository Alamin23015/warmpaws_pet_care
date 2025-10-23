import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/my-profile");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 py-12">
      <div className="card w-full max-w-lg mx-auto shadow-xl bg-white rounded-xl p-6">
        <form onSubmit={handleUpdate} className="card-body p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Update Your Profile</h1>

         
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-700">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Enter your name"
              className="input input-bordered input-lg text-base bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

        
          <div className="form-control mt-8">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-700">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              defaultValue={user?.photoURL}
              placeholder="Enter photo URL"
              className="input input-bordered input-lg text-base bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

        
          <div className="form-control mt-10">
            <button
              type="submit"
              className="btn btn-primary btn-lg bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;