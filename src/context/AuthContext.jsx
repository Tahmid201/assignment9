import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  updateProfile as fbUpdateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase.config';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  const updateProfile = (profile) => {
    if (!auth.currentUser) return Promise.reject(new Error('No user'));
    return fbUpdateProfile(auth.currentUser, profile);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, resetPassword, signInWithGoogle, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
