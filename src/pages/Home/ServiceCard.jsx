import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { serviceId, serviceName, image, price, rating } = service;

  return (
    <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-up">
      <figure className="h-56">
        <img src={image} alt={serviceName} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-semibold text-primary">${price}</span>
          <span className="text-md">Rating: {rating} ★</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/service/${serviceId}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;