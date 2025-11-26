import React, { useEffect, useState } from 'react';

const PopularSection = () => {

const [services , setServices] = useState([]);

useEffect(()=>{
    fetch('./petServices.json')
    .then(res=>res.json())
    .then(data=> setServices(data))
    .catch(err=>console.log(err))
},[])
console.log(services)

    return (
        <div className='mt-8 px-[145px]'>
            <div>
                <h3 className='font-bold text-[3xl] text-center'>Popular Winter Care Services</h3>
            </div>

            <div className='grid grid-cols-3 mt-12 gap-10'>
              {
            services.map(service =>(
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={service?.image}
      alt="pets" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service?.serviceName}</h2>
    
    <div>
      <p>Price:{service?.price}</p>
      <p>Rating:{service?.rating}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
            </div>
      
        ))}
            </div>

            {/* card */}
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
            </div>
        </div>
    )
}

export default PopularSection;