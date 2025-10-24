import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyBookings from "./pages/MyBookings";
import TipDetails from "./pages/TipDetails"; // New page for ExtraSection links
import NotFound from "./pages/NotFound"; // New 404 page
import AuthProvider from "./context/AuthProvider";
import toast from "react-hot-toast"; // Import for notifications

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/service/:serviceId"
            element={
              <ProtectedRoute>
                <ServiceDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tip/:tipId"
            element={
              <ProtectedRoute>
                <TipDetails />
              </ProtectedRoute>
            }
          /> {/* New route for ExtraSection */}
          <Route
            path="/my-bookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          /> {/* Assuming MyBookings is protected */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;