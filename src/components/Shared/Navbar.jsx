import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // আপনার পাথ ঠিক আছে কিনা দেখুন
import toast from "react-hot-toast";

// একটি ডিফল্ট অ্যাভাটার ইমেজ (যদি user.photoURL না থাকে)
// আপনি আপনার default-avatar.jpg ফাইলটি ব্যবহার করতে পারেন, 
// অথবা এই অনলাইন placeholder টি ব্যবহার করতে পারেন:
const defaultAvatar = "https://i.ibb.co/6bsk6Sj/default-avatar.jpg"; 

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch(error => toast.error(error.message));
  };

  // NavLink এর জন্য স্টাইল ক্লাস (Active হলে আন্ডারলাইন হবে)
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-lg font-bold text-primary border-b-2 border-primary" // Active Link
      : "text-lg font-medium text-base-content hover:text-primary transition-all duration-300"; // Inactive Link

  const navLinks = (
    <>
      {/* আমরা এখানে কাস্টম ক্লাস ব্যবহার করছি */}
      <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
      <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
      {user && <li><NavLink to="/my-profile" className={navLinkClass}>My Profile</NavLink></li>}
    </>
  );

  // মোবাইল মেন্যুর জন্য আলাদা স্টাইল (যাতে DaisyUI এর স্টাইল ঠিকমতো পায়)
  const mobileNavLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      {user && <li><NavLink to="/my-profile">My Profile</NavLink></li>}
    </>
  );


  return (
    // Navbar এ একটি হালকা shadow যোগ করা হলো
    <div className="navbar bg-base-100 my-4 shadow-sm rounded-box">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
            {mobileNavLinks} {/* মোবাইল মেন্যুর জন্য সিম্পল লিঙ্ক */}
          </ul>
        </div>
        
        {/* Logo */}
        <Link 
          to="/" 
          className="btn btn-ghost normal-case text-3xl font-bold text-primary transition-transform duration-300 hover:scale-105"
        >
          🐾 WarmPaws
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4"> {/* স্পেস বাড়ানো হলো */}
          {navLinks} {/* ডেক্সটপ মেন্যুর জন্য স্টাইল করা লিঙ্ক */}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            {/* অ্যাভাটার এ হোভার ইফেক্ট (ring) */}
            <label 
              tabIndex={0} 
              className="btn btn-ghost btn-circle avatar transition-all duration-300 hover:ring-2 hover:ring-primary hover:ring-offset-2" 
              title={user.displayName}
            >
              <div className="w-10 rounded-full">
                <img 
                  src={user.photoURL || defaultAvatar} 
                  alt="user avatar" 
                  referrerPolicy="no-referrer" //
                />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
              
              <li><span className="menu-title text-base">Hello, {user.displayName}</span></li>
              <div className="divider my-0"></div> 
              {/* Logout বাটনে হোভার ইফেক্ট */}
              <li>
                <button 
                  onClick={handleLogOut} 
                  className="font-medium text-red-500 hover:bg-red-500 hover:text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {/* বাটনগুলোতে হোভার ইফেক্ট (scale) */}
            <Link 
              to="/login" 
              className="btn btn-primary btn-sm md:btn-md transform transition-transform hover:scale-105"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="btn btn-secondary btn-sm md:btn-md transform transition-transform hover:scale-105"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;