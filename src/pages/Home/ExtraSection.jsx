import { Link } from "react-router-dom";

const ExtraSection = () => {
  const tips = [
    {
      id: 1,
      title: "Winter Grooming Tips",
      description: "Keep your pet's coat clean and dry to prevent skin issues.",
      image: "https://github.com/Alamin23015/Source_image/raw/main/9.jpg",
    },
    {
      id: 2,
      title: "Hydration During Cold",
      description: "Ensure your pet drinks enough water to stay healthy.",
      image: "https://github.com/Alamin23015/Source_image/raw/main/10.jpg",
    },
    {
      id: 3,
      title: "Cold Weather Exercise",
      description: "Keep your pet active with short, warm walks.",
      image: "https://github.com/Alamin23015/Source_image/raw/main/9.jpg",
    },
    {
      id: 4,
      title: "Pet Bedding Tips",
      description: "Use warm bedding to keep your pet cozy.",
      image: "https://github.com/Alamin23015/Source_image/raw/main/10.jpg",
    },
    {
      id: 5,
      title: "Paw Protection",
      description: "Protect your pet's paws from salt and ice.",
      image: "https://github.com/Alamin23015/Source_image/raw/main/9.jpg",
    },
    {
      id: 6,
      title: "Nutritional Boost",
      description: "Add extra calories for warmth in winter.",
      image: "https://github.com/Alamin23015/Source_image/raw/main/10.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Pet Health Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="card w-full bg-base-100 shadow-xl transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <figure className="h-56">
              <img
                src={tip.image}
                alt={tip.title}
                className="h-full w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl sm:text-2xl">{tip.title}</h2>
              <p className="text-gray-700 text-sm sm:text-base line-clamp-3">{tip.description}</p>
              <div className="card-actions justify-end mt-4">
                <Link to={`/tip/${tip.id}`} className="btn btn-primary">
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