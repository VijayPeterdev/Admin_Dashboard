import AuthReducer from "./AuthReducer"; // 1st step reducer import
import { createContext, useEffect, useReducer } from "react";
import { json } from "react-router-dom";

const INITIAL_STATE = {
  // 2nd step Initial state create

  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

// Create Context         // 3rd  createContext Setup

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
    
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}{" "}
    </AuthContext.Provider>
  );
};
