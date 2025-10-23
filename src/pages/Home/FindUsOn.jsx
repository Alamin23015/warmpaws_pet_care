import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // আইকন ইম্পোর্ট করুন

const FindUsOn = () => {
  return (
    <div className="p-4 bg-base-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Find Us On</h2>
   
      <ul className="space-y-2 flex flex-col"> 
        <button className='btn btn-ghost join-item'> <FaFacebook className='mr-2' /> Facebook</button>
        <button className='btn btn-ghost join-item'> <FaTwitter className='mr-2' /> Twitter</button>
        <button className='btn btn-ghost join-item'> <FaInstagram className='mr-2' /> Instagram</button>
      </ul>
    </div>
  );
};

export default FindUsOn;