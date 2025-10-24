import { Outlet, useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Footer from "../Footer/Footer";
export const valueContext = createContext();

export default function RootLayout() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        console.log(currentUser);
        console.log("Login successful!");
        setUser(currentUser);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogOut = () => {
    return signOut(auth);
  };

  const contextValues = {
    handleLogin,
    handleRegister,
    handleLogOut,
    user
  };

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  });
  return () => unsubscribe();
}, []);

  return (
    <div>
      <valueContext.Provider value={contextValues}>
        <Navbar />
        <Outlet />
        <Footer/>
      </valueContext.Provider>
    </div>
  );
}
