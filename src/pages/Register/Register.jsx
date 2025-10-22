import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
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

    // Reset error
    setPasswordError("");

    // Password Validation Challenge
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }

    // Create user
    createUser(email, password)
      .then(result => {
        // Update profile
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Registration successful!");
            navigate("/"); // Navigate to home
          })
          .catch(error => {
            toast.error(error.message);
          });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        toast.success("Google Sign-In successful!");
        navigate("/"); // Navigate to home
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-3xl font-bold text-center">Register for WarmPaws</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photoURL" placeholder="http://example.com/image.png" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered pr-10"
              required
            />
            {/* Password Toggle Challenge */}
            <span 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-4 top-12 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Password Error Message */}
          {passwordError && (
            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
          )}

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="link link-primary">Login</Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline btn-primary">
            <FaGoogle /> Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;