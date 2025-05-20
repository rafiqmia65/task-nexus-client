import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
     setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
     setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  const signIn = (email, password) => {
     setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignUp = () => {
     setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
     setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    createUser,
    updateUser,
    signIn,
    googleSignUp,
    logOut,
    loading,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
