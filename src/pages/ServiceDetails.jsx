import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [form, setForm] = useState({ name:'', email:'' });

  useEffect(() => {
    fetch('/petServices.json')
      .then(r => r.json())
      .then(data => {
        const found = data.find(d => d.serviceId === Number(serviceId));
        setService(found || null);
      })
      .catch(() => toast.error('Failed to load service'));
  }, [serviceId]);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) { toast.error('Fill name and email'); return; }
    toast.success(`Booked "${service.serviceName}" successfully`);
    setForm({ name:'', email:'' });
  };

  if (!service) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{service.serviceName}</h1>
      <img src={service.image} alt={service.serviceName} className="w-full h-80 object-cover rounded mb-4"/>
      <div className="space-y-2">
        <p><strong>Provider:</strong> {service.providerName} — <a className="text-blue-600" href={`mailto:${service.providerEmail}`}>{service.providerEmail}</a></p>
        <p><strong>Category:</strong> {service.category}</p>
        <p><strong>Price:</strong> ${service.price}</p>
        <p><strong>Rating:</strong> {service.rating}</p>
        <p><strong>Slots Available:</strong> {service.slotsAvailable}</p>
        <p className="mt-2">{service.description}</p>
      </div>

      <hr className="my-6" />

      <h2 className="text-2xl font-semibold mb-3">Book Service</h2>
      <form onSubmit={submit} className="max-w-md space-y-4">
        <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} type="text" placeholder="Your name" className="input input-bordered w-full" required/>
        <input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} type="email" placeholder="Your email" className="input input-bordered w-full" required/>
        <button type="submit" className="btn btn-primary w-full">Book Now</button>
      </form>
    </div>
  );
};

export default ServiceDetails;
