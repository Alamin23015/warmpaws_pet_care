import { useLoaderData, useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard"; // আপনার সার্ভিস কার্ড কম্পোনেন্ট

const CategoryPage = () => {
  // ১. URL থেকে ক্যাটাগরির নামটি নেওয়া হচ্ছে (e.g., "grooming")
  const { categoryName } = useParams(); 
  
  // ২. লোডার থেকে সব সার্ভিস লোড করা হচ্ছে
  const allServices = useLoaderData();

  // ৩. সার্ভিসগুলোকে ফিল্টার করা হচ্ছে
  // আপনার services.json থেকে আসা 'category'-এর সাথে URL-এর 'categoryName' মেলানো হচ্ছে
  const filteredServices = allServices.filter(
    service => service.category.toLowerCase() === categoryName
  );

  // ৪. পেইজের টাইটেল সুন্দর করে দেখানোর জন্য (e.g., "grooming" -> "Grooming")
  const title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <div className="max-w-4xl mx-auto p-4 my-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Category: {title}
      </h2>

      {/* যদি সার্ভিস পাওয়া যায় */}
      {filteredServices.length > 0 ? (
        <div className="space-y-6">
          {filteredServices.map(service => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      ) : (
        // যদি কোনো সার্ভিস না পাওয়া যায়
        <p className="text-center text-lg text-error">
          No services found for this category: {title}
        </p>
      )}
    </div>
  );
};

export default CategoryPage;