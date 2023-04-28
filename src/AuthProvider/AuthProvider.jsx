/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // handle google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // handle facebook login
  const faceBookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  // email password register handle
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // handle login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // handle sing out user
  const logoutUser = () => {
    return signOut(auth);
  };
  // update user profile data
  const updateUserData = (name, photoUrl) => {
    updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl });
  };
  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // unmount
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);
  const authInfo = {
    user,
    faceBookLogin,
    googleLogin,
    createUser,
    loginUser,
    logoutUser,
    loading,
    updateUserData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
