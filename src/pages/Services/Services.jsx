import { useEffect, useState } from "react";
// আপনার হোম পেইজের জন্য তৈরি করা ServiceCard কম্পোনেন্টটি ইম্পোর্ট করুন
import ServiceCard from "../Home/ServiceCard"; 

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect ব্যবহার করে ডেটা fetch করা হচ্ছে
  useEffect(() => {
    fetch('/services.json') // public ফোল্ডার থেকে fetch
      .then(res => res.json())
      .then(data => {
        setServices(data); // service-গুলো state-এ সেট করা
        setLoading(false); // লোডিং শেষ
      })
      .catch(error => {
        console.error("Failed to fetch services:", error);
        setLoading(false);
      });
  }, []); // [] মানে এই ইফেক্ট শুধু একবার চলবে (যখন কম্পোনেন্ট মাউন্ট হয়)

  // রিকোয়ারমেন্ট ৩: লোডিং স্টেট দেখানো
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // রিকোয়ারমেন্ট ৪ এবং ৫: UI রেন্ডার করা
  return (
    <div className="max-w-7xl mx-auto px-4 my-16">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4">All Our Winter Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our complete list of specialized winter care options, designed to keep your pet warm, healthy, and happy all season long.
        </p>
      </div>
      
      {/* রেসপন্সিভ গ্রিড লেআউট */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ServiceCard কম্পোনেন্ট re-use করে ম্যাপ করা */}
        {services.map(service => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;