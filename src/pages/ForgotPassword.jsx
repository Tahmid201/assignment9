import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const location = useLocation();
  const emailPrefill = location.state?.email || '';
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState(emailPrefill);
  const [sending, setSending] = useState(false);

  useEffect(()=>{ setEmail(emailPrefill); }, [emailPrefill]);

  const handle = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      await resetPassword(email);
      toast.success('Reset email sent — opening Gmail');
      setTimeout(()=> window.open('https://mail.google.com', '_blank'), 1200);
    } catch (err) {
      toast.error(err.message);
    } finally { setSending(false); }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handle} className="space-y-4">
        <input type="email" className="input input-bordered w-full" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required/>
        <button className={`btn btn-primary w-full ${sending ? 'loading' : ''}`} disabled={sending}>Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
