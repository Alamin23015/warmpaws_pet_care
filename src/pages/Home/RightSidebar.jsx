import { useContext } from 'react';
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const RightSidebar = () => {
  const { user, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        toast.success("Google Sign-In successful!");
        navigate(from, { replace: true });
      })
      .catch(error => toast.error(error.message));
  };

  const vets = [
    { 
  name: 'Dr. Emily Carter', 
  specialty: 'Senior Pet Care', 
  img: 'https://i.ibb.co/3kKqYv1/vet-2.jpg' 
},
{ 
  name: 'Dr. James Lee', 
  specialty: 'Pet Nutrition', 
  img: 'https://i.ibb.co/0jR6Z3v/vet-1.jpg' 
},
  ];

  return (
    <div className="space-y-6">
      

      {!user && (
        <div className="p-4 bg-base-200 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Login With</h2>
          <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full">
            <FaGoogle /> Login with Google
          </button>
        </div>
      )}


      <div className="p-4 bg-base-200 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Find Us On</h2>
        <ul className="space-y-2">
         <button className='btn  join-item'> Facebook</button>
                    <button className='btn  join-item'> Twitter</button>
                    <button className='btn  join-item'>Instagram</button>
        </ul>
      </div>

      {/* Meet Our Vets (Q-Zone এর বদলে) */}
      <div className="p-4 bg-base-200 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Meet Our Vets</h2>
        <div className="space-y-4">
          {vets.map(vet => (
            <div key={vet.name} className="flex items-center gap-3">
              <img src={vet.img} alt={vet.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">{vet.name}</h4>
                <p className="text-sm">{vet.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;