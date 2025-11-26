import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
  const { register, signInWithGoogle } = useAuth();
  const [form, setForm] = useState({ name:'', email:'', password:'', photoURL:'' });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain a lowercase letter";
    return "";
  };

  const handle = async (e) => {
    e.preventDefault();
    const passError = validatePassword(form.password);
    if (passError) { toast.error(passError); return; }
    try {
      const cred = await register(form.email, form.password);
      await updateProfile(cred.user, { displayName: form.name, photoURL: form.photoURL || null });
      toast.success('Account created');
      navigate('/');
    } catch (err) {
      console.error("Signup error:", err);
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success('Signed up with Google');
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handle} className="space-y-4">
        <input
          className="input input-bordered w-full"
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
          placeholder="Full name"
          required
        />
        <input
          className="input input-bordered w-full"
          value={form.photoURL}
          onChange={e => setForm({...form, photoURL: e.target.value})}
          placeholder="Photo URL (optional)"
        />
        <input
          type="email"
          className="input input-bordered w-full"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          placeholder="Email"
          required
        />
        <div className="relative">
          <input
            className="input input-bordered w-full pr-10"
            type={show ? 'text' : 'password'}
            value={form.password}
            onChange={e => setForm({...form, password: e.target.value})}
            placeholder="Password"
            required
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-600"
            onClick={() => setShow(s => !s)}
          >
            <i className={show ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </button>
        </div>
        <button className="btn btn-primary w-full">Register</button>
      </form>

      <div className="divider">OR</div>
      <button onClick={handleGoogle} className="btn btn-outline w-full">
        <i className="fab fa-google mr-2"></i> Sign up with Google
      </button>

      <p className="mt-4 text-center">
        Have an account? <Link to="/login" className="link">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
