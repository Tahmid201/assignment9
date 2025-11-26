import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({ displayName:'', photoURL:'' });
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    if (user) setForm({ displayName: user.displayName || '', photoURL: user.photoURL || '' });
  }, [user]);

  const handle = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateProfile({ displayName: form.displayName, photoURL: form.photoURL });
      toast.success('Profile updated');
    } catch (err) {
      toast.error(err.message || 'Update failed');
    } finally { setLoading(false); }
  };

  if (!user) return <div className="p-8 text-center">Please log in</div>;

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="text-center mb-4">
        <img src={user.photoURL || 'https://i.pravatar.cc/150?img=12'} className="w-28 h-28 rounded-full mx-auto object-cover" alt="avatar"/>
        <p className="mt-2 font-semibold">{user.displayName}</p>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
      <form onSubmit={handle} className="space-y-4">
        <input className="input input-bordered w-full" value={form.displayName} onChange={e=>setForm({...form, displayName:e.target.value})} placeholder="Name"/>
        <input className="input input-bordered w-full" value={form.photoURL} onChange={e=>setForm({...form, photoURL:e.target.value})} placeholder="Photo URL"/>
        <button className="btn btn-primary w-full" disabled={loading}>{loading ? 'Updating...' : 'Update Profile'}</button>
      </form>
    </div>
  );
};

export default Profile;
