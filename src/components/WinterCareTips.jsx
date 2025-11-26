import React from 'react';

const tips = [
  "Keep your pet's paws clean and dry after walks.",
  "Provide warm bedding and avoid cold floors.",
  "Ensure your pet is well-hydrated and fed a balanced diet.",
  "Limit outdoor exposure during extreme cold.",
  "Use pet-safe moisturizers for dry skin and paws.",
];

const WinterCareTips = () => (
  <section className="max-w-6xl mx-auto p-8">
    <h2 className="text-3xl font-bold mb-6 text-center">Winter Care Tips for Pets</h2>
    <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
      {tips.map((tip, i) => (
        <li key={i}>{tip}</li>
      ))}
    </ul>
  </section>
);

export default WinterCareTips;
