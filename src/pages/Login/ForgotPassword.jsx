import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();

  // Challenge: Pre-fill email from login page
  const prefilledEmail = location.state?.email || "";

  const handleReset = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        // Challenge: Redirect to Gmail
        // A bit aggressive, but follows the requirement.
        // A better UX is just the toast.
        setTimeout(() => {
          window.location.href = 'https://mail.google.com/';
        }, 2000); 
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleReset} className="card-body">
          <h1 className="text-3xl font-bold text-center">Reset Your Password</h1>
          <p className="text-center text-gray-600">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={prefilledEmail} // Pre-filled email
              placeholder="your-email@example.com"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Send Reset Link</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;