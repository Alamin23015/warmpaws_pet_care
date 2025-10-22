import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState(''); // For forgot password challenge
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(result => {
        console.log(result.user);
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        toast.success("Google Sign-In successful!");
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl font-bold text-center">Login to WarmPaws</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              onChange={(e) => setEmail(e.target.value)} // Track email
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered pr-10" // Add padding for icon
              required
            />
            {/* Password Toggle Challenge */}
            <span 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-4 top-12 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <label className="label">
              {/* Forgot Password Challenge: Pass email state */}
              <Link 
                to="/forgot-password" 
                state={{ email: email }} // Pass the email
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center mt-4">
            New to WarmPaws? <Link to="/register" className="link link-primary">Create an account</Link>
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

export default Login;