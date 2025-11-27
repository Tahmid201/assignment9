import React from "react";
import services from "../../public/petServices.json";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();  // get navigate function

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Services</h1>

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
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/service/${s.serviceId}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
