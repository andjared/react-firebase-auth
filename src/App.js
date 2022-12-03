import Inputs from "./components/Inputs";
import React, { useState } from "react";
import Button from "./components/Button";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleLogin = () => {
    console.log("login");
  };

  return (
    <main className="container">
      {user ? (
        <>
          <h4>{user?.email}</h4>
          <Button text="log out" handleClick={handleLogout} />
        </>
      ) : (
        <>
          <h2>Register User</h2>
          <Inputs
            setEmail={setRegisterEmail}
            setPassword={setRegisterPassword}
          />
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
