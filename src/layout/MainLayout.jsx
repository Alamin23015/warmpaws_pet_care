import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const MainLayout = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div>
 
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>

  
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;