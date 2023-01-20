import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";
import { MovieContextProvider } from "./Context/MovieContext/MovieContext";
import { UserContextProvider } from "./Context/UserContext/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <MovieContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
