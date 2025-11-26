import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || '/';

  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    try {
      console.log("Calling login with", form.email, form.password);
      await login(form.email, form.password);
      toast.success('Login successful!');
      navigate(redirectPath, { replace: true });
    } catch (err) {
      console.error("Login failed", err);
      toast.error(err.message || 'Login failed');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Logged in with Google!');
      navigate(redirectPath, { replace: true });
    } catch (err) {
      toast.error(err.message || 'Google login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>

      <button onClick={handleGoogleLogin} className="btn btn-outline w-full mt-4">
        Sign in with Google
      </button>

      <p className="mt-4 text-center">
        Don't have an account? <Link to="/signup" className="link">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
