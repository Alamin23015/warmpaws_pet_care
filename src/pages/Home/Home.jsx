import { useLoaderData } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import ServiceCard from "./ServiceCard";
// import WinterTips from "./WinterTips";
import MeetVets from "./MeetVets";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <HeroSlider />

      {/* Popular Services Section */}
      <div className="max-w-7xl mx-auto px-4 my-24">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Winter Care Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map(service => ( // Show only 6
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </div>

      {/* Extra Sections */}
      <div className="max-w-7xl mx-auto px-4">
        <WinterTips />
        <MeetVets />
        <WhyChooseUs /> {/* The required extra section */}
      </div>
    </div>
  );
};

export default Home;