import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { loginError, loginLoading, loginSuccess } from "../Redux/action";
import { handleLogin } from "../Redux/Loginredux/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLoginBtn = () => {
    dispatch(handleLogin());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <input
        type="text"
        value={email}
        onClick={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={password}
        onClick={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onclick={() => handleLoginBtn({ email, password })}>Login</button>
    </div>
  );
};

export default Login;
