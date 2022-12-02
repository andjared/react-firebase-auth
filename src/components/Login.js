import React from "react";
import Button from "./Button";

const Register = () => {
  const login = () => {
    console.log("login");
  };
  return (
    <section>
      <h2>Login User</h2>
      <div className="inputs">
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Password" />
      </div>
      <Button text="log in" handleClick={login} />
    </section>
  );
};

export default Register;
