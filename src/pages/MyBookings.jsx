// src/pages/MyBookings.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(saved);
  }, []);

  const handleRemove = (serviceId) => {
    const updated = bookings.filter(b => b.serviceId !== serviceId);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
    toast.success("Booking removed!");
  };

  if (bookings.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">No bookings yet!</h2>
        <Link to="/" className="btn btn-primary">Browse Services</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">My Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking, idx) => (
          <div key={idx} className="card bg-base-100 shadow-xl">
            <figure className="h-48">
              <img src={booking.image} alt={booking.serviceName} className="h-full w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{booking.serviceName}</h2>
              <p className="text-sm text-gray-500">Provider: {booking.providerName}</p>
              <p className="font-bold text-primary">${booking.price}</p>
              <p className="text-xs text-gray-400">
                Booked: {new Date(booking.bookedAt).toLocaleString()}
              </p>
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => handleRemove(booking.serviceId)}
                  className="btn btn-error btn-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;