import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";

const MainLayout = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-120px)]"> {/* Ensures footer is at bottom */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;