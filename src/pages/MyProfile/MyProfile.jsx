import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>; // Should be handled by ProtectedRoute, but good fallback
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
      <div className="card w-96 bg-base-100 shadow-xl" data-aos="zoom-in">
        <figure className="px-10 pt-10">
          <img 
            src={user.photoURL || "https://i.ibb.co/6y4G1Bn/default-avatar.jpg"} 
            alt={user.displayName} 
            className="rounded-full w-32 h-32 object-cover border-4 border-primary" 
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{user.displayName}</h2>
          <p className="text-lg text-gray-600">{user.email}</p>
          <div className="card-actions mt-6">
            {/* Update Profile Challenge Button */}
            <Link to="/update-profile" className="btn btn-primary">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;