import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; 

import toast from "react-hot-toast";



const defaultAvatar = "https://i.ibb.co/6bsk6Sj/default-avatar.jpg"; 

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch(error => toast.error(error.message));
  };

  
  
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-lg font-bold text-primary border-b-2 border-primary" // Active Link
      : "text-lg font-medium text-base-content hover:text-primary transition-all duration-300"; // Inactive Link

  const navLinks = (
    <>
     
     
      <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
      <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
      {user && <li><NavLink to="/my-profile" className={navLinkClass}>My Profile</NavLink></li>}
    </>
  );

  
  
  const mobileNavLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      {user && <li><NavLink to="/my-profile">My Profile</NavLink></li>}
    </>
  );


  return (
    
    
    <div className="navbar bg-base-100 my-4 shadow-sm rounded-box">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
            {mobileNavLinks} 
            
          </ul>
        </div>
        
       
       
        <Link 
          to="/" 
          className="btn btn-ghost normal-case text-3xl font-bold text-primary transition-transform duration-300 hover:scale-105"
        >
          🐾 WarmPaws
        </Link>
      </div>

    
    
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4"> 
          
          {navLinks} 
          
        </ul>
      </div>

 
 
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
           
           
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