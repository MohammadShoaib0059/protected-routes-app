import axios from 'axios';
import React, { useState } from 'react'

const SignIn = () => {
    const login = "http://localhost:3000/UserAuth";
    const [password,setPassword] =useState();
    const [email,setEmail] =useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          email: email,
          password: password,
        };
        console.log(userData);
        axios.post(login, userData)
          .then((response) => {
            if (response.status === 200) {
    
              console.log(response.status);
              console.log(response.data);
            }
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log("server responded");
    
            } else if (error.request) {
              console.log("network error");
            } else {
              console.log(error);
            }
          });
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
        onSubmit={handleSubmit}
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
  )
}

export default SignIn
