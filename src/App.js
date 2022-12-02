import Inputs from "./components/Inputs";
import React, { useState } from "react";
import Button from "./components/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

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
  const handleLogin = () => {
    console.log("login");
  };
  return (
    <main className="container">
      <h2>Register User</h2>
      <Inputs setEmail={setRegisterEmail} setPassword={setRegisterPassword} />
      <Button text="Create Account" handleClick={registerUser} />
      <div className="log-in">
        <p>Already have an Acount?</p>
        <Button text="Log In" handleClick={handleLogin} />
      </div>
    </main>
  );
}

export default App;
