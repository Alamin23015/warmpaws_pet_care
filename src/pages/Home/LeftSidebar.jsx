import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  // এই ক্যাটাগরিগুলো আপনার JSON ডেটা অনুযায়ী হতে পারে
  const categories = [
    { id: 1, name: "Grooming" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Health" },
    { id: 4, name: "Activity" },
    { id: 5, name: "Comfort" },
    { id: 6, name: "Sitting" },
  ];

  return (
    <div className="p-4 bg-base-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Service Categories</h2>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category.id}>
            <NavLink 
              to={`/category/${category.name.toLowerCase()}`} 
              className={({ isActive }) => 
                isActive ? "btn btn-primary w-full" : "btn btn-ghost w-full"
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;