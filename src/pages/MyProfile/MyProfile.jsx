import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] bg-base-200 py-12 px-4">
      
    
      <div 
        className="card w-full max-w-md bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" 
        data-aos="zoom-in"
      >
        <figure className="px-10 pt-10">
          <img 
            src={user.photoURL || "https://i.ibb.co/6y4G1Bn/default-avatar.jpg"} 
            alt={user.displayName} 
            
            className="rounded-full w-32 h-32 object-cover border-4 border-primary ring-4 ring-primary ring-opacity-30" 
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{user.displayName || "User Name"}</h2>
          <p className="text-lg text-gray-600">{user.email}</p>
          
          <div className="card-actions mt-6">
           
            <Link 
              to="/update-profile" 
              className="btn btn-primary btn-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;