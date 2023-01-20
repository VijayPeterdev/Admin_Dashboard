import axios from "axios";
import { LoginFailed, LoginStart, LoginSuccess } from "./AuthAction";

export const login = async (user, dispatch) => {
  dispatch(LoginStart());

  try {
    const res = await axios.post("/auth/signin", user);

    if (res.data.isAdmin) {
      dispatch(LoginSuccess(res.data));
    } else {
      dispatch(LoginFailed());
    }
  } catch (err) {
    dispatch(LoginFailed());
  }
};
