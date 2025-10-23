// Home.jsx

import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import HeroSlider from "./HeroSlider";
import WinterTips from "./WinterTips";

// ধাপ ২ থেকে তৈরি করা নতুন কম্পোনেন্টগুলো ইম্পোর্ট করুন
import LoginWith from "./LoginWith";
import FindUsOn from "./FindUsOn";
import MeetOurVets from "./MeetOurVets";
// LeftSidebar এবং RightSidebar ইম্পোর্ট করার দরকার নেই

const Home = () => {
  const services = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4">
      
      {/* Hero Slider */}
      <header>
        <div className="my-8" data-aos="fade-in">
          <HeroSlider />
        </div>
      </header>

      {/* --- ১. মূল কন্টেন্ট: সার্ভিস গ্রিড --- */}
      <main className='w-11/12 mx-auto my-3'>
        <h2 className="text-3xl font-bold text-center mb-8">Popular Winter Services</h2>
        
        {/* সার্ভিস কার্ড গ্রিড (৩ কলাম) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map(service => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </main>
      
      {/* --- ২. নিচের সেকশন (আগের সাইডবার কন্টেন্ট) --- */}
      <aside className="w-11/12 mx-auto my-16" data-aos="fade-up">
        {/* আমরা এই সেকশনটিকেও ৩-কলাম গ্রিডে ভাগ করছি */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* কলাম ১: Login */}
          <LoginWith />
          
          {/* কলাম ২: Find Us On */}
          <FindUsOn />
          
          {/* কলাম ৩: Meet Our Vets */}
          <MeetOurVets />

        </div>
      </aside>
      
      {/* --- ৩. Winter Tips (সবার নিচে) --- */}
      <div className="my-24">
        <WinterTips /> 
      </div>
    </div>
  );
};

export default Home;