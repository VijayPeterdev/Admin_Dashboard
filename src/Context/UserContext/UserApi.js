import axios from "axios";
import {
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailed,
  createNewUserStart,
  createNewUserFailed,
  createNewUserSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
} from "./UserAction";

export const getAllUser = async (dispatch) => {
  dispatch(getAllUsersStart());

  try {
    const res = await axios.get("/user/", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(getAllUsersSuccess(res.data));
    console.log("Alluser is :" + res.data);
  } catch (err) {
    dispatch(getAllUsersFailed());
  }
};

// create New User

export const createNewUser = async (user, dispatch) => {
  dispatch(createNewUserStart());

  try {
    const res = await axios.post("/auth/signup", user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(createNewUserSuccess(res.data));
  } catch (err) {
    dispatch(createNewUserFailed());
  }
};

// Update User

export const updateUserApi = async (id,updateUser, dispatch) => {
  
  dispatch(updateUserStart());

  try {
    const res = await axios.put(`/user/${id}`, updateUser, {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
      }
    })
    console.log(res.data)
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailed());
    console.log(err)
  }
};
