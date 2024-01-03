import React, { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = { email, password };
    console.log(user);
    setAuth(true);
    navigate('/');
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <div>
        <h2>Login</h2>
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginTop: "15px" }}
          />
          <button type="submit" style={{ marginTop: "15px" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
