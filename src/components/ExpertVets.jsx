import React from 'react';

const vets = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Canine Health Specialist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Dr. Mike Thompson",
    specialty: "Veterinary Nutritionist",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: 3,
    name: "Dr. Priya Desai",
    specialty: "Animal Behaviorist",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Dr. Luis Ramirez",
    specialty: "Emergency & Critical Care",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const ExpertVets = () => (
  <section className="max-w-6xl mx-auto p-8">
    <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Expert Vets</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {vets.map(({ id, name, specialty, photo }) => (
        <div
          key={id}
          className="shadow-lg rounded-lg p-4 text-center bg-white"
        >
          <img
            src={photo}
            alt={name}
            className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600">{specialty}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ExpertVets;
