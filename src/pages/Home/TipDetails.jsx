import { useParams, Link } from "react-router-dom";

const TipDetails = () => {
  const { tipId } = useParams();

  const tips = [
    { id: 1, title: "Winter Grooming Tips", description: "Keep your pet's coat clean...", image: "https://github.com/Alamin23015/Source_image/raw/main/9.jpg" },
    { id: 2, title: "Hydration During Cold", description: "Ensure your pet drinks enough...", image: "https://github.com/Alamin23015/Source_image/raw/main/10.jpg" },
    { id: 3, title: "Cold Weather Exercise", description: "Keep your pet active...", image: "https://github.com/Alamin23015/Source_image/raw/main/9.jpg" },
    { id: 4, title: "Pet Bedding Tips", description: "Use warm bedding...", image: "https://github.com/Alamin23015/Source_image/raw/main/10.jpg" },
    { id: 5, title: "Paw Protection", description: "Protect your pet's paws...", image: "https://github.com/Alamin23015/Source_image/raw/main/9.jpg" },
    { id: 6, title: "Nutritional Boost", description: "Add extra calories...", image: "https://github.com/Alamin23015/Source_image/raw/main/10.jpg" },
  ];

  const tip = tips.find((t) => t.id === Number(tipId));

  if (!tip) {
    return (
      <div className="text-center my-20 text-xl">
        Tip not found.
        <Link to="/extra-section" className="btn btn-primary ml-4">Back to Tips</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <img src={tip.image} alt={tip.title} className="w-full h-[500px] object-cover rounded-lg shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{tip.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{tip.description}</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;