// MeetOurVets.jsx

const MeetOurVets = () => {
  const vets = [
    { name: 'Dr. Emily Carter', specialty: 'Senior Pet Care', img: 'https://i.ibb.co/fHwQ3h8/vet-1.jpg' },
    { name: 'Dr. James Lee', specialty: 'Pet Nutrition', img: 'https://i.ibb.co/3kKqYv1/vet-2.jpg' },
  ];

  return (
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
  );
};

export default MeetOurVets;