import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ExtraSection = () => {
  const tips = [
    { id: 1, title: "Winter Grooming Tips", description: "Keep your pet's coat clean...", image: "https://github.com/Alamin23015/Source_image/raw/main/assets/7.jpg" },
    { id: 2, title: "Hydration During Cold", description: "Ensure your pet drinks enough...", image: "https://github.com/Alamin23015/Source_image/raw/main/assets/8.jpg" },
    { id: 3, title: "Cold Weather Exercise", description: "Keep your pet active...", image: "https://github.com/Alamin23015/Source_image/raw/main/assets/9.jpg" },
    { id: 4, title: "Pet Bedding Tips", description: "Use warm bedding...", image: "https://github.com/Alamin23015/Source_image/raw/main/assets/10.jpg" },
    { id: 5, title: "Paw Protection", description: "Protect your pet's paws...", image: "https://github.com/Alamin23015/Source_image/raw/main/assets/11.jpg" },
    { id: 6, title: "Nutritional Boost", description: "Add extra calories...", image: "https://github.com/Alamin23015/Source_image/raw/main/assets/12.jpg" },
  ];

  const handleLearnMore = (title) => {
    toast.success(`Exploring ${title} details!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Pet Health Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <div key={tip.id} className="card w-full bg-base-100 shadow-xl" data-aos="fade-up">
            <figure className="h-56">
              <img src={tip.image} alt={tip.title} className="h-full w-full object-cover rounded-t-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tip.title}</h2>
              <p className="text-gray-700">{tip.description}</p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/tip/${tip.id}`}
                  onClick={() => handleLearnMore(tip.title)}
                  className="btn btn-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSection;