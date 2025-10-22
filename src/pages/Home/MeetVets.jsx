const MeetVets = () => {
  const vets = [
    { name: 'Dr. Emily Carter', specialty: 'Senior Pet Care', img: 'https://i.ibb.co/fHwQ3h8/vet-1.jpg' },
    { name: 'Dr. James Lee', specialty: 'Pet Nutrition', img: 'https://i.ibb.co/3kKqYv1/vet-2.jpg' },
    { name: 'Dr. Sarah Chen', specialty: 'Behavioral Therapy', img: 'https://i.ibb.co/dG0sX9m/vet-3.jpg' },
  ];

  return (
    <div className="my-24" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-12">Meet Our Expert Vets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vets.map((vet) => (
          <div key={vet.name} className="card bg-base-100 shadow-xl text-center">
            <figure className="px-10 pt-10">
              <img src={vet.img} alt={vet.name} className="rounded-full w-32 h-32 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{vet.name}</h2>
              <p>{vet.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetVets;