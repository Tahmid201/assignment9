import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/petServices.json") 
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-10 px-4 md:px-8 lg:px-16">
      <h3 className="font-bold text-3xl text-center">
        Popular Winter Care Services
      </h3>

      <div className="grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      gap-6 
                      mt-12 
                      justify-items-center">

        {services.map((service) => (
          <div
            key={service.id}
            className="card bg-base-100 w-full sm:w-80 lg:w-96 shadow-md hover:shadow-xl transition-all"
          >
            <figure>
              <img
                className="w-full h-60 object-cover"
                src={service?.image}
                alt={service?.serviceName}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg md:text-xl">
                {service?.serviceName}
              </h2>

              <div className="text-sm md:text-base">
                <p>Price: {service?.price}</p>
                <p>Rating: {service?.rating}</p>
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm md:btn-md">
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

export default PopularSection;
