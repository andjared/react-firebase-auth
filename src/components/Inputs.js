import React from "react";

const Inputs = ({ setEmail, setPassword }) => {
  return (
    <section>
      <div className="inputs">
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Inputs;
