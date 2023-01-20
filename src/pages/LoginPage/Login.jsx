import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "./../../Context/AuthContext/AuthContext";
import { login } from "../../Context/AuthContext/ApiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, dispatch } = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();

    login({ username, password }, dispatch);
  };

  return (
    <div className="login_container">
      <img
        className="login_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <form className="login_form">
        <input
          type="text"
          placeholder="Username"
          className="login_input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login_input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="login_btn"
          onClick={loginHandler}
          disabled={isFetching}
        >
          {" "}
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
