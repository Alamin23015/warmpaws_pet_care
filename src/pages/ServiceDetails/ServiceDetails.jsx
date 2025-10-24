import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  const { serviceId } = useParams();

  const service = services.find((s) => s.serviceId === Number(serviceId));

  if (!service) {
    return <div className="text-center my-20 text-xl">Service not found.</div>;
  }

  const { serviceName, image, price, rating, description, providerName, providerEmail, slotsAvailable, category } = service;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    toast.success(`Booking for ${serviceName} confirmed!`);
    form.reset(); // Clears the form after submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 my-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Side */}
        <div className="lg:col-span-2">
          <img src={image} alt={serviceName} className="w-full h-[500px] object-cover rounded-lg shadow-lg" />
          <h1 className="text-4xl font-bold mt-8 mb-4">{serviceName}</h1>
          <p className="text-lg text-gray-700 mb-6">{description}</p>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="badge badge-primary badge-lg p-4">Category: {category}</span>
            <span className="badge badge-secondary badge-lg p-4">Rating: {rating} stars</span>
            <span className="badge badge-info badge-lg p-4">Slots: {slotsAvailable}</span>
          </div>
          <div className="text-2xl font-bold text-primary mb-6">Price: ${price}</div>
          <div className="divider"></div>
          <h3 className="text-2xl font-semibold mb-3">Service Provider</h3>
          <p className="text-lg"><strong>Name:</strong> {providerName}</p>
          <p className="text-lg"><strong>Email:</strong> {providerEmail}</p>
        </div>

        {/* Right Side - Booking Form */}
        <div className="lg:col-span-1">
          <div className="card bg-base-200 shadow-xl sticky top-24">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-4">Book This Service</h2>
              <form onSubmit={handleBooking}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                    readOnly
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;