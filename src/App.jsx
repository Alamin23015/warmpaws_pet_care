
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"; 
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthProvider from "./context/AuthProvider";import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

         
          <Route
            path="/service/:serviceId"
            element={
              <ProtectedRoute>
                <ServiceDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;