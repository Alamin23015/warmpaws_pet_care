import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import HeroSlider from "./HeroSlider";
import WinterTips from "./WinterTips";
import LoginWith from "./LoginWith";
import FindUsOn from "./FindUsOn";
import MeetOurVets from "./MeetOurVets";
import ExtraSection from "./ExtraSection";
import toast from "react-hot-toast";

const Home = () => {
  const services = useLoaderData();

  // Fallback to prevent crashes on reload if data fails
  if (!services || services.length === 0) {
    return (
      <div className="text-center my-20 text-xl">
        No services available. Please try again later.
        <button
          onClick={() => toast.error("Failed to load services.")}
          className="btn btn-error mt-4"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <header>
        <div className="my-8" data-aos="fade-in">
          <HeroSlider />
        </div>
      </header>

      <main className="w-11/12 mx-auto my-3">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Winter Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </main>

      <aside className="w-11/12 mx-auto my-16" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <LoginWith />
          <FindUsOn />
          <MeetOurVets />
        </div>
      </aside>

      <div className="my-24">
        <WinterTips />
      </div>

      <div className="my-24">
        <ExtraSection />
      </div>
    </div>
  );
};

export default Home;