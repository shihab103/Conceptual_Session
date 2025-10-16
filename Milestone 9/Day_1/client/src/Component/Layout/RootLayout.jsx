import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import { createContext } from "react";
import { auth } from "../../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
export const valueContext = createContext();


export default function RootLayout() {
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("Login successful!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar />
      <valueContext.Provider value={handleLogin}>
        <Outlet />
      </valueContext.Provider>
    </div>
  );
}
