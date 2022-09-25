import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setLogin, getLogin } from "../helpers/auth";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const userLoggedIn = getLogin();

  useEffect(() => {
    if (userLoggedIn) navigate("/home");
  });

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    setError(false);
    if (password === "StephJamesWedding") {
      setLogin(true);
      navigate("/home");
    } else {
      setError(true);
      //document.getElementById("#passwordInput").reset();
      setPassword("");
    }
  };
  return (
    <div className="login">
      <p>Please enter the password to enter:</p>
      <input
        onChange={handleChange}
        type="password"
        id="passwordInput"
        value={password}
      />
      <button onClick={handleSubmit}>Enter</button>
      {error && <p>It seems something has gone wrong. Please try again.</p>}
    </div>
  );
};

export default Login;
