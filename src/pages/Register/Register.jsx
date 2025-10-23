import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");

    setPasswordError(""); // Reset error

    // Password Validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must have one Uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must have one Lowercase letter.");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Registration successful!");
            navigate("/"); 
          })
          .catch(error => toast.error(error.message));
      })
      .catch(error => toast.error(error.message.split('(')[1].split(')')[0]));
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] bg-gray-50 py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Register your account
        </h1>
        
        <form onSubmit={handleRegister} className="space-y-4">
          
          <div>
            <label className="text-sm font-bold text-gray-700 tracking-wide">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name"
              className="w-full text-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" required />
          </div>
          
          <div>
            <label className="text-sm font-bold text-gray-700 tracking-wide">Photo URL</label>
            <input type="text" name="photoURL" placeholder="Enter photo URL"
              className="w-full text-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" required />
          </div>
          
          <div>
            <label className="text-sm font-bold text-gray-700 tracking-wide">Email</label>
            <input type="email" name="email" placeholder="Enter your email"
              className="w-full text-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" required />
          </div>
          
          <div className="relative">
            <label className="text-sm font-bold text-gray-700 tracking-wide">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full text-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              required
            />
            <span 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-4 top-10 cursor-pointer text-lg"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          
          {/* Password Error Message */}
          {passwordError && (
            <p className="text-red-500 text-sm font-semibold">{passwordError}</p>
          )}

          {/* Register Button */}
          <div className="pt-4">
            <button type="submit" className="w-full btn btn-primary btn-lg">
              Register
            </button>
          </div>
        </form>

        {/* Link to Login */}
        <p className="text-center text-gray-700">
          Already Have An Account? 
          <Link to="/login" className="font-bold text-secondary hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;