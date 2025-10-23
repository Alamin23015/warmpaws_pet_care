// LoginWith.jsx

import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext'; // পাথ ঠিক রাখুন
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginWith = () => {
  const { user, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        toast.success("Google Sign-In successful!");
        navigate(from, { replace: true });
      })
      .catch(error => toast.error(error.message));
  };

  // যদি ইউজার লগডইন থাকে, এই কম্পোনেন্ট কিছুই দেখাবে না
  if (user) {
    return null;
  }

  return (
    <div className="p-4 bg-base-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Login With</h2>
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full">
        <FaGoogle /> Login with Google
      </button>
    </div>
  );
};

export default LoginWith;