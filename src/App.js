import Inputs from "./components/Inputs";
import React, { useState } from "react";
import Button from "./components/Button";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import { useEffect } from "react";

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      setUserEmail("");
      setUserPassword("");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      setUserEmail("");
      setUserPassword("");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="container">
      {user ? (
        <>
          <h4>{user?.email}</h4>
          <Button text="Log out" handleClick={handleLogout} />
        </>
      ) : (
        <>
          <h2>Register User</h2>
          <Inputs setEmail={setUserEmail} setPassword={setUserPassword} />
          <Button text="Create Account" handleClick={registerUser} />
          <p>{user?.email}</p>
          <div className="log-in">
            <p>Already have an Acount?</p>
            <Button text="Log In" handleClick={handleLogin} />
          </div>
        </>
      )}
    </main>
  );
}

export default App;
