import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
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
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch(error => toast.error(error.message.split('(')[1].split(')')[0])); // Firebase error সুন্দর করা
  };

  const handleGoogleSignIn = () =>{
    googleSignIn()
      .then(() => {
        toast.success("Google Sign-In successful!");
        navigate(from, { replace: true });
      })
      .catch(error => toast.error(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] bg-gray-50 py-12">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Login your account
        </h1>
        
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full text-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          {/* Password Field */}
          <div className="relative">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </label>
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

          {/* Forget Password Link */}
          <div className="text-right">
            <Link 
              to="/forgot-password" 
              state={{ email: email }} 
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <button type="submit" className="w-full btn btn-primary btn-lg">
              Login
            </button>
          </div>

          {/* Social Login */}
          <div className="divider">Or login with</div>
          <button onClick={handleGoogleSignIn} type="button" className="w-full btn btn-outline btn-accent btn-lg">
            <FaGoogle /> Continue with Google
          </button>
        </form>

        {/* Link to Register */}
        <p className="text-center text-gray-700">
          Don't Have An Account? 
          <Link to="/register" className="font-bold text-secondary hover:underline ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;