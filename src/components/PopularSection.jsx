import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PopularSection = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/petServices.json')
      .then((res) => res.json())
      .then(setServices)
      .catch(console.error);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h3 className="text-3xl font-bold text-center mb-8">Popular Winter Care Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(s => (
          <div key={s.serviceId} className="card bg-white shadow rounded overflow-hidden">
            <img className="w-full h-60 object-cover" src={s.image} alt={s.serviceName} />
            <div className="p-4">
              <h4 className="font-semibold text-lg">{s.serviceName}</h4>
              <p className="text-sm text-gray-600 mt-1">{s.category}</p>
              <div className="flex justify-between items-center mt-3">
                <div>
                  <p className="text-sm">Price: ${s.price}</p>
                  <p className="text-sm">Rating: {s.rating}</p>
                </div>
                <button className="btn btn-primary" onClick={() => navigate(`/service/${s.serviceId}`)}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSection;
