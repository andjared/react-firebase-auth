import React, { useState } from "react";
import Button from "./Button";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const registerUser = () => {
    console.log(registerEmail, registerPassword);
  };
  return (
    <section>
      <h2>Register User</h2>
      <div className="inputs">
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
      </div>
      <Button text="Create Account" handleClick={registerUser} />
    </section>
  );
};

export default Register;
