import UsersReducer from "./UserReducer";
import { createContext } from "react";
import { useReducer } from "react";

const INITIAL_STATE = {
  users: [],
  isFetching: false,
  error: false,
};


console.log("USERCONTEXT DATA : " + INITIAL_STATE.users);
// creating Context

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
