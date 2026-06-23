import { useState } from "react";
import API from "./api";
import "./Login.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    API.post("/auth/login", {
      email,
      password,
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);

        setUser(res.data.userId);

        alert("Login successful");
      })
      .catch(() => {
        alert("Login failed");
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo">
          📈
        </div>

        <h1 className="login-title">
          Stock Trading Platform
        </h1>

        <input
          className="login-input"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-button"
          onClick={login}
        >
          Login
        </button>

        <div className="login-footer">
          Secure Stock Trading Dashboard
        </div>

      </div>
    </div>
  );
}

export default Login;