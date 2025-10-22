import { FaHeart, FaShieldAlt, FaStar } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className="my-24 p-12 bg-primary text-primary-content rounded-lg" data-aos="zoom-in">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose WarmPaws?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaStar className="text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Top-Rated Providers</h3>
          <p>We partner only with the best, most trusted pet care professionals in the area.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHeart className="text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Passionate Care</h3>
          <p>Every service is delivered with love and a deep understanding of your pet's needs.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Safe & Secure</h3>
          <p>Your pet's safety and comfort are our absolute highest priorities during winter.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;